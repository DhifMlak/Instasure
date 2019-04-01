import { Controller, Get } from '@nestjs/common';
import { SinistreService } from './sinistre.service';

@Controller('sinistre')
export class SinistreController {

    constructor(private readonly sinistreService: SinistreService) { }

    @Get()
    async findAll() {
        return this.sinistreService.findAll();
    }

    @Get('count')
    async count() {
        return this.sinistreService.count();
    }

}
