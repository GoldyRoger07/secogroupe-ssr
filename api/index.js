module.exports = async (req, res) => {
  // Replace 'your-project-name' with your actual directory name inside /dist
  const server = await import('../dist/secogroupe-ssr/server/server.mjs');
  return server.reqHandler(req, res);
};
