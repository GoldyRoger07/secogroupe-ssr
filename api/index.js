// api/index.js
import { reqHandler } from '../dist/secogroupe-ssr/server/server.mjs';

export default async (req, res) => {
  return reqHandler(req, res);
};
