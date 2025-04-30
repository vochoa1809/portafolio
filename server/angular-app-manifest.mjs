
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portafolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31151, hash: 'ee4684213becbadc03f66ad935c6a6d9d6b475ed556e5491cf2038315aeb2614', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17252, hash: '1d2a27f965a31e92e9ce3f95134aa2fccb88c3ab6d6afa5cce3f6f13f6b25784', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 113983, hash: '3f031cf8a1ecc6fd3eccd63d83df7beeb2d610836f2725b198d86df346f29ed5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IIOCPS7G.css': {size: 179597, hash: 'PoveHLYHqDM', text: () => import('./assets-chunks/styles-IIOCPS7G_css.mjs').then(m => m.default)}
  },
};
