import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";
import { checkJwt } from "./middleware/authMiddleware";

// CONFIGURATIONS
dotenv.config();
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

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.options("*", cors());



// protected api routes ex

app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
