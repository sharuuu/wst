const wst = require("./node_modules/node-reverse-wstunnel/lib/wst_wrapper").server_reverse;
let server = new wst(8888);
server.start();