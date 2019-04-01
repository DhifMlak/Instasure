import { Document } from 'mongoose';

export interface Reports extends Document {

    reportFile?: string;
}