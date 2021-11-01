import {useRouter} from 'next/router';
import type {MenuItem} from '@core/interfaces';
import {Nav} from './nav';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'TAB_DASHBOARD',
    href: '/',
    current: false,
    icon: 'template',
  },
  {
    key: 'TAB_FAVORITES',
    href: '/favorites',
    current: false,
    icon: 'heart',
  },
  {
    key: 'TAB_INSPECTOR',
    href: '/inspector',
    current: false,
    icon: 'search-circle',
  },
  {
    key: 'TAB_ACCOUNT',
    href: '/account',
    current: false,
    icon: 'currency-dollar',
  },
  {
    key: 'TAB_SETTINGS',
    href: '/settings',
    current: false,
    icon: 'cog',
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
      <main className='p-1 pb-10 flex-1'>{children}</main>
    </div>
  );
};
