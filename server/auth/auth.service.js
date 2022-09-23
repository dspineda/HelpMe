import jwt from 'jsonwebtoken';
import Professional from '../../server/professional/professional.model';

const { KEY } = process.env; 

async function signToken(payload) {
  const token = await jwt.sign(payload, KEY, { expiresIn: '1h' });
  return token;
}

async function verifyToken(token) {
  try {
    const payload = await jwt.verify(token, KEY);
    return payload;
  } catch (error) {
    return error;
  }
}

async function isAuthenticated(req, res, next){
  const auth = req.headers?.authorization;
  if(!auth){
    return res.status(401).json({ error: 'No Unauthorized' });
  }
  const [, token] = auth.split(' ');
  const decoded = await verifyToken(token);

  if(!decoded){
    return res.status(401).json({ error: 'No Unauthorized' });
  }

  const { email } = decoded;
  const user = await Professional.findOne({ email });

  if(!user){
    return res.status(404).json({ message: 'User not found'})
  }

  req.user = user
  next();
  return null;

}



export { verifyToken, signToken, isAuthenticated };
