// api/index.js
// import { reqHandler } from '../dist/secogroupe-ssr/server/server.mjs';

// export default async (req, res) => {
//   return reqHandler(req, res);
// };


const path = require('path');

const serverDistPath = path.join(process.cwd(), 'dist/secogroupe-ssr/server/server.mjs');

export default import(serverDistPath).then(module => module.app);
