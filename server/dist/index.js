"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const authMiddleware_1 = require("./middleware/authMiddleware");
// CONFIGURATIONS
dotenv_1.default.config();
const app = (0, express_1.default)();
const __dirname = path_1.default.dirname(__filename);
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
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)('common'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
// protected api routes ex
app.get('/api/private', authMiddleware_1.checkJwt, function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
