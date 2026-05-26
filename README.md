# MARU Service Home

**Site**: https://maru.stis.co.kr (post-DNS setup)
**Stack**: Next.js 14 (App Router · static export) + Tailwind CSS · TypeScript
**Hosting**: Azure Static Web Apps (Standard tier)
**Languages**: 한국어 (/ko) + English (/en); root redirects to /ko
**Source**: this repo (`MARU-MCP/maru-web`)

## Sections

- Hero — agent collaboration governance platform positioning
- Features — fact collection · precise guidance · evidence-bound collab
- Architecture — 5-role canonical model + per-customer instance diagram
- Industries — e-commerce / medical / public services
- Evidence — sec validates collaboration effectiveness
- Service Model — hosting + consulting
- Contact — consultation request via email

## Local dev

```
npm ci
npm run dev
# open http://localhost:3000 (redirects to /ko)
```

## Build (static export)

```
npm run build
# output: out/
```

## Deploy

GitHub Actions workflow at `.github/workflows/azure-static-web-apps.yml`
deploys to Azure SWA on push to `main`.

Required secret: `AZURE_STATIC_WEB_APPS_API_TOKEN` (set by Azure SWA
creation; auto-populated when the SWA is linked to this repo).
