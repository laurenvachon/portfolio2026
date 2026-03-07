# Get your site live on GitHub Pages

Your site isn’t showing yet because the code hasn’t been pushed to GitHub. Do these in order:

---

## Step 1: Push your code to GitHub

In **Terminal** (or Cursor’s terminal), run:

```bash
cd /Users/laurenvachon/Documents/Cursor/laurenvachon.webflow
git add -A
git commit -m "Update README"
git push -u origin main
```

- If it asks for a **username**, use your GitHub username.
- If it asks for a **password**, use a **Personal Access Token** (not your GitHub password):
  1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
  2. **Generate new token** → give it a name, check **repo**
  3. Copy the token and paste it when Terminal asks for the password

If you use **SSH** with GitHub, run this once, then push:

```bash
git remote set-url origin git@github.com:laurenvachon/portfolio2026.git
git push -u origin main
```

---

## Step 2: Turn on GitHub Pages

1. Open **https://github.com/laurenvachon/portfolio2026**
2. Go to **Settings** (repo tabs)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
5. Under **Branch**, select **main** and **/ (root)**
6. Click **Save**

---

## Step 3: Wait and open the site

- Wait 1–2 minutes (sometimes a bit longer).
- Open: **https://laurenvachon.github.io/portfolio2026/**

If you still see 404, wait a few more minutes and try again, or check that the **main** branch has files (Code tab) and that Pages is set to **main** and **/ (root)**.
