# COLLNET 2025 Website - Fixed Issues

This document lists the issues that were identified and fixed in the COLLNET 2025 website.

## Issues Fixed

### 1. Committee Page
- The committee page had placeholder names instead of actual committee members
- Fixed by updating the committee page with real names and positions from the brochure document
- Reorganized the committee structure to match the actual organization

### 2. Missing Images Throughout the Site
- Placeholder images were used in many places instead of actual images
- Fixed by adding appropriate images in the following directories:
  - `images/committee/`: Images for committee members
  - `images/gallery/`: Images for the carousel
  - `images/sponsors/`: Logos for sponsoring organizations
  - Added an actual image of IEG for the venue section

### 3. Carousel Images
- The carousel on the homepage was using placeholder images
- Fixed by adding actual conference images from previous events
- Used the images provided in the `reference/carousel-images` folder
- Updated the carousel to include all 6 images with appropriate captions

### 4. Committee Member Images
- The "Meet the People Behind COLLNET 2025" section had missing images
- Fixed by adding actual photos for key committee members where available
- Used a default profile image when actual photos couldn't be found

### 5. Missing Partner/Sponsor Logos
- The "Knowledge Partners & Sponsors" section had missing logos
- Fixed by adding actual logos for:
  - Society for Library Professionals (SLP)
  - Special Libraries Association (SLA)
  - Institute of Economic Growth (IEG)
  - University of Delhi (DU)

## Verification Process
A verification script (`verify-images.py`) was created to ensure that all images referenced in the HTML files exist on the server. The script checks all image paths in all HTML files and confirms they are valid.

## Additional Tasks
- Created a proper images directory structure with subdirectories:
  - `images/committee/`
  - `images/gallery/`
  - `images/sponsors/`
- Added styling for committee member photos to ensure consistent appearance
- Improved the overall visual appearance by replacing placeholder content with actual images

---

All issues have been fixed and verified. The website is now ready for production. 