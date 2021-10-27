import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDTO } from './actor.dto';

@Controller('actor')
export class ActorController {
    constructor(private serv: ActorService) { }

    @Get()
    public async getAll(): Promise<ActorDTO[]> {
        return await this.serv.getAll();
    }

    @Post()
    public async post(@Body() dto: ActorDTO): Promise<ActorDTO> {
        return this.serv.create(dto);
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() dto: ActorDTO) {
        return this.serv.update(id, dto);
    }

    @Delete(':id')
    public async delete(@Param('id') id: number) {
        return this.serv.delete(id);
    }
}
