# Contenu et données

## Créer du contenu

Les archétypes du thème préremplissent le front matter :

```bash
hugo new content/fr/projects/mon-projet.md
hugo new content/fr/blog/mon-article.md
hugo new content/fr/services/mon-service.md
```

Créez ensuite le même fichier dans `content/en/` pour la traduction.

## Accueil (`content/<langue>/_index.md`)

```yaml
hero:
  tagline: Texte d'accroche en **Markdown**.
  status: Disponible pour de nouveaux projets   # badge facultatif
  image: images/avatar.jpg
about:
  title: Construire vite, livrer sereinement
  image: images/about.jpg
  text: |
    Paragraphes en Markdown.
```

## Projet

```yaml
title: Atlas
date: 2025-06-10
description: Résumé affiché sur la carte et en SEO.
cover: images/projects/atlas.jpg
featured: true                 # mis en avant à l'accueil
categories: [Web]              # sert aux filtres
technologies: [TypeScript, React]
client: Nova Studio
role: Lead développeur
start: "2024-09"               # YYYY ou YYYY-MM
end: present
links:
  demo: https://...
  repo: https://github.com/...
results:
  - { value: "-50 %", label: Temps de chargement }
```

## Article

```yaml
title: Mon article
date: 2025-09-12
description: Résumé.
cover: images/blog/cover.jpg
tags: [tests, ci]
categories: [QA]
toc: true                      # false pour masquer le sommaire
```

## Service

```yaml
title: Automatisation des tests
weight: 2                      # ordre d'affichage
icon: shield-check             # fichier de assets/icons/
description: Résumé.
features:
  - Stratégie et plan de test
```

## Pages À propos et CV

- `content/<langue>/about.md` avec `type: about`, `image` et `sections: [stats, skills, testimonials]` pour réutiliser des sections de l'accueil sous le texte.
- `content/<langue>/resume.md` avec `type: resume` : frises issues de `data/experience.yaml` et `data/education.yaml`, compétences et bouton PDF.

## Fichiers de données (`data/`)

| Fichier | Champs |
|---|---|
| `socials.yaml` | `name`, `url`, `icon` |
| `stats.yaml` | `value`, `label`, `icon` |
| `skills.yaml` | `title`, `icon`, `items` (`name`, `level` de 0 à 100 facultatif) |
| `experience.yaml` | `role`, `company`, `location`, `start`, `end`, `summary`, `highlights`, `techs`, `url` |
| `education.yaml` | `title`, `school`, `start`, `end`, `description`, `url` |
| `testimonials.yaml` | `name`, `role`, `quote`, `avatar` |

Les textes traduisibles s'écrivent `{ fr: "...", en: "..." }`, les listes `highlights: { fr: [...], en: [...] }`. En YAML, entourez de guillemets toute valeur contenant une virgule dans un dictionnaire en ligne.

## Images

Un chemin d'image est cherché dans cet ordre : ressource de la page (bundle), `assets/`, puis `static/`. Les images JPEG, PNG ou WebP placées en bundle ou dans `assets/` sont redimensionnées automatiquement (`srcset`) ; les autres sont servies telles quelles.

## Shortcodes

```markdown
{{< button href="/projects/" style="primary" >}}Voir les projets{{< /button >}}

{{< notice type="warning" >}}Texte en **Markdown**.{{< /notice >}}
```

`type` : `info`, `success`, `warning`.
