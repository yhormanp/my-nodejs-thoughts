const { encryptPwd } = require('../utils/middleware/auth/auth');
const { Users } = require('../utils/schemas/users')

class UsersServices {

    async getUsers(){
        const results = await Users.find({});
        return results || [];
    }

    async getUserById(userId){
        const results = await Users.find({_id: userId});
        return results || [];

    }

    async getUserByEmail (email){
        const results = await Users.find({ email });
        return results || [];
    }

    async createUser(userData){
        userData.email = userData.email.trim();
        let newUser = new Users(userData);
        encryptPwd.apply(newUser, [userData.password]);
        const response = await newUser.save();
        return response || [];
    }

    async deleteUser(userId){
        await Users.findByIdAndDelete(userId);
        return userId || [];

    }
}   

module.exports = UsersServices;