# SOS.Monde (starter statique)

Ce dépôt contient une base **très simple** de site statique prêt pour **GitHub Pages** avec :
- PWA minimale (manifest + service worker)
- i18n simple (FR/EN/zh/ja)
- Bandeau de **consentement cookies** (minimal)
- Emplacement pour **Google AdSense** (chargé uniquement si consentement)
- Fichiers SEO : `robots.txt`, `sitemap.xml`, `ads.txt`

## Étapes rapides
1. Uploadez tous les fichiers à la racine du dépôt.
2. Dans **Settings → Pages** : Source = *Deploy from a branch*, Branch = `main`, dossier = `/`.
3. Visitez l’URL affichée dans Settings → Pages (ex. `https://<VOTRE_PSEUDO_GITHUB>.github.io/sos-monde/`).

## À personnaliser
- Dans `sitemap.xml` et `robots.txt`, remplacez `<VOTRE_PSEUDO_GITHUB>` par votre pseudo.
- Dans `index.html`, mettez vos identifiants AdSense (`ca-pub-...` et `data-ad-slot`).
- Dans `ads.txt`, mettez votre `pub-...` AdSense.
