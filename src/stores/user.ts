import { create } from 'zustand';
import { UserType } from '../@types';

type State = {
  users: UserType[];
  addUser: (user: UserType) => void;
};

const useUserStore = create<State>((set) => ({
  users: [],
  addUser: (user: UserType) => {
    set(state => [...state, user]);
  },
}));

export default useUserStore;
