# Explain Like I’m a Developer

Clear, visual explanations of JavaScript and web fundamentals — optimized for humans and AI search engines.

## What This Is
A content-first technical knowledge site where:
- Each page explains one concept deeply
- Mental models come before syntax
- Visuals explain what words can’t
- Content is evergreen and structured

## Why This Exists
Most explanations online are either:
- Too shallow
- Too verbose
- Too abstract
- Too focused on trends

This project focuses on **first-principles understanding**.

## Tech Stack
- Astro (static, zero JS by default)
- MDX for content
- SVG diagrams
- Static hosting (Vercel / Netlify)

## Content Structure
Each article follows a strict structure:
1. Short Answer
2. Why It Exists
3. Core Mental Model
4. Step-by-Step Execution
5. Diagrams
6. Code Examples
7. Common Mistakes
8. Practical Checklist
9. FAQ
10. Summary

## Folder Structure


# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
