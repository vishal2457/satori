const {
  NODE_PORT = 3000,
  NODE_ENV = 'development',
  ENCRYPT = false,
  DB_NAME = 'satori',
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USERNAME = 'root',
  DB_PASSWORD = '',
  DB_SYNC = false,
  REDMINE_SERVER = '',
  REDMINE_KEY = '',
} = process.env;

export const APP_SETTINGS = {
    NODE_PORT,
    NODE_ENV,
    ENCRYPT,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_SYNC: DB_SYNC == 'true',
    REDMINE_SERVER,
    REDMINE_KEY,
};
