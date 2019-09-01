import { Http, Environment, CORS, Application } from '.';

class Kernel {
  public static init(_express: Application): Application {
    if (Environment.config().isCORSEnabled) {
      _express = CORS.mount(_express);
    }
    _express = Http.mount(_express);
    return _express;
  }
}

export { Kernel as Bootstrap };
