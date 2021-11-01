import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Fragment, useState} from 'react';
import type {MenuItem} from '@core/interfaces';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';
import {Icon} from './icon';
import {Logo} from './logo';
import {Footer} from './footer';

export interface NavProps {
  menuItems: MenuItem[];
}

export const Nav = (props: NavProps): JSX.Element => {
  const {menuItems} = props;
  const router = useRouter();
  const [expandMenu, setExpandVisible] = useState(true);

  const toggleExpandMenu = (): void => {
    console.log('toggle');
    setExpandVisible(!expandMenu);
  };

  return (
    <nav
      className={clsx(
        `fixed bottom-0 inset-x-0 flex shadow-2xl transition-all duration-1000
        bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700
        md:static md:flex-col md:border-t-0`,
        expandMenu ? 'md:w-56' : 'md:w-12',
      )}
    >
      <div className='hidden md:flex shadow-xl font-semibold text-xl h-12 p-2 justify-between items-center'>
        <Link href='/'>
          <a
            className={clsx(
              'flex items-center transition-all duration-1000 overflow-hidden',
              expandMenu ? 'w-40 opacity-100' : 'px-0 w-0 opacity-0',
            )}
            role='link'
            aria-hidden='true'
          >
            <span>
              <Logo className='h-6' />
            </span>
            <span className='ml-2 text-error dark:text-error-light'>C</span>
            <span className='text-success dark:text-success-light'>&nbsp;Flow</span>
          </a>
        </Link>
        <button
          type='button'
          title='Expand'
          className='flex justify-center items-center p-1'
          onClick={toggleExpandMenu}
        >
          <Icon name={expandMenu ? 'chevron-left' : 'chevron-right'} />
        </button>
      </div>
      {menuItems.map((item, index) => (
        <Fragment key={item.href}>
          <Link href={item.href}>
            <a
              className={clsx(
                `flex flex-col font-semibold flex-1 hover:bg-gray-100 dark:hover:bg-gray-600 md:flex-initial`,
                item.current ? `text-primary dark:text-primary-light` : ``,
              )}
              role='link'
              tabIndex={index}
              aria-hidden='true'
              title={getI18nText(SITE_I18N_TEXT, item.key, router)}
            >
              <span className='flex flex-col items-center md:flex-row px-0 py-2 md:px-3'>
                <span>
                  <Icon name={item.icon} className='w-6 h-6' type={item.current ? 'solid' : 'outline'} />
                </span>
                <span
                  className={clsx(
                    'text-xs md:ml-2 overflow-hidden transition-all duration-1000',
                    expandMenu ? 'md:w-40 opacity-100' : 'md:w-0 opacity-0',
                  )}
                >
                  {getI18nText(SITE_I18N_TEXT, item.key, router)}
                </span>
              </span>
            </a>
          </Link>
        </Fragment>
      ))}
      <div className='hidden md:flex flex-1 items-end'>
        <div
          className={clsx(
            'hidden md:block font-semibold text-xl h-12 transition-all duration-1000',
            expandMenu ? 'w-0 opacity-100' : 'w-full opacity-100 p-2',
          )}
        >
          <Link href='/'>
            <a className='flex items-center flex-1' role='link' aria-hidden='true'>
              <Image src='/icons/tqt-icon.svg' alt='TQT Logo' width={30} height={30} />
            </a>
          </Link>
        </div>
        <div
          className={clsx(
            'hidden md:block transition-all duration-1000 overflow-hidden',
            expandMenu ? 'w-full opacity-100' : 'w-0 opacity-0',
          )}
        >
          <Footer />
        </div>
      </div>
    </nav>
  );
};
