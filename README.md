# Ali Golestaneh — Personal Robotics Website

This is the source project for [aligolestaneh.com](https://aligolestaneh.com). It is a static website built with Astro, TypeScript, and CSS. The four main pages are **About Me**, **News**, **Publications**, and **Services**.

Most of the content you will want to edit is collected in one file: [`src/data/site.ts`](src/data/site.ts). The site does not use a content management system; you edit the source files, preview the result locally, and push the changes to GitHub when you are ready to publish.

## Contents

- [Quick start](#quick-start)
- [Edit news](#edit-news)
- [Change About Me text](#change-about-me-text)
- [Update education, experience, and awards](#update-education-experience-and-awards)
- [Update Services](#update-services)
- [Add or edit a publication](#add-or-edit-a-publication)
- [Change links, photos, and the CV](#change-links-photos-and-the-cv)
- [Change design or navigation](#change-design-or-navigation)
- [Check changes before publishing](#check-changes-before-publishing)
- [Publish with GitHub Pages](#publish-with-github-pages)
- [Project file map](#project-file-map)

## Quick start

### Use the copy on your Batman drive

Your working copy is `B:\website`. In Windows PowerShell, start the local site with:

```powershell
Set-Location B:\website
pnpm dev
```

Keep that PowerShell window open and open the local address Astro prints. It is usually <http://localhost:4321/>. You can also type `http://127.0.0.1:4321/` in a browser on the same computer. This local address works only while the development server is running; press **Ctrl+C** in PowerShell to stop it.

To open the project in Visual Studio Code, if its `code` command is installed, use a second PowerShell window:

```powershell
code B:\website
```

You can also open that folder from the editor's **File → Open Folder** menu. Edit files on `B:`; the original working copy under your Documents folder will not automatically receive later edits made on `B:`.

If PowerShell says `pnpm` is not recognized, install Node.js 22 or later and pnpm 11, then reopen PowerShell. Run `node --version` and `pnpm --version` to check. You can install the project dependencies with `pnpm install` from `B:\website` if needed.

### Start, build, and preview

There are two ways to view the site locally:

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the development server. Edits refresh in the browser automatically. Use this while writing content. |
| `pnpm build` | Generates the production version in `dist/`. This checks that the site can be built; it does not publish it online. |
| `pnpm preview` | Serves the already built `dist/` version locally, so you can inspect the production output. Run `pnpm build` first. |

For a complete pre-publish check, run these commands from `B:\website`:

```powershell
pnpm check
pnpm build
pnpm preview
```

Open the preview URL printed in the terminal. If `pnpm dev` is already using the default port, Astro may print a different port for preview. Stop either server with **Ctrl+C** in the PowerShell window running it. None of these commands makes the site public.

### You only want to edit text

1. Open the project folder in a code editor such as Visual Studio Code.
2. Open `src/data/site.ts`.
3. Find the section described below, edit its text, and save the file.
4. If the local site is running, it will refresh automatically. Check the change in your browser before publishing it.

For news updates, edit the `news` array. The homepage uses one short research introduction beside your name; edit `site.introduction` in the same file.

### Run the site locally

Install [Node.js](https://nodejs.org/) 22 or later and pnpm 11. Open PowerShell in the project folder and run:

```powershell
pnpm install
pnpm dev
```

Open the local URL printed by Astro. It is usually <http://localhost:4321/>. Leave the terminal window running while you edit. To stop the local server, focus that terminal and press **Ctrl+C**.

To check and build the site:

```powershell
pnpm check
pnpm build
```

The built website is written to `dist/`. You can preview that built version with `pnpm preview` after running `pnpm build`.

## Edit news

All news items are in `src/data/site.ts`, under:

```ts
export const news: NewsItem[] = [
  // news records go here
];
```

Each entry has a date and title. The description and link are optional:

```ts
{
  date: "October 2026",
  title: "A paper was presented at Example Robotics Conference",
  text: "One short sentence explaining the update.",
  href: "https://example.com/paper",
  linkLabel: "Paper"
},
```

Replace the example wording and URL with verified information before using this example as a real news item. If you do not have a useful link or description, omit `href`, `linkLabel`, or `text` entirely:

```ts
{ date: "2026", title: "Your verified update" },
```

### News editing tips

- Put the newest item at the **top** of the array. The site displays entries in the order you write them; it does not sort dates automatically.
- The About Me page shows the first four entries. The News page shows every entry. Moving an item higher therefore changes what appears on the homepage.
- Use a month and year when you know the month, or just the year when that is all you can confirm. Do not guess a date.
- `href` must be a full link beginning with `https://` or `http://`. A link button appears only when `href` exists. `linkLabel` is its visible label, such as `Paper`, `Project`, or `Video`.
- Keep `text` to one concise sentence. The title should still make sense if a visitor only skims it.
- To edit an item, change its fields. To remove one, delete its entire `{ ... }` record and leave commas between the remaining records.

## Change the homepage introduction

Open `src/data/site.ts` and edit the `site` object:

| Field | Where it appears |
| --- | --- |
| `introduction` | One concise research sentence beside your name in the homepage hero |
| `role` | Structured profile information used by search engines |
| `affiliation` | Lab and institution text used in site data |
| `email` | Contact links around the site |
| `scholarUrl`, `githubUrl`, `linkedinUrl` | Professional profile buttons and footer links |
| `portrait`, `portraitAlt` | Homepage photo URL and its accessible description |

Page titles and short descriptions for search and social previews are passed to `BaseLayout` near the top of each page file. The homepage browser-tab title is your name in `src/pages/index.astro`. The browser icon is `public/favicon-robot.svg`, also referenced by `src/layouts/BaseLayout.astro` and `public/site.webmanifest`. News is in `src/pages/news.astro`; Publications is in `src/pages/publications.astro`; and Services is in `src/pages/services.astro`. Keep descriptions accurate and to a sentence or two.

## Update education, experience, and awards

These records are in `src/data/site.ts`:

- `education` — degrees and institutions.
- `experience` — research appointments and professional experience.
- `awards` — recognition shown near the bottom of About Me.

Each education and experience record uses `title`, `organization`, `period`, and an optional `detail`. Copy a neighboring record when adding one, then replace every field with verified information. Keep the date format consistent with the other entries.

The homepage currently displays the first four awards (`awards.slice(0, 4)`). Put the awards you want visitors to see first near the top of the array. Best Student Paper Award text is automatically colored gold when its title contains **“Best Student Paper Award.”**

## Update Services

Teaching roles are the `teachingExperience` array in `src/data/site.ts`. Each record has `title`, `organization`, and `period`. Edit a record or copy one to add a verified role.

The Paper Review section is in `src/pages/services.astro`. The current sentence is deliberately general because the reviewed venues and years have not been added. Once you have those details, replace that paragraph with verified information. For example, you can use a short list in that file:

```astro
<ul>
  <li>Reviewer, verified venue name — verified year</li>
</ul>
```

Replace the descriptive example above with the actual venue and year; do not leave example text on the public website.

## Add or edit a publication

Publications are records in the `publications` array in `src/data/site.ts`. The Publications page reads from this list, and the homepage shows a selected subset.

Copy an existing publication object and update its fields. The `Publication` type at the top of the file documents which fields are available:

| Field | Required? | Purpose |
| --- | --- | --- |
| `id` | Yes | Short unique identifier, for example `my-paper`; used to feature the paper on the homepage |
| `title` | Yes | Published paper title |
| `authors` | Yes | Author names in the published order; your name is automatically bolded when the name contains “Golestaneh” |
| `venue` | Yes | Journal, conference, or preprint status text to display |
| `year` | Yes | Publication year, as a number |
| `description` | Yes | Concise plain-language summary |
| `status` | No | Optional badge, such as `Preprint` or a verified award label |
| `paper`, `arxiv`, `doi`, `code`, `video` | No | Resource links; buttons are shown only for fields with URLs |
| `image` | No | Website path to the paper thumbnail, such as `/assets/papers/my-paper-fig1.webp` |
| `imageAlt` | No | Description of the image for screen-reader users |
| `bibtex` | Yes | Citation text displayed in the BibTeX control |

Keep publications newest first. The Publications page search checks the title, authors, venue, and description; the year filter uses `year`.

### Show a new publication on the homepage

In `src/pages/index.astro`, find `featuredPublications`. Add the new publication's `id` to its list to show it in the homepage section:

```ts
const featuredPublications = publications.filter((publication) =>
  ["metapusher", "aura", "activepusher", "my-paper"].includes(publication.id)
);
```

Use the exact `id` from the publication record. A new publication will appear on the Publications page even if you do not feature it on the homepage.

### Replace a paper thumbnail

1. Save an optimized image in `public/assets/papers/`.
2. Set `image` to the path starting with `/assets/papers/`.
3. Write an accurate `imageAlt` description.

For instance, the file `public/assets/papers/aura-fig1.webp` is referenced in data as `/assets/papers/aura-fig1.webp`. Do not put `public` at the start of the website path. The full-resolution source figures are kept separately in `assets/source-paper-figures/`; the browser uses the optimized WebP images.

## Change links, photos, and the CV

### Profile links and photo

Change the URLs in the `site` object in `src/data/site.ts`. The `portrait` field can be a public image URL or a file placed under `public/` (then use a website path such as `/images/portrait.webp`). Update `portraitAlt` whenever you change the photo. Only use images you have permission to publish.

### CV PDF

The Download CV button serves `public/cv.pdf` directly. This is the original resume PDF you supplied. To update it later, replace that file with your new PDF and keep the filename `cv.pdf`; the site will serve your file as-is.

## Change design or navigation

- **Navigation labels and destinations:** `src/components/Navbar.astro`. The current four links are deliberately defined there. If you change a destination, make sure a matching page exists under `src/pages/` and update `src/pages/sitemap.xml.ts` too.
- **Colors, typography, spacing, responsive behavior, dark mode:** `src/styles/global.css`. The theme colors are CSS variables near the top of the file, including separate light and dark palettes. The browser saves the manual light/dark selection.
- **Shared page layout, canonical URLs, metadata, and person schema:** `src/layouts/BaseLayout.astro`.
- **Social links in the footer:** the shared site data in `src/data/site.ts` and the markup in `src/components/SocialLinks.astro` / `src/components/Footer.astro`.
- **Logo card and browser icon:** files under `public/`, including `og-card.svg`, `og-card.png`, and `favicon-robot.svg`.

For normal biography or news edits, you should not need to change Astro components or CSS.

## Check changes before publishing

With the development server running, refresh the relevant page and check desktop and narrow/mobile widths. Then, from the project folder, run:

```powershell
pnpm check
pnpm build
```

`pnpm check` reports Astro and TypeScript problems. `pnpm build` confirms Astro can generate the static site. Fix errors before publishing. The finished files will be in `dist/`; do not edit `dist/` directly because the next build replaces it.

Before posting a content update, check that:

1. Names, author order, dates, awards, and links are verified.
2. News is in newest-first order and the item you want on the homepage is among the first four.
3. Any image path exists under `public/` and its alt text describes the image.
4. The local page looks right on desktop and mobile and the links go to the intended destinations.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when a commit is pushed to the `main` branch. GitHub Pages must use **GitHub Actions** as its publishing source. The custom domain file is `public/CNAME` and names `aligolestaneh.com` as the canonical host.

The copy on `B:\website` currently has no GitHub remote configured, so it is not yet connected to a live repository. To check this, run `git remote -v` from `B:\website`; no output means no remote is set. The site stays local until you connect a repository and push it.

### First publish from the B: copy

Create an empty GitHub repository named `aligolestaneh/aligolestaneh.github.io` while signed in as `aligolestaneh`. Do not initialize it with a separate README or license. Then open PowerShell and run:

```powershell
Set-Location B:\website
git status
git add -A
git commit -m "Initial website"
git remote add origin git@github.com:aligolestaneh/aligolestaneh.github.io.git
git push -u origin main
```

If Git asks for a commit name or email, configure the identity you want shown on commits. GitHub SSH access must work from this computer. The `git push` starts the workflow; follow it in the repository's **Actions** tab. In **Settings → Pages**, set the publishing source to **GitHub Actions**.

### Publish later edits

After checking changes, open PowerShell in `B:\website` and run:

```powershell
git add -A
git commit -m "Update website content"
git push
```

The push to `main` starts a new deployment. Check the **Actions** tab for success or an error. If a build fails, fix the reported issue, then commit and push again.

### DNS records for the custom domain

At your domain registrar, remove conflicting records for the apex (`@`) and `www`, then configure these GitHub Pages records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `aligolestaneh.github.io` |

In the repository's **Settings → Pages**, confirm that GitHub Actions is the source and configure `aligolestaneh.com` as the custom domain. Once DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS**. GitHub Pages uses the apex as the canonical site address and redirects the alternate `www` hostname.

## Project file map

| Path | What it controls |
| --- | --- |
| `src/data/site.ts` | Profile text and URLs, education, experience, teaching, awards, publications, and news |
| `src/pages/index.astro` | About Me page layout, section headings, homepage publication selection, and homepage news count |
| `src/pages/news.astro` | Full News page layout and its page description |
| `src/pages/publications.astro` | Searchable/filterable Publications page |
| `src/pages/services.astro` | Teaching and paper-review service page |
| `src/components/Navbar.astro` | The four navigation links |
| `src/components/PublicationCard.astro` | Shared publication display and resource buttons |
| `src/components/NewsList.astro` | Shared news timeline used on About Me and News |
| `src/layouts/BaseLayout.astro` | Shared HTML head, SEO/social metadata, theme initialization, header/footer placement |
| `src/styles/global.css` | Visual design, responsive styling, accessibility states, and light/dark themes |
| `public/assets/papers/` | Optimized publication images used by the website |
| `assets/source-paper-figures/` | Full-resolution source paper figures |
| `public/cv.pdf` | Downloadable CV shown on the site |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages deployment workflow |

## Content sources

Profile and publication details were compiled from the Google Scholar and LinkedIn profiles, ELPIS Lab and publisher pages, arXiv, research repositories, and the supplied resume. The website and CV omit the resume's personal mobile number. Keep future edits factual and link to a primary paper, project, conference, or code page when one is available.
