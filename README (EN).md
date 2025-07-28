# 🌐 Linktree

Welcome! This project is a stylish and animated **personal Linktree** page featuring:

- 🎥 A **video background**
- 🌗 A custom **day/night toggle** with your own images
- ✨ Smooth and modern link animations
- 📱 Responsive design (mobile + desktop)
- 🚀 Free hosting via **GitHub Pages**

---

## 🛠️ Step-by-step Installation Guide

Even if you know **nothing about code**, follow this guide 👇

---

### 1. Create a GitHub Account (if needed)

- Go to [https://github.com](https://github.com)
- Click **Sign Up**
- Create your free account

---

### 2. Create a New Repository

- Once logged in, click the **"+"** in the top right > **"New repository"**
- Name your repo: `linktree` _(or whatever you prefer)_
- Set to ✅ `Public`
- Click **"Create repository"**

---

### 3. Download or Prepare the Project Files

Make sure you have these files and folders:

linktree/
├── index.html
├── style.css
├── script.js
├── README.md ← this file
└── assets/
├── logo.png ← your avatar/logo
├── background-night.mp4 ← video used in night mode (default) -->(recommended .mp4)
├── background-day.mp4 ← video used in light mode --> (recommended .mp4)
├── moon.png ← icon for dark mode
└── sun.png ← icon for light mode

💡 _Make sure the names match exactly, or the site might not work properly._

---

### 4. Upload Your Files to GitHub

#### Option 1: Web upload (easy)

- Go to your repository on GitHub
- Click **"Add file" > "Upload files"**
- Drag and drop all your files and folders (`index.html`, `style.css`, `script.js`, `assets/`, etc.)
- Click **"Commit changes"**

---

### 5. Enable GitHub Pages 🚀

- In your repo, go to **Settings > Pages**
- Under **"Source"**, choose:
  - Branch: `main`
  - Folder: `/ (root)`
- Click **"Save"**
- GitHub will give you a live URL like: https://<your-username>.github.io/linktree/

- Wait a few seconds, then visit the link — your site is live ✅

---

## 🎨 Easy Customization

You can:

- Replace `logo.png` with your own avatar/logo
- Replace `background-night.mp4` and `background-day.mp4` with your own videos
- Edit the links in `index.html`
- Customize colors in the `style.css` file using **CSS variables**:
  - Dynamic color control with:
    - `--color-text` → main text color
    - `--color-subtext` → subtitle / bio color
    - `--color-link-bg` → button background
    - `--color-link-shadow` → button shadow
    - `--color-link-hover` → hover shadow

💡 Each theme (dark and light) has its own set of color values!

```html
<a href="https://twitch.tv/YOURNAME" class="link" target="_blank">🎮 Twitch</a>
```

## ❓ FAQ

Q: My video background isn't working?
A: Make sure the file is named background.mp4 and located in the assets/ folder.

Q: How do I change the ☀️ and 🌙 icons?
A: These are replaced with custom images: sun.png and moon.png.

Q: It doesn’t look good on mobile?
A: The design is responsive, but you can adjust sizes inside style.css (@media section).

---

## 🎬 Smooth Day/Night Video Transition

This site uses **two stacked videos** to create a **crossfade effect** when switching between light and dark mode.  
This makes the theme change feel smooth and cinematic, with no visual flashes.

### How it works:

- `background-night.mp4` = used for dark mode
- `background-day.mp4` = used for light mode
- A script handles the opacity and playback

✅ Just include both files in your `/assets/` folder with those exact names — no extra setup needed!

## 👨‍💻 Credits & Author

This project was designed by BlackBones for his Twitch community.

Twitch: https://twitch.tv/BlackBonesV2
