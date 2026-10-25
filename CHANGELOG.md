# Journal des versions

## 2.0.0 (2026-10-25)

Refonte complète du thème.

### Ajouté
- Structure de thème Hugo standard et site d'exemple bilingue (`exampleSite/`).
- Multilingue natif : textes d'interface FR/EN, sélecteur de langue, `hreflang`.
- Sections d'accueil déclarées dans `params.home.sections`, extensibles.
- Pages CV (frises expériences et formations) et À propos réutilisant les sections.
- Filtres de projets accessibles, fiche projet avec résultats, articles liés et sommaire.
- SEO : Open Graph, URL canonique, JSON-LD, flux RSS.
- 6 couleurs d'accent, thème clair / sombre sans flash.
- CI : build strict, vérification des liens, déploiement GitHub Pages.

### Modifié
- CSS natif modulaire à la place de Tailwind compilé dans le navigateur et du SCSS.
- JavaScript en modules ES compilés par Hugo à la place de jQuery.
- Police Montserrat variable en woff2 (110 Ko) à la place de 8,6 Mo de TTF.
- Documentation réécrite en UTF-8.

### Supprimé
- jQuery, Owl Carousel, Fancybox, MixItUp, AOS, Parallax, SmoothScroll et le CDN Tailwind.
- CSS compilé versionné, palettes en double, chargeur de page, contenu et images de l'ancien gabarit.
