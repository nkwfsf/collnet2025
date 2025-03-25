import os
import re
from bs4 import BeautifulSoup
import glob

def check_file_exists(file_path, html_file):
    # Remove URL parameters if any
    file_path = file_path.split('?')[0]
    
    # Check if it's an absolute URL or a data URL
    if file_path.startswith(('http://', 'https://', 'data:')):
        return True
    
    # Get project root
    base_path = os.getcwd()
    
    # Build absolute path
    abs_path = os.path.join(base_path, file_path)
    
    # Check if file exists
    return os.path.exists(abs_path)

def verify_images_in_html(html_file):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Find all img tags
    img_tags = soup.find_all('img')
    missing_images = []
    
    for img in img_tags:
        src = img.get('src')
        if src:
            if not check_file_exists(src, html_file):
                missing_images.append(src)
    
    return missing_images

def main():
    html_files = glob.glob('*.html') + glob.glob('pages/*.html')
    
    all_passed = True
    
    for html_file in html_files:
        missing_images = verify_images_in_html(html_file)
        
        if missing_images:
            all_passed = False
            print(f"\n❌ {html_file} has {len(missing_images)} missing images:")
            for img in missing_images:
                print(f"   - {img}")
        else:
            print(f"✅ {html_file}: All images found")
    
    if all_passed:
        print("\n✅ All images are properly referenced and exist!")
    else:
        print("\n❌ Some images are missing. Please fix the issues above.")

if __name__ == "__main__":
    main() 