import {useEffect} from 'react';
import {useMainStore} from '../../../core/store/mainStore';
import {loadUserFromFirestore} from './loadUserFromFirestore';
import {getUserId} from '../../../core/store/userSlice';
import {UserType} from '@digital-tickets-project/types';
import {loginUser} from './loginUser';

export const useHandleUserLogin = () => {
  const setUser = useMainStore(state => state.setUser);
  const setUserId = useMainStore(state => state.setUserId);

  const handleLoginUser = async (email: string, pwd: string) => {
    const userData = await loginUser(email, pwd);
    const user = await loadUserFromFirestore(userData?.uid as string);
    if (user) {
      setUser(user as UserType);
      setUserId(user.uid as string);
    }
  };

  return {handleLoginUser};
};
