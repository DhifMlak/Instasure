import { Controller, Get, Param } from '@nestjs/common';
import { SinistreService } from './sinistre.service';

@Controller('sinistre')
export class SinistreController {

    constructor(private readonly sinistreService: SinistreService) { }

    @Get()
    async findAll() {
        return this.sinistreService.findAll();
    }
    @Get('year/:year')
    async findByYear( @Param('year') year) {
        return this.sinistreService.findByYear(year);
    }

    @Get('count')
    async count() {
        return this.sinistreService.count();
    }

}
