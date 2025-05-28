dotenv.config();
import express from "express";
import cors from "cors";
import { config } from "./config/auth0.js";
import {auth} from "express-openid-connect";
import path from "path";

const app = express();
const __dirname = path.dirname(__filename);

app.use(cors({ origin: "http://localhost:3000" }));
app.options("*", cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const port = process.env.PORT;

app.listen(port, () => {
  logger.info("Server running on port " + port);
});
