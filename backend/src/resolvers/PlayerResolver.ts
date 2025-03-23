import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { Player } from "../entities/Player";
import { Like } from "typeorm";


@InputType()
class PlayerInput {
    @Field()
    firstname!: string;

    @Field()
    lastname!: string;

    @Field()
    shortname!: string

    @Field()
    sex!: string;

    @Field()
    picture!: string;

    @Field()
    rank!: number;
    
    @Field()
    point!: number;

    @Field()
    weight!: number;

    @Field()
    height!: number;

    @Field()
    age!: number;

    @Field()
    last_match_scores!: number;

    @Field(() => ID)
    country!: Country
}

@Resolver(Player)
class PlayerResolver {
    @Query(() => [Player])
    async getPlayers() {
        const players = await Player.find({relations: { country: true }})
        return players
    }

    @Query(() => Player)
    async getPlayerWithId(@Arg("id") id: string) {
        const player = await Player.findOneOrFail({
            where: { id },
            relations: { country: true }
        })
        return player
    }

    @Query(() => [Player])
    async getPlayerWithSearchBar(@Arg("needle", { nullable: true }) needle?: string) {

        let whereClause = {};
        if (needle) {
            whereClause = {
                totalName: Like(`%${needle}%`)
            }
        }

        const player = await Player.find({
            where:  whereClause,
            relations: { country: true}
        })
        if (!player) {
            throw new Error("Player not found"); 
        }
        return player
    }

    @Mutation(() => Player)
    async createPlayer(@Arg("data") data?: PlayerInput) {
        let player = new Player()
        player = Object.assign(player, data)
        player.save()
        return player
    }
}

export default PlayerResolver
