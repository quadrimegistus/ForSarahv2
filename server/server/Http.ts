import { bodyParser, cors, Application } from '.';

class Http {
  public static mount(_express: Application): Application {
    _express.use(bodyParser.json());
    _express.use(bodyParser.urlencoded({ extended: false }));
    _express.disable('x-powered-by');
    _express.use(cors());
    return _express;
  }
}

export default Http;
