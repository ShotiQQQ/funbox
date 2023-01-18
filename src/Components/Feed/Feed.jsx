import React from 'react';
import s from './feed.module.scss';
import Container from "../Container/Container";
import Title from "./Title/Title";
import Card from "./Card/Card";

const Feed = () => {
  return (
    <section className={s.feed}>
      <Container>
        <div className={s.container}>
          <Title />
          <ul className={s.list}>
            <Card category='фуа-гра' portions='10' present='мышь' weight='0,5' descr='Печень утки разварная с артишоками.' />
            <Card category='рыбой' portions='40' present='2' weight='2' descr='Головы щучьи с чесноком да свежайшая сёмгушка.' />
            <Card category='курой' portions='100' present='5' satisfied weight='5' descr='Филе из цыплят с трюфелями в бульоне.' disabled />
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Feed;