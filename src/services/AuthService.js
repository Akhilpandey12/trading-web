import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user'

class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async register({ username, email, password }) {
    const existing = await this.userModel.findOne({ email });
    if (existing) throw new Error("Email already in use");

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, email, password: hashed });
    await newUser.save();

    return this._createToken(newUser);
  }

  async login({ email, password }) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    return this._createToken(user);
  }

  _createToken(user) {
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { token, user };
  }
}

export default new AuthService(User);
