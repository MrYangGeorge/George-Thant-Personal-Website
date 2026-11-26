# georgethant.com

Personal portfolio of George Thant, a computer engineering student at UC Irvine working toward embedded systems.

**Live site:** https://georgethant.com

## Structure

- `index.html` — page layout: About, Projects, Contact
- `style.css` — blue PCB theme with UCI gold accents
- `script.js` — project data, project pages (`#p-<id>`), and the animated circuit-trace header
- `images/projects/` — project photos (`*-thumb` files are the small versions used in the list)
- `George_Thant_Resume.pdf` — résumé linked from the Resume buttons

## Editing projects

Each project is one entry in the `projects` array in `script.js`: title, badges, date, parts list, short summary, bullets, and optional `repo` / `devpost` links and photos. Entries with `cat: "embedded"` appear under **Hardware builds**; everything else appears under **Coursework**.

## Deployment

Plain HTML, CSS and JavaScript with no build step. Cloudflare Pages deploys automatically on every push to `main`.

## Contact

- Email: georgethant03@gmail.com
- LinkedIn: https://www.linkedin.com/in/georgethant
- GitHub: https://github.com/MrYangGeorge
