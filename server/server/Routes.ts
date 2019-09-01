import { Application, Environment, apiRouter } from '.';

class Routes {
  public mountApi(_express: Application): Application {
    const apiPrefix = Environment.config().apiPrefix;
    return _express.use(`/${apiPrefix}`, apiRouter);
  }
}

export default new Routes();
