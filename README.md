# Personal Website

Available at http://nikonikolov.github.io/

Single-page static site (plain HTML + CSS, no build step). Layout adapted from
[Jon Barron's website template](https://github.com/jonbarron/jonbarron_website).

## Structure

- `index.html` — the entire site (bio, Selected Research Projects, Other Projects)
- `css/style.css` — the only stylesheet
- `img/portfolio/` — paper/project thumbnails (`originals/` holds source versions)
- `cv-nikolay-nikolov.pdf` — CV linked from the header
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll build)

## Testing locally

1. Run from the root directory:
```
python3 -m http.server 8000
```
2. Go to http://localhost:8000/

3. Use `ctrl+shift+r` to refresh and bypass the browser cache

## Deployment

Push to `master`. Can monitor deployment jobs and status at
https://github.com/nikonikolov/nikonikolov.github.io/actions/
