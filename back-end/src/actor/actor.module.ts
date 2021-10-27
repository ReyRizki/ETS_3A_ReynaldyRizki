import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { Actor } from '../model/actor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Actor])],
    providers: [ActorService],
    controllers: [ActorController],
    exports: []
})
export class ActorModule { }