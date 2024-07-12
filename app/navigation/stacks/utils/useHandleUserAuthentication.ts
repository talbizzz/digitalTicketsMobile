import {useMainStore} from '../../../core/store/mainStore';
import {getUser, getUserId} from '../../../core/store/userSlice';

export const useHandleUserAuthentication = () => {
  const uid = useMainStore(getUserId);
  const user = useMainStore(getUser);
  return {
    isLoggedIn: !!uid && !!user,
  };
};
