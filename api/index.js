// Please change "secogroupe-ssr" with your actual project name

const path = require('path');

const serverDistPath = path.join(
  process.cwd(),
  'dist/secogroupe-ssr/server/server.mjs' // replace project name
);

export default import(serverDistPath).then(module => module.app);