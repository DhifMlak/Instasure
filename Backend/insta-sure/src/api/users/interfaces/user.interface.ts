import { Document } from 'mongoose';

export interface User extends Document {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;

  comparePassword(candidatePassword: string, userPass: string): any;

}