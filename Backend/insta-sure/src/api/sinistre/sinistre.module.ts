import { Module } from '@nestjs/common';
import { SinistreController } from './sinistre.controller';
import { SinistreService } from './sinistre.service';
import { MongooseModule } from '@nestjs/mongoose';
import { sinistreSchema } from './schemas/sinistre.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sinistre', schema: sinistreSchema }])],
  controllers: [SinistreController],
  providers: [SinistreService]
})
export class SinistreModule {}
