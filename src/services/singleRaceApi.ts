import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface singelRace {
  racer_id: string;
  content: string;
  length: number;
  text_author: string;
  contributor_name: string;
  racer_name: string;
  avatar: string;
  id: string;
}
interface PostData {
  racer_id: string;
}

type singleRaceResponse = singelRace;

interface singleEndGetApiParams {
  wpm: number;
  accuracy: number;
  duration: number;
  id: string;
}

type singleEndResponse = singleEndGetApiParams;

export const singleRaceApi = createApi({
  reducerPath: 'singleRaceApi',
  tagTypes: ['singleRace'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getRaceData: build.query<singleRaceResponse, void>({
      query: () => 'single',
      providesTags: (result) =>
        result
          ? [
              { type: 'singleRace' as const, id: result.id },
              { type: 'singleRace', id: 'LIST' },
            ]
          : [{ type: 'singleRace', id: 'LIST' }],
    }),
    // singleRace: build.mutation<singleRaceResponse, PostData>({
    //   query: (postData) => ({
    //     url: 'single',
    //     method: 'POST',
    //     body: postData,
    //   }),
    //   onQueryUpdated: (result, { dispatch, queryFulfilled }) => {
    //     // After the mutation is completed, you can dispatch additional actions
    //     // For example, you can refetch data using another query
    //     queryFulfilled(result, dispatch);
    //   },
    // }),
    getEndData: build.query<singleEndResponse, void>({
      query: () => 'raceEnd',
      providesTags: (result) =>
        result
          ? [
              { type: 'singleRace' as const, id: result.id },
              { type: 'singleRace', id: 'LIST' },
            ]
          : [{ type: 'singleRace', id: 'LIST' }],
    }),
  }),
});

export const { useGetRaceDataQuery, useGetEndDataQuery } = singleRaceApi;
