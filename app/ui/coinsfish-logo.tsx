import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function CoinsFishLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GlobeAltIcon className="h-8 w-8 rotate-[15deg] md:h-10 md:w-10" />
      <p className="text-3xl md:text-[38px]">CoinsFish</p>
    </div>
  );
}
