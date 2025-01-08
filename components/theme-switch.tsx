'use client';

import { FC } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import clsx from 'clsx';

interface IconProps {
  size?: number;
  className?: string;
}

const SunFilledIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 1.5V3.75'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 20.25V22.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.27148 4.27002L5.91148 5.91002'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.0885 18.09L19.7285 19.73'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1.5 12H3.75'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.25 12H22.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.27148 19.73L5.91148 18.09'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.0885 5.91002L19.7285 4.27002'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const MoonFilledIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.37873 21.4194C10.6537 21.8594 11.9337 22.0294 13.1682 21.9553C14.4027 21.8813 15.6139 21.5747 16.7487 21.0494C19.2787 19.8194 21.2087 17.5994 21.7487 14.9294C21.8787 14.2094 21.6987 14.1994 21.5287 15.9294Z'
      fill='currentColor'
    />
  </svg>
);

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === 'light' || isSSR,
    'aria-label': `Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'px-px cursor-pointer',
          '!bg-transparent data-[selected=true]:!bg-transparent',
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'rounded-lg',
              'flex items-center justify-center',
              'p-2',
              '!bg-violet-100 hover:!bg-violet-200 dark:!bg-violet-900/30 dark:hover:!bg-violet-900/50',
              '[&:not(:hover)]:!bg-violet-50 dark:[&:not(:hover)]:!bg-violet-900/20',
              'transition-colors',
              'font-bold',
              'data-[selected=true]:!bg-violet-100 data-[selected=true]:hover:!bg-violet-200',
              'dark:data-[selected=true]:!bg-violet-900/30 dark:data-[selected=true]:hover:!bg-violet-900/50',
              'group-data-[selected=true]:!bg-violet-100 group-data-[selected=true]:hover:!bg-violet-200',
              'dark:group-data-[selected=true]:!bg-violet-900/30 dark:group-data-[selected=true]:hover:!bg-violet-900/50',
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon
            size={20}
            className='text-violet-600 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-300 transition-transform duration-300 hover:rotate-45'
          />
        ) : (
          <MoonFilledIcon
            size={20}
            className='text-violet-600 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-300 transition-transform duration-300 hover:-rotate-12'
          />
        )}
      </div>
    </Component>
  );
};
