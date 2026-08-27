# Deploying to Plesk (Node.js application)

The site is a TanStack Start app rendered on the server (SSR). It is **not**
converted to a static site — server rendering is kept, so routing, metadata and
future server functions keep working.

Outside the Lovable build environment, `npm run build` uses the Nitro
`node-server` preset and produces a standalone Node server at
`.output/server/index.mjs`, which listens on `process.env.PORT` (Plesk sets it).
`app.js` in the repository root is a thin startup file that loads it.

## Plesk settings

| Field                 | Value                                                     |
| --------------------- | --------------------------------------------------------- |
| Node.js version       | 20.x or 22.x (LTS; minimum 20.11)                          |
| Application mode      | production                                                 |
| Application root      | the repository directory, e.g. `/httpdocs` or `/sophie-insights` |
| Document root         | same as the application root (Passenger proxies all requests to Node; do **not** point it at `.output/public`) |
| Application startup file | `app.js`                                                |
| NPM install           | click **NPM install** (runs `npm install`, dev deps included — they are needed to build) |
| Build command         | `npm run build`                                            |
| Start command         | `npm start`  (equivalent to `node .output/server/index.mjs`) |

Environment variables: `PORT` is provided by Plesk. Optionally set
`NODE_ENV=production`.

## Deploy sequence

1. Pull/deploy from GitHub (`sophiejustdata/sophie-insights`) into the application root.
2. NPM install.
3. Run the build command `npm run build`.
4. Restart the application (Plesk: "Restart App").

## Notes

- Client-side routing works because every request goes to the Node server,
  which server-renders the matched route; there is no need for rewrite rules.
- Static assets are emitted to `.output/public` and served by the same Node
  server, so no separate document root mapping is required.
- `.output/` is git-ignored: the build must run on the server (or be uploaded
  by your own CI) after each deploy.
- The build needs devDependencies (Vite, Nitro, TypeScript). If Plesk is
  configured with `npm install --production`, change it to a plain
  `npm install`.
