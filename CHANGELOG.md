# Journal des versions

## 2.1.0 (2026-10-25)

### Ajouté
- Identité visuelle inspirée du gabarit d'origine, réécrite : cartes à image débordante, pastilles pastel à jauge circulaire, frise alternée à onglets (section `achievements`), badges rotatifs, bandeau de contact sombre, témoignages un par un, formes décoratives.
- Panneau de personnalisation (`params.tools`) : 10 couleurs, sens LTR / RTL, clair / sombre.
- Page CV en deux colonnes, page À propos avec citation et signature, bandeau sombre des pages internes.
- Bouton de retour en haut avec progression de lecture, transitions de vue entre pages.

### Ajouté (suite)
- Pagination fenêtrée des articles (`params.blog.perPage`) avec repère « Page x sur y », pagination des projets combinée aux filtres (`params.projects.perPage`).
- Grilles plafonnées à leur nombre de colonnes nominal.
- Démo enrichie : 9 articles, 8 projets, 6 services, 5 expériences, 6 formations, 5 témoignages, 4 groupes de compétences.

### Corrigé
- Frise et listes à puces sans retrait : la remise à zéro des listes passe en `:where()`.
- Débordement horizontal du carrousel sur mobile.

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
