import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Seo} from '@core/components/seo';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';

export const Account: NextPage = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Seo />
      <div>{getI18nText(SITE_I18N_TEXT, 'TAB_ACCOUNT', router)}</div>
    </>
  );
};
