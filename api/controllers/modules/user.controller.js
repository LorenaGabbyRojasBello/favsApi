import { User } from "../../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const createUser = async(req, res) => {
  try {
    
    const {  email, password } = req.body;

    const exist_user = await User.findOne({ email: email });

  
    if (exist_user) throw new Error();

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hash });
    const user = await newUser.save();

    user && res.status(201).json(user);

  } catch (error) {
    res.status(500).send();
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  const userDB = await User.findOne({ email });

  if (!userDB) {
    res.status(403).send();
    return;
  }

  //Validate Hash
  const passToHash = `${password}`;
  bcrypt.compare(passToHash, userDB.password, (err, isPassValid) => {

    if (email === userDB.email && isPassValid) {
      //JWT
      jwt.sign(
        { email: userDB.email },
        process.env.ENV_SECRET_KEY,
        (error, token) => {

          if (!error) {

            res.status(200).json({
              token
            });

          } else {
            res.status(403).send();
          }

        }
      );

    } else {
      res.status(403).send();
    }
  });
};