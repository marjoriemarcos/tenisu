import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import { Country } from "./Country";


@Entity()
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstname!: string

    @Column()
    lastname!: string

    @Column()
    shortname!: string

    @Column({length: 1})
    sex!: string

    @Column()
    picture!: string

    @Column()
    rank!: number

    @Column()
    point!: number

    @Column()
    weight!: number

    @Column()
    height!: number

    @Column()
    age!: number

    @Column()
    last_match_scores!: number

    @ManyToOne(() => Country, (country) => country.players)
    country!: Country
}