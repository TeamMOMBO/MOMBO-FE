'use client';

import Input from '<prefix>/components/common/input';
import DropDown from '<prefix>/components/common/dropdown/dropdown';
import { useToggle } from '<prefix>/hooks/useToggle';
import { useState } from 'react';
import CheckButton from '<prefix>/components/common/button/checkButton';
import useInput from '<prefix>/hooks/useInput';
import { UserProfile } from '<prefix>/shared/types/auth';
import { USER_TYPE } from '<prefix>/shared/constants/user';
import { useProfileEditMutation } from '<prefix>/state/mutations/auth';
import {
  nickNameValidator,
  pregnancyWeekValidator,
} from '<prefix>/shared/utils/validator';
import LargeButton from '<prefix>/components/common/button/largeButton';

type Props = {
  userProfile: UserProfile;
};

export default function ProfileEditForm({ userProfile }: Props) {
  const [nickName, handleNickNameInputChange] = useInput(
    userProfile?.nickname,
    nickNameValidator,
  );
  const [pregnancyWeek, handleWeekInputChange, resetWeek] = useInput(
    userProfile?.pregnancyWeek?.toString(),
    pregnancyWeekValidator,
  );
  const [isOpen, toggleDropDown] = useToggle(false);
  const [isSelected, toggleSelected] = useToggle(
    userProfile?.pregnancyWeek === 0 || userProfile?.pregnancyWeek === null,
  );
  const [userType, setUserType] = useState(userProfile?.userType);

  const profileEditMutation = useProfileEditMutation();

  const handleWeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleWeekInputChange(e);
    if (value !== '' && isSelected) {
      toggleSelected();
    }
  };

  const handleCheckBtnClick = () => {
    if (!isSelected) {
      resetWeek('');
    }
    toggleSelected();
  };

  const onSubmit = () => {
    const formData = new FormData();

    formData.append('nickname', nickName || ''); // 빈 값 처리
    formData.append('userType', userType || '');
    // formData.append(
    //   'pregnancyDate',
    //  '',
    // );
    formData.append(
      'pregnancyWeek',
      isSelected ? '0' : pregnancyWeek ? pregnancyWeek : '0',
    );

    profileEditMutation.mutate(formData);
  };

  return (
    <>
      <div className='relative flex w-full basis-full flex-col px-16 pb-40 pt-12'>
        <div className='flex w-full basis-full flex-col gap-24'>
          <h1 className='mb-12 text-head-01 text-neutral-900'>
            계정 정보 수정
          </h1>
          {/* 닉네임 입력 */}
          <label className='text-body-06 text-neutral-600'>
            <span>닉네임</span>
            <Input
              value={nickName}
              onChange={handleNickNameInputChange}
              placeholder='닉네임을 입력하세요'
            />
          </label>
          {/* 임신 주차 입력 */}
          <label className='text-body-06 text-neutral-600'>
            <span>임신 주차</span>
            <Input
              type='text'
              placeholder='ex) 12'
              onChange={handleWeekChange}
              value={
                pregnancyWeek && parseInt(pregnancyWeek) !== 0
                  ? pregnancyWeek
                  : ''
              }
              className='[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
            <div className='mt-16 flex items-center gap-8'>
              <CheckButton
                isSelected={isSelected}
                onClick={handleCheckBtnClick}
              />
              <span className='text-body-10 text-neutral-600'>
                몇 주차인지 잘 모르거나 이미 출산했어요
              </span>
            </div>
          </label>
          {/* 회원 타입 드롭다운 */}
          <label className='text-body-06 text-neutral-600'>
            <span>회원 타입</span>
            <DropDown handleClose={toggleDropDown}>
              <DropDown.Trigger isOpen={isOpen} onClick={toggleDropDown}>
                {userType}
              </DropDown.Trigger>
              <DropDown.Menu isOpen={isOpen}>
                {USER_TYPE.map(({ tab }) => (
                  <DropDown.Item
                    key={tab}
                    isChecked={userType === tab}
                    onClick={() => setUserType(tab)}
                  >
                    {tab}
                  </DropDown.Item>
                ))}
              </DropDown.Menu>
            </DropDown>
          </label>
        </div>
        <LargeButton
          variant='fill'
          buttonColor='primary'
          className='sticky bottom-0'
          onClick={onSubmit}
          disabled={
            nickName.trim() === '' ||
            (!!pregnancyWeek === false && isSelected === false)
          }
        >
          수정 완료하기
        </LargeButton>
      </div>
    </>
  );
}
