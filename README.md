# Padel Masters: Frontend

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Design

### Colors

The darkest shade of a color is usually reserved for text, while the lightest
shade might be used to tint the background of an element.

- Greys
  Text, backgrounds, panels, form controls — almost everything in an interface
  is grey.

- Primary color: Light color for Alerts.Dark shade: text
  1. 100 -Light. 2nd
  2. Light
  3. Light - 3rd
  4. Light
  5. 500 - base. 1st
  6. Dark
  7. Dark - 3rd
  8. Dark
  9. 900 - darkest. 2nd
- Neutral
  1. 100 -Light. 2nd
  2. Light
  3. Light - 3rd
  4. Light
  5. 500 - base. 1st
  6. Dark
  7. Dark - 3rd
  8. Dark
  9. 900 - darkest. 2nd
- Accent colors
  1. 100 -Light. 2nd
  2. Light
  3. Light - 3rd
  4. Light
  5. 500 - base. 1st
  6. Dark
  7. Dark - 3rd
  8. Dark
  9. 900 - darkest. 2nd

### Shadows

- 0 1px 3px hsla(0,0%,0%,.12), 0 1px 2px hsla(0,0%,0%,.24)
- 0 3px 6px hsla(0,0%,0%,.15), 0 2px 4px hsla(0,0%,0%,.12)
- 0 10px 20px hsla(0,0%,0%,.15), 0 3px 6px hsla(0,0%,0%,.10)
- 0 15px 25px hsla(0,0%,0%,.15), 0 5px 10px hsla(0,0%,0%,.05)
- 0 20px 40px hsla(0,0%,0%,.2)

For example, on click can go from 3px to 1px

#Page 173
