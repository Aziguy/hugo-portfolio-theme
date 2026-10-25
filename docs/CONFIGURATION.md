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
| `params.accent` | Couleur d'accent : `rose`, `blue`, `emerald`, `violet`, `amber`, `slate` | `rose` |
| `params.colorScheme` | Thème initial : `system`, `light`, `dark` | `system` |
| `params.description` | Description par défaut (SEO) | |
| `params.ogImage` | Image de partage par défaut | |
| `params.logo` | Logo de l'en-tête, sinon initiales de l'auteur | |
| `params.favicon` | Favicon, sinon celui du thème | |
| `params.dateFormat` | Format des dates d'articles | `:date_long` |
| `params.author.name` | Nom affiché partout | |
| `params.author.email` | Bouton e-mail et lien de contact | |
| `params.author.jobTitle` | Intitulé de poste | |
| `params.resume.pdf` | PDF du CV (chemin ou URL, par langue possible) | |
| `params.contact.formAction` | URL d'un service de formulaire (Formspree...) | |
| `params.contact.title`, `.text` | Textes de la section contact | textes i18n |
| `params.home.sections` | Sections de l'accueil, dans l'ordre | toutes |
| `params.home.projects`, `.posts`, `.services` | Nombre d'éléments affichés à l'accueil | 3, 3, 4 |
| `params.blog.showReadingTime` | Temps de lecture | `true` |
| `params.blog.showToc` | Sommaire des articles (désactivable par `toc: false`) | `true` |

## Sections de l'accueil

| Nom | Source |
|---|---|
| `hero` | Front matter `hero` de `content/<langue>/_index.md` |
| `stats` | `data/stats.yaml` |
| `about` | Front matter `about` de l'accueil |
| `skills` | `data/skills.yaml` |
| `services` | Pages de `content/<langue>/services/` |
| `projects` | Pages de `content/<langue>/projects/`, `featured: true` en premier |
| `experience` | `data/experience.yaml` (3 premières entrées) |
| `testimonials` | `data/testimonials.yaml` |
| `posts` | Derniers articles de `content/<langue>/blog/` |
| `contact` | `params.contact` et `params.author.email` |

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
