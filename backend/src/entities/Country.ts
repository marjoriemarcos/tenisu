import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import { Player } from "./Player";


@Entity()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    picture!: string

    @Column()
    code!: string

    @OneToMany(() => Player, (player) => player.country)
    players!: Player[];
}