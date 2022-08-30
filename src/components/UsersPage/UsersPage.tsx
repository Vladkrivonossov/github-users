import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { UsersList } from '../UsersList/UsersList';

export const UsersPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <UsersList />
        </div>
      </main>
    </>
  );
};
