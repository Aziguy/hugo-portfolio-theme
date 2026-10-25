# Configuration

Toutes les options se placent dans le `hugo.toml` du site. Les valeurs par défaut du thème sont dans le [`hugo.toml`](../hugo.toml) à la racine du dépôt. Exemple complet : [`exampleSite/hugo.toml`](../exampleSite/hugo.toml).

## Valeurs traduisibles

Toute chaîne de `params` ou des fichiers `data/` peut être donnée par langue :

```toml
jobTitle = { fr = "Développeur", en = "Developer" }
```

La fonction `func/l.html` choisit la langue courante, puis la langue par défaut.

## Paramètres

| Clé | Rôle | Défaut |
|---|---|---|
| `params.accent` | Couleur d'accent : `rose`, `violet`, `indigo`, `orange`, `cyan`, `blue`, `red`, `pink`, `slate`, `green` | `rose` |
| `params.tools` | Panneau de personnalisation pour les visiteurs (couleur, sens LTR/RTL, thème) | `true` |
| `params.colorScheme` | Thème initial : `system`, `light`, `dark` | `system` |
| `params.description` | Description par défaut (SEO) | |
| `params.ogImage` | Image de partage par défaut | |
| `params.logo` | Logo de l'en-tête, sinon le titre du site suivi d'un point d'accent | |
| `params.favicon` | Favicon, sinon celui du thème | |
| `params.dateFormat` | Format des dates d'articles | `:date_long` |
| `params.author.name` | Nom affiché partout | |
| `params.author.email` | Bouton e-mail et lien de contact | |
| `params.author.jobTitle` | Intitulé de poste | |
| `params.author.phone`, `.website`, `.location` | Coordonnées de la page CV | |
| `params.author.avatar` | Photo de la page CV | |
| `params.author.signature` | Image de signature (À propos) | |
| `params.resume.pdf` | PDF du CV (chemin ou URL, par langue possible) | |
| `params.contact.formAction` | URL d'un service de formulaire (Formspree...) | |
| `params.contact.title`, `.subtitle`, `.text` | Textes du bandeau de contact | textes i18n |
| `params.home.sections` | Sections de l'accueil, dans l'ordre | toutes |
| `params.home.projects`, `.posts`, `.services` | Nombre d'éléments affichés à l'accueil | 6, 2, 4 |
| `params.blog.showReadingTime` | Temps de lecture | `true` |
| `params.blog.showToc` | Sommaire des articles (désactivable par `toc: false`) | `true` |

## Sections de l'accueil

| Nom | Source |
|---|---|
| `hero` | Front matter `hero` de l'accueil : portrait en forme organique, prénom et nom en filigrane |
| `about` | Front matter `about` : citation en contour, photo ovale avec badge rotatif, 3 premières pastilles de `data/skills.yaml` |
| `achievements` | Onglets Formation / Expérience et frise alternée (`data/education.yaml`, `data/experience.yaml`) |
| `services` | Pages de `content/<langue>/services/`, cartes pastel |
| `projects` | Pages de `content/<langue>/projects/` filtrables, `featured: true` en premier |
| `contact` | Bandeau sombre avec badge rotatif (`params.contact`, `params.author.email`) |
| `testimonials` | `data/testimonials.yaml`, une recommandation à la fois |
| `posts` | Derniers articles de `content/<langue>/blog/` |
| `stats` | `data/stats.yaml` (non affichée par défaut) |
| `skills` | Toutes les pastilles de `data/skills.yaml` (non affichée par défaut) |

## Langues

```toml
defaultContentLanguage = "fr"

[languages.fr]
  languageName = "Français"
  languageCode = "fr-FR"
  contentDir = "content/fr"
  weight = 1

[languages.en]
  languageName = "English"
  languageCode = "en-US"
  contentDir = "content/en"
  weight = 2
```

Une page et sa traduction partagent le même chemin dans chaque `contentDir`. Pour une langue sans traduction intégrée, ajoutez `i18n/<code>.yaml` dans votre site en copiant [`i18n/en.yaml`](../i18n/en.yaml). Les langues de droite à gauche sont prises en charge (`languageDirection = "rtl"`) grâce aux propriétés CSS logiques.

## Menus

Utilisez `pageRef` pour des liens qui suivent la langue et la `baseURL`. Une entrée parente sans page (`url = "#"`) devient un bouton qui ouvre son sous-menu.

## Réglages Markdown recommandés

```toml
[markup.goldmark.parser]
  wrapStandAloneImageWithinParagraph = false   # images seules rendues en <figure>
[markup.highlight]
  noClasses = true
  style = "github-dark"
```

## Permaliens

```toml
[permalinks.page]
  blog = "/blog/:contentbasename/"
  projects = "/projects/:contentbasename/"
```

`:contentbasename` garde l'URL issue du nom de fichier, identique dans toutes les langues.
