import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
  username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
       
        res.status(401).send({ error: 'No token provided' });
        return
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET || 'secret',
      (err: any, decoded: any) => {
        if (err) {
            res.status(403).send({ error: 'Invalid token' });
            return
        }

        req.user = decoded as JwtPayload;
        next();
      }
    );
  } catch (error) {
    res.status(401).send({ error: 'Authentication failed' });
    return
  }
};
