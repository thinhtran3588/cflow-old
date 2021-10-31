/* eslint-disable max-len */
import clsx from 'clsx';

export interface LogoProps {
  className?: string;
}

const COLOR1 = '#EB5757';
const COLOR2 = '#F2994A';
const COLOR3 = '#6FCF97';
const COLOR4 = '#219653';

export const Logo = (props: LogoProps): JSX.Element => {
  const {className} = props;

  return (
    <>
      <svg className={className} viewBox='0 0 400 300' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M169.125 299.675V247.657C153.081 247.649 138.588 244.069 125.648 236.905C112.692 229.734 102.521 219.736 95.1345 206.903C91.9517 201.376 89.46 195.519 87.6499 189.338H107.594V137.107H87.595C89.4095 130.859 91.921 124.944 95.1345 119.361C102.521 106.533 112.692 96.5354 125.648 89.3636C138.588 82.2004 153.081 78.6153 169.125 78.6068V26.5294C140.903 26.5368 115.462 32.4484 92.8019 44.264C70.1271 56.0871 52.3803 72.3787 39.5561 93.1336C31.1753 106.691 25.5359 121.349 22.6315 137.107H0V189.338H22.666C25.5798 205.029 31.2076 219.63 39.5561 233.136C52.3803 253.89 70.1271 270.177 92.8019 282C115.476 293.824 140.936 299.735 169.179 299.735C170.797 299.735 172.404 299.713 174.002 299.675H169.125Z'
          fill='url(#paint0_linear_1:6)'
        />
        <path
          d='M219.065 300H196.874V247.769H272.863C272.863 276.615 248.777 300 219.065 300Z'
          fill='url(#paint1_linear_1:6)'
        />
        <path
          d='M324.19 26.442H295.724H196.874V78.6728H295.724C296.804 78.6835 297.868 78.6808 298.925 78.6728C310.731 78.5796 321.166 77.3173 330.382 75.1688C395.92 59.8933 400 -3.62308e-05 400 -3.62308e-05C394.962 20.1484 353.3 25.3188 324.19 26.442Z'
          fill='url(#paint2_linear_1:6)'
        />
        <path
          d='M289.412 137.105H263.279H196.874V189.336H263.279C264.27 189.347 265.247 189.345 266.217 189.336C276.008 189.252 284.769 188.212 292.607 186.429C355.162 172.195 359.013 110.664 359.013 110.664C354.388 130.812 316.138 135.982 289.412 137.105Z'
          fill='url(#paint3_linear_1:6)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1:6'
            x1='0'
            y1='299.735'
            x2='247.579'
            y2='142.055'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={COLOR1} />
            <stop offset='1' stopColor={COLOR2} />
          </linearGradient>
          <linearGradient
            id='paint1_linear_1:6'
            x1='196.874'
            y1='300'
            x2='245.637'
            y2='229.056'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={COLOR3} />
            <stop offset='1' stopColor={COLOR4} />
          </linearGradient>
          <linearGradient
            id='paint2_linear_1:6'
            x1='196.874'
            y1='78.6799'
            x2='249.874'
            y2='-58.1504'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={COLOR3} />
            <stop offset='1' stopColor={COLOR4} />
          </linearGradient>
          <linearGradient
            id='paint3_linear_1:6'
            x1='196.874'
            y1='189.344'
            x2='258.68'
            y2='61.9766'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={COLOR3} />
            <stop offset='1' stopColor={COLOR4} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
