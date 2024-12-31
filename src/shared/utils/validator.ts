import {
  maxLenRegExp,
  whiteSpaceRegExp,
  specialCharRegExp,
  numberOnlyRegExp,
} from './regex';

export const nickNameValidator = (value: string) => {
  return (
    maxLenRegExp(8).test(value) &&
    !whiteSpaceRegExp.test(value) &&
    !specialCharRegExp.test(value)
  );
};

export const pregnancyWeekValidator = (value: string | undefined) => {
  if (value === '' || value === undefined) return true;
  if (!numberOnlyRegExp.test(value)) return false;
  const week = parseInt(value, 10);
  return week >= 1 && week <= 40;
};
