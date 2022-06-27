import jwt from 'jsonwebtoken';

const secret = "kungkingkang can you see me kungking";

export default {
    tokenGenerate: (payload) => {
        return jwt.sign(payload, secret, { expiresIn: '1h' });
    },
    tokenVerify: (token) => {
        return jwt.verify(token, secret);
    }
}