import { DomainUser } from '@/common/types';

type UserStore = {
  user: DomainUser | null;
  errorMessage: string;
};

type UserStoreAction = {
  setUser: (user: DomainUser) => void;
  setErrorMessage: (message: string) => void;
};

export type GlobalStore = UserStore & UserStoreAction;
