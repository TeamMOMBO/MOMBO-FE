// 글자수 체크
export const maxLenRegExp = (maxLen: number) => new RegExp(`^.{0,${maxLen}}$`);

// 모든 공백 체크
export const whiteSpaceRegExp = /\s/g;

// 모든 특수문자 체크
export const specialCharRegExp =
  /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
