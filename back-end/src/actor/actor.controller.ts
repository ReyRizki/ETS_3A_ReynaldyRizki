import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
