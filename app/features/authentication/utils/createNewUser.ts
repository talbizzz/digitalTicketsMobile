import {UserType} from '@digital-tickets-project/types';
import {firebase} from '@react-native-firebase/firestore';

export const createNewUser = async (user: UserType) => {
  // Create new user in firestore
  await firebase.firestore().collection('users').doc(user.uid).set(user);
  console.log('User ' + user.uid + ' created');
};
