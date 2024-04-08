import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const generateToken = (payload: any, secret: string, expiresIn: string) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn,
  });

  return token;
};

const varifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret as string) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  varifyToken,
};
