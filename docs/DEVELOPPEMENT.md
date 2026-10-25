# Développement et extension

## Principes

- **Aucune chaîne de build externe** : Hugo seul concatène le CSS et compile le JavaScript (esbuild intégré).
- **Un fichier, une responsabilité** : une section d'accueil, une carte ou un module JS par fichier.
- **Données hors des gabarits** : textes d'interface dans `i18n/`, contenu dans `content/` et `data/`.
- **Amélioration progressive** : tout le contenu est lisible sans JavaScript ; le JS ajoute filtres, carrousel, menu mobile et apparitions.

## Lancer en local

```bash
hugo server --source exampleSite --themesDir ../..
```

Build de production identique à la CI :

```bash
hugo --source exampleSite --themesDir ../.. --gc --minify --panicOnWarning
```

## CSS

[`layouts/_partials/head/styles.html`](../layouts/_partials/head/styles.html) assemble, dans l'ordre :

1. `tokens.css` (variables), `fonts.css`, `base.css`, `layout.css` ;
2. tous les fichiers de `components/`, `sections/` et `pages/` ;
3. `assets/css/custom.css` du site s'il existe.

En production, le résultat est minifié et empreint (`integrity`). Les couleurs passent toutes par des variables (`--accent`, `--accent-ink` pour le texte, `--surface`...) : surchargez-les dans `custom.css`, par exemple :

```css
:root { --accent-light: #0f766e; --accent-dark: #5eead4; --radius-lg: 0.75rem; }
```

Les propriétés logiques (`margin-inline`, `inset-inline-start`...) rendent la mise en page compatible RTL.

## JavaScript

Les préférences des visiteurs (thème, couleur, sens d'écriture) passent par `modules/preferences.js` et sont appliquées avant le premier rendu par `head/theme-init.html`.

[`assets/js/main.js`](../assets/js/main.js) importe les modules de `assets/js/modules/` et les initialise séparément : un module en échec n'empêche pas les autres de démarrer. Chaque module cible des attributs `data-*` (`data-theme-toggle`, `data-filter`, `data-carousel`...) plutôt que des classes de style.

Pour ajouter un comportement : créez `modules/mon-module.js` exportant `initMonModule`, puis ajoutez-le à la liste de `main.js`.

## Ajouter une section d'accueil

1. Créez `layouts/_partials/home/ma-section.html` (le contexte est la page d'accueil).
2. Ajoutez `"ma-section"` dans `params.home.sections`.

Un nom inconnu produit un avertissement au build au lieu d'une page cassée.

## Fonctions partagées (`layouts/_partials/func/`)

| Partiel | Usage |
|---|---|
| `func/l.html` | `{{ partial "func/l.html" .title }}` : valeur traduite |
| `func/date.html` | `"2024-03"` vers « Mars 2024 », `present` vers « Aujourd'hui » |
| `func/period.html` | `(dict "start" "2022" "end" "present")` |
| `func/period-short.html` | Période compacte des pastilles de frise : « 2020-23 » |
| `func/image-url.html` | URL d'une image (bundle, assets ou static), relative ou absolue |

Les partiels `ui/` produisent du HTML : `ui/section-header.html` (dernier mot en couleur), `ui/rotating-badge.html`, `ui/ring.html` (jauge), `ui/skill-pills.html`, `ui/alt-timeline.html`, `ui/project-grid.html`, `ui/doodle.html` (formes décoratives), `ui/image.html`...

## Vérifications

La CI ([`.github/workflows/ci.yml`](../.github/workflows/ci.yml)) :

1. construit la démo avec `--panicOnWarning` (tout avertissement Hugo fait échouer) ;
2. vérifie hors ligne tous les liens internes avec lychee ;
3. publie la démo sur GitHub Pages depuis `master`.

Avant une modification visuelle, vérifiez le rendu en clair, en sombre, sur mobile et au clavier.
