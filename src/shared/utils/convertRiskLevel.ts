import { RiskLevel } from '../types/ingredient';

export const convertRiskLevel = (riskLevel: RiskLevel) => {
  switch (riskLevel) {
    case 'high':
      return '매우 위험';
    case 'middle':
      return '위험';
    case 'low':
      return '주의';
    default:
      return '분석 불가';
  }
};
