enum ResultLevelType {
  high = 1,
  middle = 2,
  low = 3,
}

export const getArrowStyles = (resultLevel: ResultLevelType) => {
  switch (resultLevel) {
    case ResultLevelType.high:
      return {
        positionClass: 'top-27 right-12 rotate-[50deg]',
        colorClass: 'fill-[#EE5E56]',
      };
    case ResultLevelType.middle:
      return {
        positionClass: '-top-14 left-1/2 -translate-x-1/2',
        colorClass: 'fill-[#FFF07D]',
      };
    case ResultLevelType.low:
      return {
        positionClass: 'top-27 left-10 -rotate-[50deg]',
        colorClass: 'fill-[#CECECE]',
      };
    default:
      return {
        positionClass: 'left-[85%] rotate-45',
        colorClass: 'fill-[#EE5E56]',
      };
  }
};
