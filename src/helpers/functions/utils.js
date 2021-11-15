import icBitCoin from '@/assets/icons/btc.png';
import icETH from '@/assets/icons/eth.png';
import icBNB from '@/assets/icons/bnb.png';
import icUSDT from '@/assets/icons/usdt.png';
import icSOL from '@/assets/icons/sol.png';
import icADA from '@/assets/icons/ada.png';
import icXRP from '@/assets/icons/xrp.png';
import icBCH from '@/assets/icons/bch.png';
import icLUNA from '@/assets/icons/luna.png';
import icLTC from '@/assets/icons/ltc.png';
import icLINK from '@/assets/icons/link.png';
import icDOGE from '@/assets/icons/doge.png';

export const rateImages = {
  BTC: icBitCoin,
  ETH: icETH,
  BNB: icBNB,
  USDT: icUSDT,
  SOL: icSOL,
  ADA: icADA,
  XRP: icXRP,
  BCH: icBCH,
  LUNA: icLUNA,
  LTC: icLTC,
  LINK: icLINK,
  DOGE: icDOGE
};

export const handlePixels = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

export const convertToNumber = textNumber =>
  textNumber ? parseFloat(textNumber.replace(',', '.')) : 0;

export const numberFormat = value =>
  new Intl.NumberFormat('en-US', {
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
