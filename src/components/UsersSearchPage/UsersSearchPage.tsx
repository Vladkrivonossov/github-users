import React, { FC, useEffect, useState } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { IUser } from '../../types';
import { useLocation } from 'react-router-dom';

export const UsersSearchPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const { search, pathname } = useLocation();
  const [searchedUsers, setSearchedUsers] = useState<IUser[]>([]);
  const [searchedSingleUsers, setSearchedSingleUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setSearchedSingleUsers([]);
    fetch(`https://api.github.com${pathname}${search}`)
      .then((res) => res.json())
      .then((res) => setSearchedUsers(res.items));
  }, [search, pathname]);

  useEffect(() => {
    searchedUsers.forEach((user) => {
      fetch(user.url)
        .then((res) => res.json())
        .then((res) => setSearchedSingleUsers((prevState) => prevState.concat([res])))
        .then(() => setLoading(true));
    });
  }, [searchedUsers]);

  return (
    <>
      {loading ? (
        <main>
          {searchedSingleUsers.length ? (
            <div className="container">
              <h1 className="title">Пользователи по запросу {search.split('=')[1].replace(/%(20)/g, ' ')}</h1>
              <UsersList usersList={searchedSingleUsers} />
            </div>
          ) : (
            <div className="container">
              <h1 className="title">
                Пользователи по запросу {search.split('=')[1].replace(/%(20)/g, ' ')} не найдены
              </h1>
            </div>
          )}
        </main>
      ) : (
        <div className="container">
          <h1 className="title">Загрузка...</h1>
        </div>
      )}
    </>
  );
};
