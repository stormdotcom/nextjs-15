# Next.js 15 - Learning Notes

## Key Features & Updates

### 1. Codemod Tool (`@next/codemod`)
- CLI tool to auto-upgrade codebase for latest Next.js/React.
- Helps smooth migration.

### 2. Async Request APIs
- `cookies`, `headers`, `params`, `searchParams` → now **async**.
- Need to `await` them.

### 3. Caching Behavior Updates
- **GET Route Handlers** → no longer cached by default.
- **Router Cache** → no longer caches pages by default (always fresh).
- Can opt-in manually for caching.

### 4. React 19 Support
- App Router uses React 19 RC by default.
- Pages Router stays compatible with React 18.
- Experimental React Compiler for auto performance optimisation.

### 5. Turbopack Dev Mode (Stable)
- Much faster dev experience:
  - ~77% faster server startup.
  - ~96% faster code updates.
  - ~46% faster route compilation.

### 6. Static Route Indicator
- Shows whether route is static or dynamic during dev.

### 7. Experimental `unstable_after` API
- Run tasks (logging, analytics) **after response** without blocking user.

### 8. `instrumentation.js` API (Stable)
- Hook into server lifecycle (errors, monitoring, observability).

### 9. New `<Form>` Component
- Enhanced form handling with client-side navigation + prefetching.

### 10. TypeScript Support in `next.config.ts`
- Autocomplete and type safety for configuration.

### 11. Self-Hosting Improvements
- Better caching controls with `Cache-Control` headers.
- Image optimization with `sharp` by default.

### 12. Server Actions Security
- Unused actions removed from client bundle.
- Action IDs regenerated per build (unguessable).

### 13. External Package Bundling
- App Router bundles external packages by default.
- Pages Router now configurable too.

### 14. ESLint 9 Support
- Official support for ESLint 9 (compatible with ESLint 8).

### 15. Developer Experience (DX)
- Clearer hydration errors with context.
- Faster build & refresh times.
- Better debugging & observability.

---

## Rendering Methods in Next.js

### SSR (Server-Side Rendering)
- **What is it?** Generates HTML on each request, ensuring fresh content.
- **When to use?** Dynamic content, personalized pages, SEO optimization.
- **Pros:** Fresh content, good for dynamic pages, SEO-friendly.
- **Cons:** Slower performance, higher server costs, no caching.

### SSG (Static Site Generation)
- **What is it?** Generates HTML at build time, serving static files.
- **When to use?** Content-driven sites, SEO, fast performance.
- **Pros:** Fast performance, low server load, great for SEO.
- **Cons:** Limited dynamic content, build time, no personalization.

### ISR (Incremental Static Regeneration)
- **What is it?** Updates static pages incrementally after build.
- **When to use?** Content that updates infrequently, SEO.
- **Pros:** Fresh content with static performance, efficient caching, scalability.
- **Cons:** Regeneration delay, complexity, potential stale content.

---

## Quick Summary Table

| Feature                          | Benefit                                                                  |
|----------------------------------|---------------------------------------------------------------------------|
| Codemod CLI                      | Automates upgrades & migrations                                           |
| Async APIs                       | Cleaner handling with `await`                                            |
| Caching Updates                  | Fresh data by default, opt-in caching                                    |
| React 19 + Compiler              | Future-ready + performance gains                                         |
| Turbopack Dev                    | Super fast development                                                   |
| Static Route Indicator           | Helps optimize routing                                                   |
| `unstable_after` API             | Run background tasks without delay                                       |
| `instrumentation.js`             | Error tracking & observability                                           |
| `<Form>` Component               | Richer form experience                                                   |
| TS for `next.config`             | Safer config with autocomplete                                           |
| Self-hosting Improvements        | Better cache control + image optimization                                |
| Server Actions Security          | Safer APIs + smaller bundles                                             |
| External Package Bundling        | Better performance & npm control                                         |
| ESLint 9 Support                 | Updated linting with compatibility                                       |
| DX Enhancements                  | Faster builds + better errors                                            |

---
