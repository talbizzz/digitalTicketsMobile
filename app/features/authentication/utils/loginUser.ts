import {firebase} from '@react-native-firebase/auth';

export const loginUser = async (email: string, password: string) => {
  try {
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};
