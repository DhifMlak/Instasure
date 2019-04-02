import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sinistre } from './interfaces/sinistre.interface';
import { Model } from 'mongoose';

@Injectable()
export class SinistreService {

    constructor(@InjectModel('Sinistre') private readonly sinistreModel: Model<Sinistre>) { }

     async findAll(): Promise<Sinistre[]> {
         return await this.sinistreModel.find({annee_survenance: '2017'}).exec();
     }
    async findByYear(year): Promise<Sinistre[]> {
        return await this.sinistreModel.find({annee_survenance: year})
        .select('TOT_reparation reglement_tot')
        .exec();
    }

    async count(): Promise<any> {
        const c1 = await this.sinistreModel.count({ flag_Fraude: '0' });
        const c3 = await this.sinistreModel.count({ flag_Fraude: '1' });
        const count = {
            sain: c1,
            fraude: c3,
            total: c1 + c3,
        };
        return count;
    }


}
