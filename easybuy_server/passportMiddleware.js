import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "",
};

passport.use(
  new Strategy(options, async (payload, done) => {
    const { type, username } = payload;
    if (!type || type !== "session") {
      return done(null, null);
    }
    try {
      const userData = await UserModel.findOne({ userName: username });
      if (!userData) return done(null, null);
      return done(null, { username, _id: userData._id });
    } catch (e) {
      console.log("passport strategy: ", e);
      return done(e, null);
    }
  })
);

export default passport.authenticate("jwt", { session: false });
