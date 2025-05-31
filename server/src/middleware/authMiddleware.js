import {auth} from "express-oauth2-jwt-bearer";
import {requiredScopes} from "express-oauth2-jwt-bearer"

export const checkScopes = requiredScopes('read:messages');

export const checkJwt = auth({
  audience: process.env.API_IDENTIFIER,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
});