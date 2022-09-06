import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './UsersList.css';
import { pluralize } from '../../helpers';
import { IUser } from '../../types';

interface Props {
  usersList: IUser[];
}

export const UsersList: FC<Props> = ({ usersList }) => {
  return (
    <div className="users-list">
      {usersList.map((user) => (
        <section className="users-list__item" key={user.id}>
          <div className="users-list__image-container">
            <img className="users-list__image" src={user.avatar_url} alt={`${user.name ?? user.login} profile photo`} />
          </div>
          <div className="users-list__content">
            <h2 className="users-list__title">
              <Link to={`/users/${user.login}`} className="link">
                {user.name ?? user.login}
              </Link>
              {`, ${user.public_repos} ${pluralize(user.public_repos, ['репозиторий', 'репозитория', 'репозиториев'])}`}
            </h2>
            <p className="users-list__text">{user.company}</p>
          </div>
        </section>
      ))}
    </div>
  );
};
