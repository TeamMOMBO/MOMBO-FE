import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getUserProfile } from '<prefix>/shared/apis/profile';
import UserIngredientResult from '<prefix>/components/my/userIngrdientContent/userIngredientResult';
import AccountOptions from '<prefix>/components/my/accountOptions';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';

export default async function MyPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });

  return (
    <>
      <div className='basis-full'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UserIngredientResult />
        </HydrationBoundary>
        <AccountOptions />
      </div>
      <NavBar />
    </>
  );
}
