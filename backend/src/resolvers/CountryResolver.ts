import { Arg, Field, ID, InputType, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { Player } from "../entities/Player";


@InputType()
class CountryInput {
    @Field()
    picture!: string;

    @Field()
    code!: string;

    @Field(() => [ID])
    players!: Player;
}

@Resolver(Country)
class CountryResolver {
    @Query(() => [Country])
    async getCountries() {
        const countries = await Country.find({
            relations: { players: true}
        })
        return countries
    }

    @Query(() => Country)
    async getCountryWithId(@Arg("id") id: string) {
        const country = await Country.findOneOrFail({
            where: { id },
            relations: { players: true }
        })
        return country
    }
}

export default CountryResolver
