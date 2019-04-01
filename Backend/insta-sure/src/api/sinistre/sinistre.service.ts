import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sinistre } from './interfaces/sinistre.interface';
import { Model } from 'mongoose';


@Injectable()
export class SinistreService {


    constructor(@InjectModel('Sinistre') private readonly sinistreModel: Model<Sinistre>) { }

    async findAll(): Promise<Sinistre[]> {
        return await this.sinistreModel.find().exec();
    }

  


}
