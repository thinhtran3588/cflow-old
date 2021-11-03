import {useRouter} from 'next/router';
import TemplateIcon from '@heroicons/react/outline/TemplateIcon';
import TemplateIconSolid from '@heroicons/react/solid/TemplateIcon';
import HeartIcon from '@heroicons/react/outline/HeartIcon';
import HeartIconSolid from '@heroicons/react/solid/HeartIcon';
import SearchCircleIcon from '@heroicons/react/outline/SearchCircleIcon';
import SearchCircleIconSolid from '@heroicons/react/solid/SearchCircleIcon';
import CurrencyDollarIcon from '@heroicons/react/outline/CurrencyDollarIcon';
import CurrencyDollarIconSolid from '@heroicons/react/solid/CurrencyDollarIcon';
import CogIcon from '@heroicons/react/outline/CogIcon';
import CogIconSolid from '@heroicons/react/solid/CogIcon';
import type {MenuItem} from '@core/interfaces';
import {Nav} from './nav';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'TAB_DASHBOARD',
    href: '/',
    current: false,
    icon: <TemplateIcon className='w-6 h-6' />,
    focusedIcon: <TemplateIconSolid className='w-6 h-6' />,
  },
  {
    key: 'TAB_FAVORITES',
    href: '/favorites',
    current: false,
    icon: <HeartIcon className='w-6 h-6' />,
    focusedIcon: <HeartIconSolid className='w-6 h-6' />,
  },
  {
    key: 'TAB_INSPECTOR',
    href: '/inspector',
    current: false,
    icon: <SearchCircleIcon className='w-6 h-6' />,
    focusedIcon: <SearchCircleIconSolid className='w-6 h-6' />,
  },
  {
    key: 'TAB_ACCOUNT',
    href: '/account',
    current: false,
    icon: <CurrencyDollarIcon className='w-6 h-6' />,
    focusedIcon: <CurrencyDollarIconSolid className='w-6 h-6' />,
  },
  {
    key: 'TAB_SETTINGS',
    href: '/settings',
    current: false,
    icon: <CogIcon className='w-6 h-6' />,
    focusedIcon: <CogIconSolid className='w-6 h-6' />,
  },
];

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const {children} = props;
  const router = useRouter();
  const menuItems: MenuItem[] = MENU_ITEMS.map((item) => ({...item, current: router.route === item.href}));

  return (
    <div
      className={`font-roboto min-h-screen max-h-screen 
        transition-all duration-700 bg-gray-200 dark:bg-gray-700 dark:text-white flex`}
    >
      <Nav menuItems={menuItems} />
      <main className='p-1 pb-10 flex-1'>
        <div className='w-full lg:container mx-auto'>{children}</div>
      </main>
    </div>
  );
};
