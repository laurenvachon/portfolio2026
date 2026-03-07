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

After a minute or two, the site will be at **https://laurenvachon.github.io/portfolio2026/** (or your custom domain once configured).

## Custom domain

1. **In GitHub:** Open the repo → **Settings** → **Pages**. Under **Custom domain**, type your domain (e.g. `portfolio.yourdomain.com` or `yourdomain.com`) and click **Save**. GitHub will add a `CNAME` file to your repo and show DNS instructions.

2. **In your DNS provider** (where you bought the domain – e.g. Namecheap, Google Domains, Cloudflare):
   - **If using a subdomain** (e.g. `portfolio.yourdomain.com`): Add a **CNAME** record: name = `portfolio` (or your subdomain), value = `laurenvachon.github.io`.
   - **If using the apex/root** (e.g. `yourdomain.com`): Add **A** records pointing to GitHub’s IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`  
     Optionally add a **CNAME** for `www` → `laurenvachon.github.io` so `www.yourdomain.com` works.

3. **Enforce HTTPS (recommended):** Back in **Settings** → **Pages**, check **Enforce HTTPS** after DNS has propagated (can take up to 24 hours).

4. **Pull the CNAME file (if GitHub added it):** If GitHub created `CNAME` when you saved the custom domain, run `git pull` so your local repo has it; then future pushes will keep the custom domain set.

## Password

The About and Case Studies sections are protected. Default password is set in `js/password-protect.js` (change the `PASSWORD` variable to customize).
