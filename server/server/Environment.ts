import { Application, dotenv } from '.';

class Environment {
  public static config(): any {
    dotenv.config();
    let environment: string;
    process.env.NODE_ENV ? (environment = process.env.NODE_ENV) : (environment = 'local');
    let isCORSEnabled: string | boolean;
    process.env.CORS_ENABLED ? (isCORSEnabled = process.env.CORS_ENABLED) : (isCORSEnabled = false);
    const mongoUri: string | undefined = process.env.MONGO_URI;
    const apiUri: string | undefined = process.env.API_URI;
    const apiPrefix: string = process.env.API_PREFIX || 'v2';
    const apiVersion: string | number = process.env.API_VERSION || 2.0;
    const mapQuestApiKey: string | undefined = process.env.MAPQUESTAPIKEY;
    const ZWSID: string | undefined = process.env.ZWSID;

    return {
      environment,
      isCORSEnabled,
      mongoUri,
      apiUri,
      apiVersion,
      apiPrefix,
      mapQuestApiKey,
      ZWSID
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Environment;
