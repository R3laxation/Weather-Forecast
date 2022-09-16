import React from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { WeatherType } from '../../../../store/types/types';

import s from './ThisDay.module.scss';

export const ThisDay = ({ weather }: ThisDayPropsType) => (
  <div className={s.thisDay}>
    <div className={s.topBlock}>
      <div className={s.topBlockWrapper}>
        <div className={s.currentTemp}>29</div>
        <div className={s.currentDay}>Сегодня</div>
      </div>
      <GlobalSvgSelector id="sun" />
    </div>
    <div className={s.bottomBlock}>
      <div className={s.currentTime}>
        Время: <span>21:00</span>{' '}
      </div>
      <div className={s.currentCity}>
        Город: <span>CityOfAngels</span>{' '}
      </div>
    </div>
  </div>
);

type ThisDayPropsType = {
  weather: WeatherType;
};
