import React, { FC } from 'react';
import './UserProfilePage.css';
import { Header } from '../Header/Header';

export const UserProfilePage: FC = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <section className="user-profile">
            <div className="user-profile__image-container">
              <img className="user-profile__image" src="http://placeimg.com/640/480/any" alt="defunkt profile photo" />
            </div>
            <div className="user-profile__content">
              <h1 className="user-profile__title">
                Chris Wanstrath, <span className="user-profile__accent">defunct</span>
              </h1>
              <p className="user-profile__text">
                <span className="user-profile__accent">21.3k</span> followers ·{' '}
                <span className="user-profile__accent">210</span> following ·{' '}
                <a href="http://chriswanstrath.com/" className="link">
                  http://chriswanstrath.com/
                </a>
              </p>
            </div>
          </section>

          <section className="repository-list">
            <div className="repository-list__header">
              <h2 className="repository-list__title">Репозитории</h2>
              <a href="https://github.com/defunkt?tab=repositories" className="link" target="_blank" rel="noreferrer">
                Все репозитории
              </a>
            </div>

            <div className="repository-list__container">
              {[1, 2, 3, 4, 5].map((item) => (
                <section className="repository-list__item" key={item}>
                  <h3 className="repository-list__item-title">
                    <a href="/" className="link">
                      body_matcher
                    </a>
                  </h3>
                  <p className="repository-list__item-text">Simplify your view testing. Forget assert_select.</p>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
