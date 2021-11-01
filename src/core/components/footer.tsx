import Image from 'next/image';
import {useRouter} from 'next/router';
import {getI18nText} from '@core/helpers/get-i18n-text';
import CONSTANTS from '@core/constants.json';
import SITE_I18N_TEXT from '@locales/site.json';

const {SITE_AUTHOR, SITE_AUTHOR_LINK, VERSION} = CONSTANTS;

export const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <footer className='flex flex-col text-sm p-2'>
      <span className='font-semibold'>
        {getI18nText(SITE_I18N_TEXT, 'VERSION', router)}: {VERSION}
      </span>
      <a href={SITE_AUTHOR_LINK} target='_blank' rel='noopener noreferrer' className='block'>
        <span>{getI18nText(SITE_I18N_TEXT, 'CREATED_BY', router)}</span>
        <span className='mx-2'>
          <Image src='/icons/tqt-icon.svg' alt='TQT Logo' width={15} height={15} />
        </span>
        <span> {SITE_AUTHOR}.</span>
      </a>
    </footer>
  );
};
