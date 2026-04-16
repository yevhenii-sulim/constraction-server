'use client';
import {useState} from 'react';
import css from './navigation.module.css';
import NavMobile from '@/components/navMobile';
import NavDesktop from '@/components/navDesktop';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const topLine = isOpen ? `${css.burgerLine} ${css.topLine}` : css.burgerLine;
  const middleLine = isOpen
    ? `${css.burgerLine} ${css.middleLine}`
    : css.burgerLine;
  const bottomLine = isOpen
    ? `${css.burgerLine} ${css.bottomLine}`
    : css.burgerLine;

  return (
    <div className={css.container}>
      <div className='box'>
        <header className={css.header}>
          <button
            className={css.burger}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p className={topLine}></p>
            <p className={middleLine}></p>
            <p className={bottomLine}></p>
          </button>
        </header>
        <NavDesktop />
        <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
