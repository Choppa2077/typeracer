import { apiSlice } from './apiSlice';

export interface StartSingleRaceResponse {
  text: string | null;
  text_len: number | null;
  text_author: string | null;
  contributor_name: string | null;
  racer_name: string | null;
  avatar: string | null;
}

interface CurrentSingleRaceRequest{
  index: number | null;
  duration: number | null;
}

interface CurrentSingleRaceResponse{
  wpm: number | null;
}

interface EndSingleRaceRequest{
  errors: number | null;
  duration: number | null;
}

interface EndSingleRaceResponse{
  wpm: number | null;
  accuracy: number | null;
  duration: number | null;
}

// interface singleEndGetApiParams {
//   wpm: number;
//   accuracy: number;
//   duration: number;
//   id: string;
// }

// type singleEndResponse = singleEndGetApiParams;

export const startSingleApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    startSingleRace: build.mutation<StartSingleRaceResponse, void>({
      query: () => ({
        url: '/single/race',
        method: 'GET',
      }),
    }),
    endSingleRace: build.mutation<EndSingleRaceResponse, EndSingleRaceRequest>({
      query: (data) => ({
        url: '/single/end-race',
        method: 'POST',
        body: { ...data },
      }),
    }),
    currentSingleRace: build.mutation<CurrentSingleRaceResponse, CurrentSingleRaceRequest>({
      query: (data) => ({
        url: '/single/curr-wpm',
        method: 'POST',
        body: { ...data },
      }),
    }),
    
  }),
});

export const {
  useStartSingleRaceMutation,
  useEndSingleRaceMutation,
  useCurrentSingleRaceMutation,
} = startSingleApiSlice;
