import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import LogoutModal from '<prefix>/components/my/modal/myPageModal';
import MyPageDetailsButton from '<prefix>/components/my/myPageDetailsButton';
import { useToggle } from '<prefix>/hooks/useToggle';

export default async function MyPage() {
  // const [isModalOpen, toggleModal] = useToggle(true);

  return (
    <>
      <MainTopBar>마이페이지</MainTopBar>
      <div className='px-16'>
        <p>마이 페이지 컨텐츠 영역</p>
      </div>
      <MyPageDetailsButton>문의하기</MyPageDetailsButton>
      <MyPageDetailsButton>오픈 라이센스</MyPageDetailsButton>
      <MyPageDetailsButton>개인정보처리방침</MyPageDetailsButton>
      <MyPageDetailsButton>이용약관</MyPageDetailsButton>
      <MyPageDetailsButton>로그아웃</MyPageDetailsButton>
      <MyPageDetailsButton>회원탈퇴</MyPageDetailsButton>
      {/* <LogoutModal isOpen={isModalOpen} onClose={toggleModal} type='로그아웃'>
        언제든지 같은 계정으로 다시 로그인 할 수 있어요.
      </LogoutModal> */}
    </>
  );
}
