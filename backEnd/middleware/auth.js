const jwt = require(JsonWebToken)
const SECRET_KEY = "hgjhghghh";

const auth = (req, res, next) => {
  try {
    let token = req.header.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
    } else {
      res.status(401).json({ message: "Unauthorize user" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorize user" });
  }
};

module.exports = auth;
