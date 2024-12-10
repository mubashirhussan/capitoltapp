export type IndustrySector =
  | 'communication-services'
  | 'consumer-discretionary'
  | 'consumer-staples'
  | 'energy'
  | 'financial'
  | 'health-care'
  | 'industrials'
  | 'information-technology'
  | 'materials'
  | 'real-estate'
  | 'utilities'
    | 'other';
  
    export interface MCapTier {
  id: number;
  min: number;
  max: number;
  display: string;
}
export type AssetType =
  | 'abs'
  | 'corporate-bond'
  | 'crypto'
  | 'etf'
  | 'etn'
  | 'futures'
  | 'hedge-pvt-eq-funds-non-eif'
  | 'indices'
  | 'municipal-security'
  | 'mutual-fund'
  | 'non-public-stock'
  | 'other-investment-fund'
  | 'other-securities'
  | 'ownership-interest'
  | 'preferred-shares'
  | 'private-equity-fund'
  | 'reit'
  | 'stock-appreciation-right'
  | 'stock-options'
  | 'stock'
  | 'variable-annuity'
  | 'venture-capital';

