import { BaseEntity, BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import { Country } from "./Country";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string

    @Column()
    @Field()
    firstname!: string

    @Column()
    @Field()
    lastname!: string

    @Column()
    @Field()
    totalName!: string

    @Column()
    @Field()
    shortname!: string

    @Column({length: 1})
    @Field()
    sex!: string

    @Column()
    @Field()
    picture!: string

    @Column()
    @Field()
    rank!: number

    @Column()
    @Field()
    point!: number

    @Column()
    @Field()
    weight!: number

    @Column()
    @Field()
    height!: number

    @Column()
    @Field()
    age!: number

    @Column()
    @Field()
    last_match_scores!: number

    @ManyToOne(() => Country, (country) => country.players)
    @Field(() => Country)
    country!: Country

    @BeforeInsert()
    updateTotalName() {
        this.totalName = this.lastname + ' ' + this.firstname
    }
}