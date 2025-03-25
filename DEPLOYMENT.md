# Deploying COLLNET 2025 Website to GitHub Pages

This document provides step-by-step instructions for deploying the COLLNET 2025 conference website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The complete COLLNET 2025 website files

## Deployment Steps

### 1. Create a GitHub Repository

1. Log in to your GitHub account at [github.com](https://github.com)
2. Click the "+" icon in the upper right corner and select "New repository"
3. Name your repository (e.g., `collnet2025`)
4. Add a description (optional): "Website for the COLLNET 2025 Conference"
5. Choose "Public" visibility
6. Click "Create repository"

### 2. Initialize Your Local Repository

Open your terminal or command prompt and navigate to your project directory:

```bash
cd /path/to/collnet25
```

Initialize a Git repository and make your first commit:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit of COLLNET 2025 website"
```

### 3. Connect to GitHub and Push Files

Connect your local repository to the GitHub repository:

```bash
# Add the GitHub repository as a remote
git remote add origin https://github.com/YOUR-USERNAME/collnet2025.git

# Push your code to GitHub
git push -u origin main
```

Note: If your default branch is `master` instead of `main`, use:

```bash
git push -u origin master
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab near the top right)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch containing your website files (usually `main` or `master`)
5. Click "Save"
6. GitHub will show a message like "Your site is published at https://YOUR-USERNAME.github.io/collnet2025/"

### 5. Using a Custom Domain (Optional)

If you have a custom domain (e.g., collnet2025.org):

1. In your GitHub repository settings, under the "GitHub Pages" section, enter your custom domain in the "Custom domain" field
2. Click "Save"
3. GitHub will create a CNAME file in your repository

Next, configure your domain provider:

#### For an apex domain (e.g., collnet2025.org):

Add these A records pointing to GitHub's servers:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

#### For a www subdomain (e.g., www.collnet2025.org):

Add a CNAME record pointing to `YOUR-USERNAME.github.io`

### 6. Making Updates to Your Website

After deployment, when you make changes to your website:

1. Edit your files locally
2. Test the changes locally using a web server
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```

GitHub Pages will automatically rebuild and deploy your site, usually within a minute.

## Troubleshooting

### Site Not Showing Up
- Ensure you've selected the correct branch in the GitHub Pages settings
- Wait a few minutes - sometimes GitHub Pages take time to build
- Check if your repository is public (required for free GitHub Pages)

### Custom Domain Not Working
- Verify DNS settings have propagated (can take up to 48 hours)
- Make sure the CNAME file exists in your repository
- Ensure DNS records are correctly configured at your domain provider

### HTTPS Not Working
- After adding a custom domain, GitHub Pages automatically secures it with HTTPS
- This can take up to 24 hours to provision
- Ensure there are no mixed content warnings (HTTP resources on an HTTPS site)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages) 