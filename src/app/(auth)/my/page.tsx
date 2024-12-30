import MainTopBar from '<prefix>/components/common/bar/mainTopBar';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getUserProfile } from '<prefix>/shared/apis/profile';
import UserIngredientResult from '<prefix>/components/my/userIngrdientContent/userIngredientResult';
import AccountOptions from '<prefix>/components/my/accountOptions';

export default async function MyPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });

  return (
    <>
      <MainTopBar>마이페이지</MainTopBar>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserIngredientResult />
      </HydrationBoundary>
      <AccountOptions />
    </>
  );
}
