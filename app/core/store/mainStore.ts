import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEqual} from 'lodash';
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {createWithEqualityFn} from 'zustand/traditional';
import {createUserSlice, UserState} from './userSlice';

export type State = UserState;

export const useMainStore = createWithEqualityFn<State>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (...a) => ({
            ...createUserSlice(...a),
          }),
          {
            name: 'store',
            storage: createJSONStorage(() => AsyncStorage),
          },
        ),
      ),
    ),
  ),
  isEqual,
);

export const resetStore = (state: State) => {
  state.resetUserState();
};
