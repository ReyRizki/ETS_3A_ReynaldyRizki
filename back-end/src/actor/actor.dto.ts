import { IsDate, IsNumber, IsString } from "class-validator";
import { Actor } from "../model/actor.entity";

export class ActorDTO implements Readonly<ActorDTO> {
    @IsNumber()
    actor_id: number;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    public static from(dto: Partial<ActorDTO>) {
        const actor = new ActorDTO();

        actor.actor_id = dto.actor_id;
        actor.first_name = dto.first_name;
        actor.last_name = dto.last_name;

        return actor;
    }

    public static fromEntity(entity: Actor) {
        return this.from({
            actor_id: entity.actor_id,
            first_name: entity.first_name,
            last_name: entity.last_name,
        });
    }
}