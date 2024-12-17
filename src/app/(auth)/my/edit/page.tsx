import { getUserProfile } from '<prefix>/shared/apis/profile';
import AccountEditForm from '<prefix>/components/my/edit/profileEditForm';

export default async function AccountEditPage({}) {
  const data = await getUserProfile();
  return (
    <>
      <AccountEditForm userProfile={data.profile} />
    </>
  );
}
