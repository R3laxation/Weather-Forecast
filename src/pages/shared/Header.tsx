import React from 'react';

import Select from 'react-select';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

import s from './Header.module.scss';

export const Header = () => {
  const options = [
    { value: 'city-1', label: 'Нур-Султан' },
    { value: 'city-2', label: 'Минск' },
    { value: 'city-3', label: 'Санкт-Петербург' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme}>
          <GlobalSvgSelector id="changeThemeLogo" />
        </div>
        <GlobalSvgSelector id="header-logo" />
        <Select styles={colorStyles} options={options} defaultValue={options[0]} />
      </div>
    </header>
  );
};
