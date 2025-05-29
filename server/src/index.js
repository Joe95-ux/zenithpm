dotenv.config();
import express from "express";
import cors from "cors";
import { config } from "./config/auth0.js";
import {checkJwt} from "./middleware/authMiddleware.js";
import path from "path";

const app = express();
const __dirname = path.dirname(__filename);

app.use(cors({ origin: "http://localhost:3000" }));
app.options("*", cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));



// protected api routes ex

app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  logger.info("Server running on port " + port);
});
