import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = '<key to access the API server>';

// Data structure for data fetched from the service
interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    };
}

// https://redux-toolkit.js.org/rtk-query/overview#basic-usage

// The createApi function accepts an options object to specify how the "api" query
// should be created.
const dogApiSlice = createApi({
    reducerPath: 'dog-api', // Unique key used to mount the api service to the redux store
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers;
        },
        // Alternatively, written as:
        // prepareHeaders(headers) {
        //     headers.set('x-api-key', DOGS_API_KEY);
        //     return headers;
        // },

        // Optionally, a custom fetch function can be used instead of the built-in fetch function
        fetchFn: undefined,
    }),
    // List of all endpoints you want to connect to
    endpoints: (builder) => {
        return {
            // Use the builder to build each endpoint
            fetchBreeds: builder.query<Breed[], number | void>({
                query: (limit = 10) => {
                    console.log(`limit to: ${limit}`);
                    return `/breeds?limit=${limit}`;
                },
            }),
            // Add more endpoints
        };
    },
});

// RTK automatically creates hooks for endpoints
export const { useFetchBreedsQuery, useLazyFetchBreedsQuery } = dogApiSlice;
export default dogApiSlice;
