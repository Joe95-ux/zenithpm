dotenv.config();
import express from "express";
import cors from "cors";
const morgan = require('morgan');
const helmet = require('helmet');
import {checkJwt, checkScopes} from "./middleware/authMiddleware.js";
import path from "path";

const app = express();
const __dirname = path.dirname(__filename);
const domain = process.env.AUTH0_DOMAIN;
const baseUrl = process.env.APP_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

if (!baseUrl || !domain) {
  throw new Error('Please make sure that the file .env.local is in place and populated');
}

if (!audience) {
  console.log('AUTH0_AUDIENCE not set in .env.local. Shutting down API server.');
  process.exit(1);
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));
app.options("*", cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));



// protected api routes ex

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  logger.info("Server running on port " + port);
});
