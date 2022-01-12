const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const getTokenFromHeader = (req) => {
  const {
    headers: { authorization },
  } = req;

  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
};

const verifyToken = (req, res, next) => {
  const accessToken = getTokenFromHeader(req);
  if (accessToken) {
    jwt.verify(accessToken, 'instafeed', (err, decoded) => {
      if (err)
        res.status(401).send(err.message || 'this endpoint requires a token');
      req.user = decoded;
      req.token = accessToken;
      next();
    });
  } else {
    res.status(401).send('this endpoint requires a token');
  }
};

const checkAdminRoles = (req, res, next) => {
  const {
    user: { role },
  } = req;

  if (role.toLowerCase() === 'admin') {
    next();
  } else {
    res.status(401).json({
      Error: 'The user needs an Admin role',
    });
  }
};

// must be called using call or apply
function encryptPwd(pwd) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(pwd, this.salt, 10000, 512, 'sha512')
    .toString('hex');
}

// must be called using call or apply
function validatePwd(pwd) {
  const hash = crypto
    .pbkdf2Sync(pwd, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
}

function generateToken() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      role: this.role || 'basic',
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    'instafeed'
  );
}

module.exports = {
  verifyToken,
  encryptPwd,
  validatePwd,
  generateToken,
  checkAdminRoles
};
