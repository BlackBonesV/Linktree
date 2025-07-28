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
├── background-night.mp4 ← vidéo utilisée en mode nuit (par défaut) --> (mp4 conseillé)
├── background-day.mp4 ← vidéo utilisée en mode jour --> (mp4 conseillé)
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
- Modifier les vidéos `background-night.mp4` et `background-day.mp4` → tes propres ambiances
- Modifier les liens dans `index.html`
- Personnaliser les couleurs du site directement dans `style.css` :
  - Les couleurs sont gérées dynamiquement avec des **variables CSS**
  - Tu peux choisir :
    - `--color-text` → couleur du texte principal
    - `--color-subtext` → couleur de la bio et des sous-textes
    - `--color-link-bg` → fond des boutons (Twitch, YouTube, etc.)
    - `--color-link-shadow` → ombre du bouton
    - `--color-link-hover` → effet au survol

💡 Les couleurs sont **différentes pour le thème sombre et clair**.

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

---

## 🎬 Transition vidéo jour/nuit (fondu)

Ce site utilise **deux vidéos superposées** pour créer un **effet de fondu fluide** quand on change de thème (jour/nuit).  
Résultat : pas de flash brutal, juste une transition douce ✨

### Comment ça marche :

- `background-night.mp4` = s'affiche en thème sombre
- `background-day.mp4` = s'affiche en thème clair
- Un script gère l'opacité des deux vidéos

Pas besoin de faire quoi que ce soit de plus : il suffit de **fournir les deux fichiers vidéo dans le dossier `assets/`** avec les bons noms ✅

## 👨‍💻 Crédits & auteur

Ce projet a été conçu par BlackBones pour sa communauté Twitch.

Twitch : https://twitch.tv/BlackBonesV2
