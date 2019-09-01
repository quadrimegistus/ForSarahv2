import { express, Bootstrap, Environment, Routes, MongoDb } from '.';

class Express {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }
  private mountDotEnv(): void {
    this.express = Environment.init(this.express);
  }
  private mountMiddlewares(): void {
    this.express = Bootstrap.init(this.express);
  }
  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }
  private mountDatabases(): void {
    this.express = MongoDb.init(this.express);
  }
  public init(): any {
    const port: number | string = Environment.config().port;
    let stringifyPort: string;
    port ? (stringifyPort = `${port}`) : (stringifyPort = '');
    const uri: string = Environment.config().appUri;
    this.express.listen(stringifyPort, (_error: any) => {
      if (_error) {
        return console.error('Error: ', _error);
      }
      return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ '${uri}${stringifyPort}'`);
    });
  }
}

export default new Express();
