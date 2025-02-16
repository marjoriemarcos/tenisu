import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import { Player } from "./Player";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string

    @Column()
    @Field()
    picture!: string

    @Column()
    @Field()
    code!: string

    @OneToMany(() => Player, (player) => player.country)
    @Field(() => [Player])
    players!: Player[];
}