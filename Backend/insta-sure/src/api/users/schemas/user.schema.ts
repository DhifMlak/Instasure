import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Document, Schema, Model, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

export const userSchema: Schema = new Schema({

  firstName: String,
  lastName: String,
   email: { type: String, required: true, index: true, unique: true, lowercase: true },
  password: { type: String, required: true },

});

userSchema.pre<User>('save', function(next) {
  const user = this;

  const SALT_WORK_FACTOR = 10;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) { return next(); }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err)
      throw err;
    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, (error, hash) =>  {
      if (error)
        throw error;

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.post('save', (error, doc, next) =>  {
  // console.log(new Error('This item already exists, please try again'))
  if (error.code === 11000) {
    error.errmsg = 'This email already exists, please try recover password';
    next(error);
  }
  else next(error);
});

userSchema.methods.comparePassword = (candidatePassword: string, userPass: string, cb) => {
  return bcrypt.compareSync(candidatePassword, userPass);
};

export const UserSchema = userSchema;
