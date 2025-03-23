import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";


@InputType()
class CountryInput {
    @Field()
    picture!: string;

    @Field()
    code!: string;
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

    @Mutation(() => Country)
    async createCountry(@Arg("data") data?: CountryInput) {
        let country = new Country()
        country = Object.assign(country, data)
        await country.save()
        return country
    }

}

export default CountryResolver
