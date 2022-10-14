import { ListingModel } from '../../api/models/dex';
import { fetchTokenBalanceForConnectedWallet } from '../../hooks/dex';

type TokensListItemProps = {
  onClick: () => void;
  disabled: boolean;
  model: ListingModel;
};

export default function TokensListItem({ onClick, disabled, model }: TokensListItemProps) {
  const balance = fetchTokenBalanceForConnectedWallet(model);
  return (
    <button disabled={disabled} onClick={onClick} className="flex justify-center items-start px-0 w-full overflow-auto font-poppins">
      <div className="bg-[#161525]/[.6] rounded-tr-[15px] w-[60px] h-full p-0 flex flex-col">
        <div className={`${disabled ? 'bg-black/[.7]' : 'bg-transparent'} w-full flex justify-center py-4 px-2`}>
          <div className="bg-white w-[30px] h-[30px] rounded-[50px] flex justify-center">
            <img src={model.logoURI} alt={model.symbol} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-0 h-full">
        <div className="flex justify-between w-full items-center bg-transparent text-[#dcdcdc] px-[8px]">
          <div className="flex flex-col justify-between gap-1">
            <span className="font-[700] text-[25px] uppercase">{model.symbol}</span>
            <span className="font-[500] text-[14px]">{model.name}</span>
          </div>
          <span className="text-[16px]">{balance}</span>
        </div>
      </div>
    </button>
  );
}
