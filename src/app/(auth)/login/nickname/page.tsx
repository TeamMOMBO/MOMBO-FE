import LargeButton from '<prefix>/components/common/button/largeButton';
import Input from '<prefix>/components/common/input';
export default function NickNamePage() {
  return (
    <>
      <div className='mb-32 space-y-6 pl-16 pt-145'>
        <h2 className='text-head-01 text-neutral-900'>
          맘보에 오신 것을 환영해요! <br /> 사용하실 닉네임을 알려주세요.
        </h2>
        <p className='text-body-06 text-neutral-600'>
          닉네임은 언제든지 변경할 수 있어요.
        </p>
      </div>
      <Input placeholder='닉네임을 입력해주세요.' />
      <LargeButton
        variant='fill'
        buttonColor='primary'
        className='absolute bottom-40'
        disabled={true}
      >
        다음
      </LargeButton>
    </>
  );
}
