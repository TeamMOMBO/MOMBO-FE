import { getUserProfile } from '<prefix>/shared/apis/profile';

export default async function TestPage() {
  const data = await getUserProfile();
  console.log(data);
  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>프로필 정보</h1>
      <div className='space-y-2'>
        <p>이메일: {data.profile?.email}</p>
        <p>닉네임: {data.profile?.nickname}</p>
        <p>회원 유형: {data.profile?.userType}</p>
      </div>
    </div>
  );
}
