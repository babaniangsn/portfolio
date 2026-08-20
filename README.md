# Portfolio — Babaniang

Portfolio personnel de développeur web junior, thème "éditeur de code / terminal".

## Structure du projet

```
portfolio-babaniang/
├── index.html          → Page principale
├── css/
│   └── style.css        → Tous les styles
├── js/
│   └── script.js        → Interactions (typing effect, scroll reveal, formulaire, navbar active)
├── assets/               → Dossier prévu pour tes images (photo, captures d'écran de projets)
└── README.md
```

## Comment l'utiliser

1. Décompresse le zip.
2. Ouvre `index.html` dans ton navigateur (double-clic suffit, aucun serveur requis).
3. Pour le déployer en ligne : héberge le dossier tel quel sur GitHub Pages, Netlify ou Vercel (gratuit).

## Personnalisation rapide

- **Photo** : dans `css/style.css`, cherche `.hero-photo` et remplace l'URL de l'avatar généré par
  `url('assets/ma-photo.jpg')` après avoir placé ta photo dans le dossier `assets/`.
- **Projets** : dans `index.html`, section `<section id="projets">`, remplace les icônes des
  `project-thumb` par de vraies captures d'écran (`<img>`) et mets à jour les liens GitHub/Démo.
- **Couleurs** : toutes les couleurs sont centralisées en haut de `css/style.css` dans `:root`
  (variables `--navy`, `--blue`, `--blue-bright`, etc.) — modifie-les pour ajuster la palette partout d'un coup.
- **Formulaire de contact** : actuellement le bouton "Envoyer" ouvre le client mail (mailto) vers
  babaniangsn@gmail.com avec le message pré-rempli. Pour un vrai envoi côté serveur, connecte le
  formulaire à un service comme Formspree ou EmailJS.

## Technologies utilisées

- HTML5
- CSS3 (variables CSS, animations, grid/flexbox)
- JavaScript (vanilla — effet de frappe, révélation au scroll, navbar active, formulaire)
- Bootstrap 5 (grille, composants)
- Font Awesome (icônes)
- Google Fonts : Space Grotesk & JetBrains Mono
