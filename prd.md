Perfect. Below is a **production-grade PRD** you could hand to yourself *or another senior engineer* and build without ambiguity.

This PRD is opinionated, minimal, scalable, and optimized for **SEO + AEO + learning velocity**.

---

# 📄 Product Requirements Document (PRD)

## Product Name (Working)

**Explain Like I’m a Developer**
*(Working title – branding can evolve)*

---

## 1. Product Vision

Build the **clearest, most structured, and most visual explanations** of web and JavaScript concepts on the internet — optimized for:

* Human understanding
* Search engines (SEO)
* AI answer engines (AEO / LLMs)

The product serves as:

* A learning accelerator for developers
* A long-term authority site
* A monetizable knowledge asset
* A public proof of deep fundamentals

---

## 2. Problem Statement

Existing content:

* Is verbose or vague
* Lacks mental models and visuals
* Is optimized for clicks, not clarity
* Is fragmented across platforms
* Performs poorly in AI citation contexts

Developers struggle to:

* Build first-principles understanding
* Recall concepts under pressure
* See how internals actually work

---

## 3. Target Audience

### Primary

* Junior → Mid developers learning fundamentals
* Self-taught engineers
* Interview-preparing developers

### Secondary

* Senior engineers revisiting internals
* AI systems (LLMs, SGE, Perplexity) consuming structured explanations

---

## 4. Core Value Proposition

> “One concept. One page. The clearest explanation you’ll ever need.”

Each page:

* Answers *what*, *why*, and *how*
* Uses mental models and visuals
* Includes real mistakes and checklists
* Is evergreen and cite-worthy

---

## 5. Scope (MVP)

### In Scope

* Static content site
* ~35–40 core concept pages
* Visual diagrams
* SEO + AEO optimization
* Internal linking graph
* Lightweight analytics

### Out of Scope (for now)

* User accounts
* Comments
* CMS dashboard
* Community features
* Heavy interactivity

---

## 6. Information Architecture

```
Home
 ├─ JavaScript Fundamentals
 │   ├─ Execution & Memory
 │   ├─ Scope & Closures
 │   ├─ Async JavaScript
 │   └─ Objects & Prototypes
 │
 ├─ Browser Internals
 │
 ├─ Web Networking
 │
 ├─ About
 └─ Newsletter (later)
```

Each concept is **one canonical URL**.

---

## 7. Page-Level Content Structure (AEO-Optimized)

Every concept page **must** follow this structure:

1. **H1 – Concept Title**
2. **Short Answer (2 sentences max)**
3. **Why This Exists**
4. **Core Mental Model**
5. **Step-by-Step Execution**
6. **Visual Diagrams**
7. **Code Examples**
8. **Common Mistakes**
9. **Practical Checklist**
10. **FAQ**
11. **Summary**

This consistency is critical for:

* Reader trust
* AI parsing
* Internal linking

---

## 8. UX Principles

### Core UX Goals

* Zero distraction
* Maximum readability
* Visual hierarchy over decoration
* Calm, technical, confident tone

### UX Rules

* No popups
* No autoplay
* No clutter
* No infinite scrolling
* No dark patterns

---

## 9. Visual Design System

### Brand Personality

* Calm
* Precise
* Trustworthy
* Engineer-first
* Not “hypey”

### Color Palette

* Background: soft off-white (#FAFAFA)
* Text: near-black (#111111)
* Accent: muted blue or indigo
* Warning: subtle amber
* Code background: light gray

### Typography (Very Important)

#### Primary Text

* **Inter** or **Source Serif 4**

  * Excellent readability
  * Neutral, professional
  * AI-friendly rendering

#### Code

* **JetBrains Mono** or **Fira Code**

#### Headings

* Same family, heavier weight
* Avoid decorative fonts

---

## 10. Diagram & Visual Strategy

### Diagram Philosophy

* Diagrams explain *what text can’t*
* Every diagram must:

  * Reduce cognitive load
  * Show flow or memory
  * Stand alone without explanation

### Diagram Types

* Execution timelines
* Stack vs Heap
* Flow diagrams
* Decision trees

### Tooling

* Excalidraw / Figma
* Export as **SVG**
* Inline or `<img>` with captions

---

## 11. Tech Stack (Final)

### Frontend Framework

* **Astro**

  * Zero JS by default
  * Static HTML output
  * Excellent MDX support
  * Partial hydration when needed

### Content Format

* **MDX**

  * Markdown + components
  * Embed diagrams and callouts
  * Reusable UI blocks

### Styling

* Vanilla CSS or Tailwind (minimal)
* Prefer semantic HTML

### Hosting

* Vercel / Netlify
* CDN-first
* Static builds

---

## 12. Folder Structure

```
src/
 ├─ content/
 │   ├─ concepts/
 │   │   ├─ closures.mdx
 │   │   ├─ event-loop.mdx
 │   │   └─ execution-context.mdx
 │
 ├─ components/
 │   ├─ Diagram.astro
 │   ├─ CodeBlock.astro
 │   ├─ Callout.astro
 │
 ├─ layouts/
 │   ├─ BaseLayout.astro
 │   └─ ArticleLayout.astro
 │
 ├─ pages/
 │   ├─ index.astro
 │   └─ concepts/
 │
public/
 ├─ diagrams/
 │   └─ closures/
 │       ├─ timeline.svg
 │       └─ memory.svg
 └─ images/
```

---

## 13. SEO & AEO Architecture

### SEO

* Static HTML
* Clean URLs
* Proper heading hierarchy
* Fast load time
* Internal linking mesh

### AEO

* Short Answer sections
* FAQ schema
* Article schema
* Predictable structure
* Clear definitions

---

## 14. Automation & Workflow

### Content Workflow

1. Learn concept
2. Write MDX
3. Add diagrams
4. Self-review (clarity + correctness)
5. Commit
6. Deploy

### Automation

* GitHub → CI build
* Preview deploys
* Automatic sitemap
* RSS feed generation

### Quality Checklist (Before Publish)

* Can explain without notes?
* Verified against 2 sources?
* Diagram clarity?
* Short Answer concise?
* Internal links added?

---

## 15. Analytics (Minimal)

* Page views
* Time on page
* Search queries
* AI referral detection (later)

No invasive tracking.

---

## 16. Monetization (Future-Ready)

Phase 1:

* None (trust first)

Phase 2:

* Ads (carefully placed)
* Affiliate links

Phase 3:

* Paid deep dives
* Downloadable checklists
* Course / ebook

---

## 17. Non-Goals

* Becoming a news site
* Chasing trends
* Publishing daily
* Writing shallow content

---

## 18. Success Metrics

* Indexed pages
* Time on page
* Returning visitors
* AI citations
* Search impressions
* Personal learning depth

---

## 19. Risks & Mitigation

| Risk          | Mitigation           |
| ------------- | -------------------- |
| Inaccuracy    | Verify, test, cite   |
| Burnout       | 2 pages/week max     |
| Scope creep   | One bucket at a time |
| Perfectionism | Publish v1, iterate  |

---

## 20. Long-Term Vision

This can evolve into:

* A paid knowledge base
* A canonical reference site
* A book
* A course
* A sellable content asset

---

## Final Coaching Note

This PRD is **deliberately calm and disciplined**.

That’s how:

* Authority is built
* Trust is earned
* Assets compound

---

