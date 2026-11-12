# FJC Handball — version 1

Base de site vitrine en **MkDocs Material** pour `fjchandball.fr`, aux couleurs rouge / noir / blanc.

Ce projet s'inspire de l'organisation générale du site amateur du CCMHB (équipes, actualités, albums, partenaires), sans en reprendre les logos, les photos ni le code.

## Préparation

Python 3.10+ recommandé. À la racine du projet :

```bash
python -m venv .venv
# Sous Windows PowerShell : .venv\Scripts\Activate.ps1
# Sous macOS/Linux : source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Ensuite, ouvrez **http://127.0.0.1:8000/**.

## Si vous possédez déjà un projet MkDocs

Sauvegardez votre projet avant toute modification. Vous pouvez copier les dossiers `overrides/` et `docs/assets/` ainsi que les paramètres nécessaires du `mkdocs.yml` plutôt que remplacer tout votre projet.

## Les fichiers à modifier en priorité

| Ce que vous voulez changer | Fichier |
|---|---|
| Couleurs, dimensions, cartes, responsive | `docs/assets/stylesheets/fjc.css` |
| Textes et disposition de la page d'accueil | `overrides/home.html` |
| Menu, nom du site, métadonnées SEO | `mkdocs.yml` |
| Logo provisoire FJC | `docs/assets/fjc-mark.svg` |
| Animations et carrousel | `docs/assets/javascripts/fjc.js` |
| Pages intérieures | `docs/*.md` |

### Les couleurs

Trois variables au début du fichier CSS :

```css
--fjc-red: #d7192e;
--fjc-black: #101115;
--fjc-white: #ffffff;
```

## Notes concernant cette maquette

- Les catégories d'équipes, les actualités et les visuels sont **des exemples**, à remplacer par les éléments réels du club.
- Le monogramme FJC est **un logo provisoire**, pas un logo officiel.
- Les cadres d'albums sont stylisés ; aucune photographie du CCMHB n'est reprise.
- La page Contact signale qu'un formulaire devra être configuré avant utilisation. **Aucun formulaire de contact opérationnel n'est encore fourni.**
- Certaines pages sont volontairement succinctes : elles serviront à vos prochaines modifications.

## Publication GitHub Pages

1. Créez un dépôt GitHub (par exemple `fjchandball`) et envoyez ce projet sur la branche `main`.
2. La GitHub Action `.github/workflows/deploy.yml` publie le site sur une branche `gh-pages`.
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch → Branch : gh-pages / (root)**, puis enregistrez.
4. Dans **Settings → Pages → Custom domain**, indiquez `fjchandball.fr` et enregistrez **avant** de changer vos DNS IONOS.
5. Chez IONOS, définissez les quatre enregistrements `A` suivants pour `@` :
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
6. Pour `www`, ajoutez un `CNAME` vers `<VOTRE_IDENTIFIANT_GITHUB>.github.io` (remplacez le nom entre chevrons ; ne mettez pas `https://`).
7. Évitez les enregistrements `A`, `AAAA` ou `CNAME` web contradictoires pour ces mêmes hôtes. **Ne supprimez pas les enregistrements de messagerie** (MX, SPF, DKIM, etc.).
8. Une fois le domaine résolu et le certificat prêt, activez **Enforce HTTPS** dans GitHub Pages.

Le fichier `docs/CNAME` permet de conserver le domaine sur la branche de publication avec `mkdocs gh-deploy`.

## Vérifier avant publication

```bash
mkdocs build --strict
```

Voir les guides officiels : https://www.mkdocs.org/user-guide/deploying-your-docs/ et https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
