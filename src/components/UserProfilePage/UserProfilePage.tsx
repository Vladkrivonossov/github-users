import React, { FC, useEffect, useState } from 'react';
import './UserProfilePage.css';
import { useLocation } from 'react-router-dom';
import { IRepos, IUser } from '../../types';
import { pluralize } from '../../helpers';

export const UserProfilePage: FC = () => {
  const [user, setUser] = useState<IUser>();
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`https://api.github.com${pathname}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [pathname]);

  useEffect(() => {
    fetch(`${user?.repos_url}`)
      .then((res) => res.json())
      .then((res) => setRepos(res.slice(0, 6)))
      .then(() => setLoading(true));
  }, [user]);

  return (
    <>
      <main>
        <div className="container">
          <section className="user-profile">
            <div className="user-profile__image-container">
              <img
                className="user-profile__image"
                src={user?.avatar_url}
                alt={`${user?.name ?? user?.login} profile photo`}
              />
            </div>
            <div className="user-profile__content">
              <h1 className="user-profile__title">
                {user?.name}, <span className="user-profile__accent">{user?.login}</span>
              </h1>
              <p className="user-profile__text">
                · <span className="user-profile__accent">{user?.followers}</span>
                {pluralize(user?.followers || 0, ['подписчик', 'подписчика', 'подписчиков'])} ·{' '}
                <span className="user-profile__accent">{user?.following}</span>
                {pluralize(user?.following || 0, ['подписка', 'подписки', 'подписок'])}
                <a href={user?.html_url} className="link">
                  {user?.html_url}
                </a>
              </p>
            </div>
          </section>

          <section className="repository-list">
            <div className="repository-list__header">
              <h2 className="repository-list__title">Репозитории</h2>
              <a
                href={`https://github.com/${user?.login}?tab=repositories`}
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Все репозитории
              </a>
            </div>

            {loading ? (
              <div className="repository-list__container">
                {repos.map((repo) => (
                  <section className="repository-list__item" key={repo.id}>
                    <h3 className="repository-list__item-title">
                      <a href={`${repo.html_url}`} className="link">
                        {repo.name}
                      </a>
                    </h3>
                    <p className="repository-list__item-text">{repo.description}</p>
                  </section>
                ))}
              </div>
            ) : (
              <h1>Загрузка...</h1>
            )}
          </section>
        </div>
      </main>
    </>
  );
};
