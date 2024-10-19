import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IJoinReq } from '<prefix>/shared/types/auth';

interface IAuthState {
  userInfo: IJoinReq | null;
  setUserInfo: (info: IJoinReq) => void;
}

export const useAuthStore = create<IAuthState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => {
        if (userInfo === undefined) return;
        set({ userInfo });
      },
    }),
    {
      name: 'userInfo',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
