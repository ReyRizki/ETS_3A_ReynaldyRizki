import { Controller, Get } from '@nestjs/common';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
    constructor(private serv: ActorService) { }

    @Get()
    public async getAll() {
        return await this.serv.getAll();
    }
}
