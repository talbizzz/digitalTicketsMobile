import {produce} from 'immer';
import {StateCreator} from 'zustand';

export type RegistrationState = {
  registrationFlags: {[key in RegistrationFlag]?: boolean};
  registrationCompleted: boolean;
  registrationData: {
    [key: string]: any;
  };

  setRegistrationFlag: (flag: RegistrationFlag, value: boolean) => void;
  setRegistrationCompleted: (value: boolean) => void;
  setRegistrationData: (key: RegistrationFlag, value: any) => void;
};

export type RegistrationFlag =
  | 'name'
  | 'familyName'
  | 'birthday'
  | 'phoneNumber';

const initialState = {
  registrationFlags: {},
  registrationCompleted: false,
  registrationData: {},
};

export const createRegistrationSlice: StateCreator<
  RegistrationState
> = set => ({
  ...initialState,
  setRegistrationFlag: (flag: RegistrationFlag, value: boolean) =>
    set(
      produce((state: RegistrationState) => {
        state.registrationFlags[flag] = value;
      }),
    ),
  setRegistrationCompleted: (value: boolean) =>
    set({registrationCompleted: value}),
  setRegistrationData: (key: RegistrationFlag, value: any) =>
    set(
      produce((state: RegistrationState) => {
        state.registrationData[key] = value;
      }),
    ),
});

export const getRegistrationFlags = (state: RegistrationState) =>
  state.registrationFlags;
export const getRegistrationCompleted = (state: RegistrationState) =>
  state.registrationCompleted;
export const getRegistrationData = (state: RegistrationState) =>
  state.registrationData;
