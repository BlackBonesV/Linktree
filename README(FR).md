# 🌐 Linktree

Bienvenue ! Ce projet est une page personnelle **Linktree stylée et animée**, avec :

- 🎥 Une **vidéo de fond**
- 🌗 Un **bouton jour/nuit** avec vos propres images
- ✨ Des **liens animés et modernes**
- 📱 Un design responsive (mobile + PC)
- 🚀 Une mise en ligne gratuite sur **GitHub Pages**

---

## 🛠️ Installation étape par étape

Même si tu n’as **aucune connaissance en code**, tu peux suivre ce guide 👇

---

### 1. Créer un compte GitHub (si tu n’en as pas)

- Va sur [https://github.com](https://github.com)
- Clique sur **Sign Up** (ou **S’inscrire**)
- Crée ton compte gratuitement

---

### 2. Créer un nouveau dépôt (repo)

- Connecte-toi à ton compte GitHub
- Clique sur le bouton **"+"** en haut à droite > **"New repository"**
- Nomme ton repo : `linktree` _(ou autre nom que tu veux)_
- Coche : ✅ `Public`
- Clique sur **"Create repository"**

---

### 3. Télécharger les fichiers du projet

Tu dois rassembler les fichiers suivants :

linktree/
├── index.html
├── style.css
├── script.js
├── README.md ← ce fichier
└── assets/
├── logo.png ← ton avatar/logo
├── background.mp4 ← ta vidéo de fond (format .mp4 conseillé)
├── moon.png ← icône du thème nuit
└── sun.png ← icône du thème jour

💡 _Assure-toi que les noms soient bien **identiques**, sinon le site risque de ne pas fonctionner._

---

### 4. Uploader tes fichiers sur GitHub

#### Option 1 : en ligne (facile)

- Va sur ton repo GitHub
- Clique sur **"Add file" > "Upload files"**
- Glisse tous les fichiers et dossiers (`index.html`, `style.css`, `script.js`, `assets/`) dans la zone
- Clique sur **"Commit changes"**

---

### 5. Activer GitHub Pages 🚀

- Sur ton repo, va dans **Settings > Pages**
- Dans **"Source"**, choisis :
  - Branche : `main`
  - Dossier : `/ (root)`
- Clique sur **"Save"**
- GitHub va générer une URL du style : https://<ton-pseudo>.github.io/linktree/
- Attends quelques secondes, puis visite l’URL : ton site est en ligne ✅

---

## 🎨 Personnalisation facile

Tu peux :

- Modifier l’image `logo.png` → ton avatar ou logo perso
- Modifier `background.mp4` → ta propre vidéo de fond
- Modifier les liens dans `index.html` :

```html
<a href="https://twitch.tv/TON_NOM" class="link" target="_blank">🎮 Twitch</a>
```

## ❓ FAQ

Q : Ma vidéo de fond ne s’affiche pas ?
A : Vérifie que le fichier est bien nommé background.mp4 et placé dans le dossier assets/.

Q : Comment changer les emojis ☀️ et 🌙 ?
A : Ils sont remplacés par les images sun.png et moon.png dans /assets/.

Q : Mon site ne s'affiche pas bien sur téléphone ?
A : Le design est responsive, mais tu peux ajuster les tailles dans le fichier style.css (section @media).

## 👨‍💻 Crédits & auteur

Ce projet a été conçu par BlackBones pour sa communauté Twitch.

Twitch : https://twitch.tv/BlackBonesV2
