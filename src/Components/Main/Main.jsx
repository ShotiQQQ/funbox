import React from 'react';
import Feed from "../Feed/Feed";
import s from './main.module.scss';

const Main = () => {
  return (
    <main className={s.main}>
        <Feed />
    </main>
  );
};

export default Main;