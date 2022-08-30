import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { UsersList } from '../UsersList/UsersList';

export const UsersSearchPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="title">Пользователи по запросу defunkt</h1>
          <UsersList />
        </div>
      </main>
    </>
  );
};
