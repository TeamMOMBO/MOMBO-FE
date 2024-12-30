import { maxLenRegExp, whiteSpaceRegExp, specialCharRegExp } from './regex';

export const nickNameValidator = (value: string) => {
  return (
    maxLenRegExp(8).test(value) &&
    !whiteSpaceRegExp.test(value) &&
    !specialCharRegExp.test(value)
  );
};
