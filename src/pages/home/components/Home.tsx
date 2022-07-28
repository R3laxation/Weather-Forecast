import React from 'react';

import s from './Home.module.scss';
import { ThisDay } from './thisDay/ThisDay';
import { ThisDayInfo } from './thisDayInfo/ThisDayInfo';

export const Home = () => (
  <div className={s.home}>
    <div className={s.wrapper}>
      <ThisDay />
      <ThisDayInfo />
    </div>
  </div>
);
