import { create } from 'zustand';

export interface Request {
  id: number;
  name: string;
  email?: string;
  date: string;
  phone?: string;
  video?: string;
  residence?: string;
  destination?: string;
  yes: number;
  no: number;
}

interface RequestState {
  requests: Request[];
  addRequest: (request: Request) => void;
}

export const useVoteStore = create<RequestState>((set) => ({
  requests: [
    {
      id: 1,
      name: 'JJ',
      destination: 'Fiji',
      yes: 80,
      no: 20,
      date: '2022-12-10',
    },
    {
      id: 2,
      name: 'RB',
      destination: 'Bali',
      yes: 80,
      no: 50,
      date: '12/10/2022',
    },
    {
      id: 3,
      name: 'AW',
      destination: 'Jamaica',
      yes: 60,
      no: 10,
      date: '12/10/2022',
    },
  ],
  addRequest: (request: Request) =>
    set((state) => ({ requests: [...state.requests, request] })),
}));
