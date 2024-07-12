import {firebase} from '@react-native-firebase/firestore';

export const loadUserFromFirestore = async (uid: string) => {
  try {
    const user = await firebase.firestore().collection('users').doc(uid).get();
    return user.data();
  } catch (error) {
    console.log(error);
  }
};
