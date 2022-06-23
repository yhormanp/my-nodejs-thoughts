const UsersServices = require("../services/users");
const { validatePwd, generateToken } = require("../utils/middleware/auth/auth");

const usersService = new UsersServices();

const sessionsPost = async (req, res, next) => {
    try {
        const { body: { email, password}} = req;

        const userFound = await usersService.getUserByEmail(email);
        if(userFound.length > 0 ){
            // user found
            
            const isAuthenticated = validatePwd.call(userFound[0], password);
            if(isAuthenticated){
                //generate a new JWT

                const validationResults = generateToken.call(userFound[0]);
                res.status(200).json({
                    data: { token: validationResults },
                    message: "User validated"
                })

            } else {
                res.status(403).json({
                    data: null,
                    message: "Invalid credentials"
                })
            }
        } else {
            // usert not Found
            res.status(403).json({
                data: null,
                message: "Invalid credentials"
            })
        }

    } catch (error) {
        next(error)
    }
}


module.exports = {
    sessionsPost
}