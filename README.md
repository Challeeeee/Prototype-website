# Studio Lugn — local-business prototype

Responsive Swedish homepage built with Vite, plain HTML, CSS and TypeScript. All business details and prices are fictional. No runtime dependencies, forms, analytics or external fonts.

## Requirements & commands

Use Node.js 22.12+ (or 20.19+) and npm.

```sh
npm ci             # install locked dependencies
npm run dev        # local development server
npm run typecheck  # TypeScript checking
npm run build      # TypeScript check + production output in dist/
npm run preview    # serve the production build locally
```

Run `npm run build` before previewing. Open the local URL printed by Vite. Preview is not a production hosting server.

## Structure

- `index.html`: semantic homepage, services, hours, contact details and booking notice.
- `src/config.ts`: **the single booking URL setting: `BOOKING_URL`**.
- `src/main.ts`: applies that setting to every `data-booking-link` anchor.
- `src/style.css`: responsive layout, decorative CSS illustration and keyboard focus styles.
- `tsconfig.json`: strict TypeScript configuration.
- `package-lock.json`: reproducible npm dependency versions.
- `dist/`: generated production files (not committed).

## Set up real booking

`BOOKING_URL` in `src/config.ts` currently opens Bokadirekt's homepage at the owner's request. Replace it with the business-specific HTTPS Bokadirekt address when available. The HTML anchors retain the on-page booking notice as a no-JavaScript fallback; keep the destination URL only in the config.

Before launch, replace the sample business details and metadata in `index.html`, revise the booking section and remove prototype labels. Booking opens in the same tab.

## Accessibility & manual checks

The page includes Swedish language metadata, landmarks, ordered headings, a skip link, descriptive links, visible keyboard focus and always-visible navigation. The illustration is decorative and hidden from assistive technology.

Check narrow and wide viewports, zoom to 200%, and use Tab/Shift+Tab and Enter to navigate. Confirm all booking links open Bokadirekt's homepage (or the business page once configured) in the same tab. TypeScript/build checks do not replace browser or assistive-technology testing.
