# Lauren Vachon Portfolio 2026

Portfolio site with password-protected About and Case Studies pages.

## Push to GitHub

The repo is initialized and committed. To push to [portfolio2026](https://github.com/laurenvachon/portfolio2026):

1. In Terminal, go to this folder:
   ```bash
   cd /Users/laurenvachon/Documents/Cursor/laurenvachon.webflow
   ```

2. Push to GitHub (you’ll be prompted to sign in or use a token):
   ```bash
   git push -u origin main
   ```

   If you use SSH instead:
   ```bash
   git remote set-url origin git@github.com:laurenvachon/portfolio2026.git
   git push -u origin main
   ```

## Turn it into a live page (GitHub Pages)

1. Open **https://github.com/laurenvachon/portfolio2026**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**.
5. Click **Save**.

After a minute or two, the site will be at:

**https://laurenvachon.github.io/portfolio2026/**

(If the repo is under an organization or you use a custom domain, the URL may differ; GitHub will show it on the Pages settings screen.)

## Password

The About and Case Studies sections are protected. Default password is set in `js/password-protect.js` (change the `PASSWORD` variable to customize).
