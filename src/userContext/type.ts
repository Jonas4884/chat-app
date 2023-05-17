import { UserforDomain } from '@/common/types';

type UserStore = {
  user: UserforDomain | null;
  errorMessage: string;
};

type UserStoreAction = {
  setUser: (user: UserforDomain) => void;
  setErrorMessage: (message: string) => void;
};

export type GlobalStore = UserStore & UserStoreAction;
