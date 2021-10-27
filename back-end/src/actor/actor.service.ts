import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from '../model/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {
    constructor(@InjectRepository(Actor) private readonly repo: Repository<Actor>) { }

    public async getAll() {
        return await this.repo.find();
    }
}
