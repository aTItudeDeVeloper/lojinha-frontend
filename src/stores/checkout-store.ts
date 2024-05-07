import { create } from "zustand";

type States = {
    name: string;
    address: {
        street: string;
        number: string;
        complement?: string | undefined;
        district: string;
        city: string;
        state: string;
    }
}

type Actions = {
    setName: (name: States['name']) => void;
    setAdress: (address: States['address']) => void;
}

const initialState: States = {
    name: '',
    address: {
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    }
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({...state, name})),
    setAdress: (address) => set(state => ({...state, address}))
}));