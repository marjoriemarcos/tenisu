import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CountryInput, useCreateCountryMutation } from "../libs/graphql/generated/graphql-types";
import { FormEvent } from "react";
import { GET_COUNTRIES } from "../libs/graphql/operations";

const CreateCountry = () => {
    const [createCountryMutation, { loading, error }] = useCreateCountryMutation({
        refetchQueries: [GET_COUNTRIES, 'GetCountries'],
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);

        const countryData: CountryInput = {
            code: formData.get('code') as string,
            picture: formData.get('picture') as string
        };

        createCountryMutation({
            variables: { data: countryData }
        });
    }

         if (loading) {
            return <p>Loading...</p>
        }
    
        if (error) {
            return <p>Something wrong...</p>
        }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="button">Ajouter un pays</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="dialog-overlay" />
                <Dialog.Content className="dialog-content">
                    <Dialog.Title className="dialog-title">Ajouter un pays</Dialog.Title>
                    <Dialog.Description className="dialog-description">
                        Une fois le pays ajouté, faites ajouter.
                    </Dialog.Description>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="label" htmlFor="picture">
                                Picture
                            </label>
                            <input className="input" id="picture" name="picture" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label" htmlFor="nom court">
                                Code
                            </label>
                            <input className="input" id="code" name="code"/>
                        </fieldset>
                        <button className="button" disabled={loading} >Ajouter</button>
                    </form>
                    <Dialog.Close asChild>
                        <button className="icon-button" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default CreateCountry;
