import React, { FC, FormEvent, useState } from 'react';
import './Header.css';
import { Link, matchPath, useLocation } from 'react-router-dom';

export const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { pathname } = useLocation();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchValue.trim().length) {
      return;
    }
  };

  const currentPage = () => {
    if (matchPath('/users/:id', pathname)) {
      return pathname.replace(/\/users\//, '');
    }

    if (matchPath('/search/*', pathname)) {
      return 'поиск';
    }

    return '';
  };

  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-list-item">
              <Link to="/" className="header__navigation-link">
                Пользователи гитхаба
              </Link>
            </li>
            <li className="header__navigation-list-item">
              <a className="header__navigation-link header__navigation-link--user">{currentPage()}</a>
            </li>
          </ul>
        </nav>

        <div className="header__search">
          <form className="header__search-form" onSubmit={onSubmit}>
            <input
              type="search"
              className="header__search-input"
              placeholder="Поиск пользователя"
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
            />
            <Link to={`/search/users?q=${searchValue}`}>
              <button onClick={() => setSearchValue('')} type="submit" className="header__search-button">
                Найти
              </button>
            </Link>
          </form>
        </div>
      </div>
    </header>
  );
};
