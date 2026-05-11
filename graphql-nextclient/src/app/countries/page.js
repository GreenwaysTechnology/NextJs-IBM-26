import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

//Declare Query
const query = gql`query {
   countries {
        name
    }
  }
`
export default async function CountriesPage() {
    const { data: { countries } } = await getClient().query({ query })

    return <div>
        <h1>Countries Info From Graphql Server</h1>
        <ul>
            {countries.map(country => {
                return <li key={country.id}>
                    <h3>{country.name}</h3>
                </li>
            })}
        </ul>
    </div>
}
