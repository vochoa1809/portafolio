
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31140, hash: '152a9ea8a6085ac83daad9fd0be62a2bf74a954fd3975b348b7dce5159ec4a3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17241, hash: 'c53971da7c17ca6647fa1630b121a38a7ef77338d164a0a7539a6fa753f15388', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 112490, hash: 'e6e54349dc41c5a19e06a4ff968b11c69d41798d8d497743cd854282fd447441', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IIOCPS7G.css': {size: 179597, hash: 'PoveHLYHqDM', text: () => import('./assets-chunks/styles-IIOCPS7G_css.mjs').then(m => m.default)}
  },
};
