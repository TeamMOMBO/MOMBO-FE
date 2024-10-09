/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D8F6EA',
        'primary-light': '#15CA87',
        'primary-dark': '#04955F',
        secondary: '#DBF3FF',
        'secondary-light': '#13B3FE',
        'secondary-dark': '#028BCC',
        'semantic-red': '#F94721',
        'semantic-blue': '#3482F8',
        'neutral-100': '#FAFBFD',
        'neutral-200': '#F2F4F8',
        'neutral-300': '#E9EDF2',
        'neutral-400': '#C9CDD1',
        'neutral-500': '#A9ACB0',
        'neutral-600': '#898C8F',
        'neutral-700': '#696B6E',
        'neutral-800': '#4A4B4D',
        'neutral-900': '#2A2B2C',
      },
      fontSize: {
        'head-01': [
          '24px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        'head-02': [
          '20px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],

        'body-01': [
          '18px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-02': [
          '18px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-03': [
          '16px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-04': [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-05': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'body-06': [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
        'body-07': [
          '14px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-08': [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-09': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'body-10': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
        'body-11': [
          '13px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-12': [
          '13px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'caption-01': [
          '12px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'caption-02': [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'caption-03': [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
      },
    },
  },
  plugins: [],
};
