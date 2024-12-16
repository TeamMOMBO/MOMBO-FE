import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import LogoutModal from '<prefix>/components/my/modal/myPageModal';
import MyPageDetailsButton from '<prefix>/components/my/myPageDetailsButton';
import UseringredientResult from '<prefix>/components/my/useringredientResult';
import { useToggle } from '<prefix>/hooks/useToggle';
import RightArrowIcon from '/public/svgs/arrow/icon-right.svg';

export default async function MyPage() {
  // const [isModalOpen, toggleModal] = useToggle(true);

  return (
    <>
      <MainTopBar>마이페이지</MainTopBar>
      <div className='mt-24 px-16'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <span className='text-head-01 text-neutral-900'>맘보 님</span>
            <RightArrowIcon
              className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
            />
          </div>
          <span className='mb-20 text-body-06 text-neutral-600'>
            임신 13주 차
          </span>
          {/* <ProgressBar currentNum={pregnancyWeek} totalNum={totalWeek} /> */}
        </div>
        <UseringredientResult imgSrc='' />
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
