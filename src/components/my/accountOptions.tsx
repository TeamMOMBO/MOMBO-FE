'use client';
import React, { useState } from 'react';
import MyPageDetailsButton from './myPageDetailsButton';
import LogoutModal from './modal/myPageModal';

import { useToggle } from '<prefix>/hooks/useToggle';
import {
  useLogoutMutation,
  useWithdrawalMutation,
} from '<prefix>/state/mutations/auth';

type ModalType = '로그아웃' | '탈퇴';

export default function AccountOptions() {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [modalType, setModalType] = useState<ModalType>('로그아웃');

  const logoutMutation = useLogoutMutation();
  const withdrawalMutation = useWithdrawalMutation();

  const handleModalOpen = (type: ModalType) => {
    setModalType(type);
    toggleModal();
  };

  const handleModalConfirm = () => {
    if (modalType === '로그아웃') {
      logoutMutation.mutate();
    } else {
      withdrawalMutation.mutate();
    }
    toggleModal();
  };

  return (
    <>
      <MyPageDetailsButton>문의하기</MyPageDetailsButton>
      <MyPageDetailsButton>오픈 라이센스</MyPageDetailsButton>
      <MyPageDetailsButton>개인정보처리방침</MyPageDetailsButton>
      <MyPageDetailsButton>이용약관</MyPageDetailsButton>
      <div
        className='mx-auto my-8 h-px bg-gray-200'
        style={{ width: 'calc(100% - 42px)' }}
      />
      <MyPageDetailsButton onClick={() => handleModalOpen('로그아웃')}>
        로그아웃
      </MyPageDetailsButton>
      <MyPageDetailsButton onClick={() => handleModalOpen('탈퇴')}>
        회원탈퇴
      </MyPageDetailsButton>

      <LogoutModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={toggleModal}
        onConfirm={handleModalConfirm}
      >
        {modalType === '로그아웃'
          ? '언제든지 같은 계정으로 다시 로그인 할 수 있어요.'
          : '회원 탈퇴 시 저장된 모든 기록이 사라지며 복구할 수 없어요 😢'}
      </LogoutModal>
    </>
  );
}
