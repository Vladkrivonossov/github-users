import React, { FC, useEffect, useState } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { IUser } from '../../types';
import { githubToken } from '../../helpers';

export const UsersPage: FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [singleUsers, setSingleUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users', {
      headers: {
        Authorization: `${githubToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setUsersList(res));
  }, []);

  useEffect(() => {
    usersList.forEach((user) => {
      fetch(user.url, {
        headers: {
          Authorization: `${githubToken}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setSingleUsers((prevState) => prevState.concat([res])))
        .then(() => setLoaded(true));
    });
  }, [usersList]);

  return (
    <>
      <main>
        {!loaded ? (
          <div className="container">
            <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Загрузка...</h1>
          </div>
          
        ) : (
          <div className="container">
            <UsersList usersList={singleUsers} />
          </div>
        )}
      </main>
    </>
  );
};
