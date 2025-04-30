
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
    'index.csr.html': {size: 31140, hash: 'a6f79724efb82e13c11f432f092bc9ea1e2614d65da5fc0e1b62e5a57fa0a916', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17241, hash: '7e6432e1cf4d57bfa23f82da596e7f628dec07bfe28cc2ddc27b4bdabeebcf05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 114230, hash: 'dff67a708e6c8be218a24a03da68eec7f1f2e1937af971e4dfa0bdf017b7e8b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IIOCPS7G.css': {size: 179597, hash: 'PoveHLYHqDM', text: () => import('./assets-chunks/styles-IIOCPS7G_css.mjs').then(m => m.default)}
  },
};
