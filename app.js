const app = express();

app.use(cors());

const apiRouter = require('./routes/apiRouter.js');

app.use(express.json());

app.use('/api', apiRouter);

module.exports = app;
