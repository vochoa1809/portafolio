
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
    'index.csr.html': {size: 31151, hash: '9c5eb6a2063d3ec65fbeb081892fa30d32d7ad086e479760d2a6a7b755872169', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17252, hash: 'c6d566a230937f6cc27a82abced42354ca26911da66050013bb48fa8e0c0f154', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 114241, hash: '6b15486a1ae4bde38b23ffebb01c16f721a639b2628c95c119a0218695bb7bdd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IIOCPS7G.css': {size: 179597, hash: 'PoveHLYHqDM', text: () => import('./assets-chunks/styles-IIOCPS7G_css.mjs').then(m => m.default)}
  },
};
