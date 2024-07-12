import {firebase} from '@react-native-firebase/auth';
import {useMainStore} from '../../../core/store/mainStore';
import {
  getRegistrationCompleted,
  getRegistrationData,
} from '../../../core/store/registrationSlice';
import {createNewUser} from './createNewUser';
import {UserType} from '@digital-tickets-project/types';

export const useHandleUserRegistration = () => {
  const registrationCompleted = useMainStore(getRegistrationCompleted);
  const regitsrationData = useMainStore(getRegistrationData);
  const setUser = useMainStore(state => state.setUser);
  const setUserId = useMainStore(state => state.setUserId);
  if (registrationCompleted) {
    // Handle user registration
  }

  const registerUser = async (email: string, pwd: string) => {
    console.log('regitsrationData', regitsrationData);
    // Register user
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd);
    // Save user data
    const user = {
      uid: data.user.uid,
      email,
      ...regitsrationData,
    };
    await createNewUser(user as UserType);
    setUser(user as UserType);
    setUserId(data.user.uid);
  };

  return {registerUser};
};
