# SOS.Monde – GitHub Pages ready
# 860607.github.io

Ce dépôt héberge mon **site utilisateur GitHub Pages**.  
Il sert principalement à :

- **Rediriger** vers l’application : [`/SOS-MONDE/`](https://860607.github.io/SOS-MONDE/)
- Exposer **ads.txt** à la racine du domaine pour **Google AdSense**
- Contenir la **balise de vérification** et le **script client** AdSense

## Liens
- Site utilisateur : https://860607.github.io/
- Application : https://860607.github.io/SOS-MONDE/
- `ads.txt` : https://860607.github.io/ads.txt

## AdSense
- ID éditeur : `ca-pub-2127913069931786`
- Fichier `ads.txt` :
## Déploiement (GitHub Pages)

[![pages-build-deployment](https://github.com/860607/860607.github.io/actions/workflows/pages/pages-build-deployment.yml/badge.svg?branch=main)](https://github.com/860607/860607.github.io/actions/workflows/pages/pages-build-deployment.yml)

Chaque commit sur `main` déclenche un déploiement GitHub Pages vers https://860607.github.io/ (redirection vers `/SOS-MONDE/`).

---

## AdSense

- ID éditeur : `ca-pub-2127913069931786`
- `ads.txt` : https://860607.github.io/ads.txt

### Bloc d’annonce (exemple)
Crée un **bloc Display** dans AdSense, récupère l’**ID de slot**, puis insère dans l’app (repo `SOS-MONDE`) :
```html
<ins class="adsbygoogle"
     style="display:block; margin:16px 0"
     data-ad-client="ca-pub-2127913069931786"
     data-ad-slot="VOTRE_AD_SLOT"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
