import bcrypt from 'bcrypt';

export default {
    hashPassword: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },
    comparePassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }
}