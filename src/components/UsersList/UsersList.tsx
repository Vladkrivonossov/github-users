import React, { FC } from 'react';
import './UsersList.css';

export const UsersList: FC = () => {
  return (
    <div className="users-list">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <section className="users-list__item" key={item}>
          <div className="users-list__image-container">
            <img className="users-list__image" src="http://placeimg.com/640/480/any" alt="defunkt profile photo" />
          </div>
          <div className="users-list__content">
            <h2 className="users-list__title">
              <a href="/" className="link">
                defunkt
              </a>
              , 15 репозиториев
            </h2>
            <p className="users-list__text">Название организации</p>
          </div>
        </section>
      ))}
    </div>
  );
};
