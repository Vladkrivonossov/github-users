import React, { FC } from 'react';
import { UserProfilePage } from '../UserProfilePage/UserProfilePage';
import { UsersPage } from '../UsersPage/UsersPage';
import { UsersSearchPage } from '../UsersSearchPage/UsersSearchPage';

export const App: FC = () => {
  return (
    <>
      <UserProfilePage />
      <UsersPage />
      <UsersSearchPage />
    </>
  );
};
