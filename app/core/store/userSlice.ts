import {UserType} from '@digital-tickets-project/types';
import {StateCreator} from 'zustand';
import {State} from './mainStore';

export type UserState = {
  userId?: string;
  user?: UserType;

  setUserId: (userId?: string) => void;
  setUser: (user?: UserType) => void;
  resetUserState: () => void;
};

const initialState = {
  userId: undefined,
  user: undefined,
};

export const createUserSlice: StateCreator<UserState> = set => ({
  ...initialState,
  setUserId: (userId?: string) => set({userId: userId}),
  setUser: (user?: UserType) => set({user: user}),
  resetUserState: () => set(initialState),
});

export const getUser = (state: State) => state.user;
export const getUserId = (state: State) => state.userId;
