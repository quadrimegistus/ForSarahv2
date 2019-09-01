import { cors, Application, Environment } from '.';

class CORS {
  public mount(_express: Application): Application {
    const options = {
      origin: Environment.config().url,
      optionsSuccessStatus: 200
    };
    _express.use(cors(options));
    return _express;
  }
}

export default new CORS();
