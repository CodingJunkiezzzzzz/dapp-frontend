import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { obtainLPDetailsFromPair } from '../../hooks/dex';
import { useWeb3Context } from '../../contexts/web3';
import { useAPIContext } from '../../contexts/api';

export default function UserLPItem({ pair }: any) {
  const { chainId, account } = useWeb3Context();
  const { tokensListingAsDictionary } = useAPIContext();
  const lpDetails = obtainLPDetailsFromPair(pair, chainId || 97, account as string);

  return (
    <li className="w-full">
      <div className="flex justify-evenly items-center gap-2 w-full">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-8">
              <img
                src={tokensListingAsDictionary[lpDetails.token0] ? tokensListingAsDictionary[lpDetails.token0].logoURI : ''}
                alt={lpDetails.token0}
              />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8">
              <img
                src={tokensListingAsDictionary[lpDetails.token1] ? tokensListingAsDictionary[lpDetails.token1].logoURI : ''}
                alt={lpDetails.token1}
              />
            </div>
          </div>
        </div>
        <span className="text-white font-poppins font-[16px]">
          {lpDetails.token0Symbol}/{lpDetails.token1Symbol}
        </span>
        <span className="text-white font-poppins font-[16px]">{lpDetails.accountBalance.toPrecision(4)}</span>
        <button className="btn btn-square bg-red-500">
          {' '}
          <FiTrash2 className="text-white" />{' '}
        </button>
      </div>
    </li>
  );
}
