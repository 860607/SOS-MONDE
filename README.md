# SOS.Monde — Starter PWA

Ce dépôt contient un squelette minimal pour le site **SOS.Monde** :
- PWA (manifest + service worker)
- Multilingue (FR/EN/zh/ja) via un dictionnaire simple
- Fond clair, design minimal
- Emplacements publicitaires Google AdSense (header + inline) — à activer après consentement
- Footer avec mentions, ads.txt, robots.txt, sitemap.xml

## Démarrage local
Servez le dossier à la racine avec un petit serveur local (ex. `npx serve`), puis ouvrez `http://localhost:3000`.

## Déploiement rapide
- **GitHub Pages** : mettez tout à la racine du dépôt `main` et activez Pages (branch `main`, folder `/root`).
- **Netlify/Vercel** : import du dépôt → build command vide, output dir `/`.

## À personnaliser
- Remplacez `ca-pub-XXXXXXXXXXXXXXXX` et les `ad slot` dans `index.html`.
- Personnalisez les textes i18n dans `assets/js/i18n.js`.
- Ajoutez des pages ou sections.
- Remplacez les icônes dans `assets/img/`.

Propriété intellectuelle de **BIBI ONDOUA** — contact : b.ondoua00@gmail.com
