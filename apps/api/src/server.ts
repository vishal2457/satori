import * as dotenv from 'dotenv';
dotenv.config();
import http from 'http'
import  { DbConnection } from './core/db/db';
import fancyLogger from './core/logger/fancy-logger';
import app from './express-app';


async function run() {  
  const hostname = process.env.NODE_HOST || '127.0.0.1'
  const port = parseInt(process.env.NODE_PORT || '9998');

  DbConnection.init();

  const server = http.createServer(app);  
  server.listen(port, hostname, () => {
    fancyLogger.logServerInfo()
  })
}

run()