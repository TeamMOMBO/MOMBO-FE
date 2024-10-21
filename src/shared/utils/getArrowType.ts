import { RiskLevel } from '../types/ingredient';

export const getArrowStyles = (resultLevel: RiskLevel) => {
  switch (resultLevel) {
    case 'high':
      return {
        positionClass: 'top-27 right-12 rotate-[50deg]',
        colorClass: 'fill-[#EE5E56]',
      };
    case 'middle':
      return {
        positionClass: '-top-14 left-1/2 -translate-x-1/2',
        colorClass: 'fill-[#FFF07D]',
      };
    case 'low':
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
