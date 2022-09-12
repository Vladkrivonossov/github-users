import React, { FC, useEffect, useState } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { IUser } from '../../types';

export const UsersPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [singleUsers, setSingleUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((res) => setUsersList(res));
  }, []);

  useEffect(() => {
    usersList.forEach((user) => {
      fetch(user.url)
        .then((res) => res.json())
        .then((res) => setSingleUsers((prevState) => prevState.concat([res])))
        .then(() => setLoading(true));
    });
  }, [usersList]);

  return (
    <>
      <main>
        {loading ? (
          <div className="container">
            <UsersList usersList={singleUsers} />
          </div>
        ) : (
          <div className="container">
            <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Загрузка...</h1>
          </div>
        )}
      </main>
    </>
  );
};
