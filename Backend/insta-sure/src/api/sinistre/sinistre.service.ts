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

    async count(): Promise<any> {
        const c1 = await this.sinistreModel.count({ flag_Fraude: 'Sain' });
        const c2 = await this.sinistreModel.count({ flag_Fraude: 'sain' });
        const c3 = await this.sinistreModel.count({ flag_Fraude: 'fraude' });
        const c4 = await this.sinistreModel.count({ flag_Fraude: 'Fraude' });
        const count = {
            sain: c1 + c2,
            fraude: c3 + c4,
            total : c1 + c2 + c3 + c4,
        };
        return count;
    }


}
