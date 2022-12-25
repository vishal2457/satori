import ora from "ora";
import colors from "colors/safe";

type FancyLoggers = 'db'|'init'|'dbsync'|'extra'

class FancyLogger {
    private loggers = {db: ora(), init: ora(), dbsync: ora(), extra: ora()};
    private mode = process.env.NODE_ENV || 'development';
    private dev = this.mode == "development";

    private getEnv = this.dev ? colors.green(this.mode) : colors.red(this.mode)

    start(id: FancyLoggers, txt: string) {
        this.loggers[id].start(txt);
    }
    
    log(id: FancyLoggers, txt: string) {
        this.loggers[id].succeed(txt);
    }

    error(id: FancyLoggers, txt: string) {
        this.loggers[id].fail(txt);
    }

    logServerInfo() {
        let info = `${this.getEnv} Server started on port ${process.env.NODE_PORT}`
        this.log('init',info);
    }

    logForDB() {
        let db = `${this.getEnv} db ${colors.green(process.env.DB_NAME||'')} connected`
        this.log('db', db);
    }

    logForDbSync() {
        let dbSync = `${this.getEnv} db ${process.env.DB_NAME} synced successfully`
        this.log('dbsync', dbSync);
    }

}


let fancyLogger = new FancyLogger();
export  default fancyLogger