// Constants
import { SIGN_DOLLAR } from '../constants';

// Services
import { PricingService } from '../services/pricing';

// Utils
import { formatNumber } from '../utils/formatNumbers';

const pricingResponse = await PricingService.getAllStreamingServicesPricing();
const price = pricingResponse[0].price;
const formatedPrice = formatNumber(price);

export function PriceText() {
  return (
    <p className='text-end text-xl'>{`${SIGN_DOLLAR} ${formatedPrice}`}</p>
  );
}
