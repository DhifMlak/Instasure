import * as mongoose from 'mongoose';
import { Document, Schema, Model, model } from 'mongoose';

export const reportSchema: Schema = new Schema({

    reportFile: {
        type: String,
        default: 0,
    },

}, { timestamps: { createdAt: 'created_at' }});
