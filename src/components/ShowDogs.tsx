import { useState } from "react";
import dogApiSlice, {
    useFetchBreedsQuery,
} from "../features/dog-api/dogApiSlice";

const ShowDogs = () => {
    const [numOfDogs, setNumOfDogs] = useState(10);
    // The query hook takes an additional options object to specify when to run the query etc.
    // By default, query is triggered when the args change.
    const { data = [], error, isFetching } = useFetchBreedsQuery(numOfDogs);
    // Or, use this pattern to call individual endpoint
    // dogApiSlice.endpoints.fetchBreeds.useQuery(numOfDogs);

    return (
        <div>
            <div style={{ display: "flex", margin: "auto" }}>
                <p>Number of dog breeds to fetch:</p>
                <select
                    value={numOfDogs}
                    onChange={(e) => setNumOfDogs(Number(e.target.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div>
                <p>Number of dogs fetched: {data.length}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((breed) => (
                            <tr key={breed.id}>
                                <td>{breed.name}</td>
                                <td>
                                    <img
                                        alt={breed.name}
                                        src={breed.image.url}
                                        height={250}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowDogs;
