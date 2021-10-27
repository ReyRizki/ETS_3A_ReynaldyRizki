import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'actor' })
export class Actor {
    @PrimaryGeneratedColumn({ type: 'int' })
    actor_id: number;

    @Column({ type: 'varchar', length: 300 })
    first_name: string;

    @Column({ type: 'varchar', length: 300 })
    last_name: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    last_update: Date;
}