import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";


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
    country_picture!: string

    @Column({length: 3})
    country_code!: string

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
    last_match_scores!: JSON
}