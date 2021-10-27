import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from '../model/actor.entity';
import { Repository } from 'typeorm';
import { ActorDTO } from './actor.dto';

@Injectable()
export class ActorService {
    constructor(@InjectRepository(Actor) private readonly repo: Repository<Actor>) { }

    public async getAll(): Promise<ActorDTO[]> {
        return await this.repo.find()
            .then((actors) => actors.map((e) => ActorDTO.fromEntity(e)));
    }

    public async create(dto: ActorDTO): Promise<ActorDTO> {
        return this.repo.save(dto)
            .then((e) => ActorDTO.fromEntity(e));
    }
}
