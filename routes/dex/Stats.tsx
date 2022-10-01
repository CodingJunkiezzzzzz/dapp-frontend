import React from 'react';

export default function Stats() {
  return (
    <div className="flex justify-center items-center gap-4 flex-col px-[10px] w-full">
      {/* <div className="flex gap-2 overflow-auto justify-center items-center px-[10px]">
        <div className="flex flex-col max-w-[200px] border-[#ffeb82] border-[1px] bg-[#000000]/50 px-[8px] text-[#fff] py-[8px] rounded-[15px] justify-center items-center">
          <FiDollarSign className="text-[50px]"/>
          <span className="text-[30px]">$240B</span>
          <span className="text-[20px]">TVL</span>
        </div>

        <div className="flex flex-col max-w-[200px] border-[#ffeb82] border-[1px] bg-[#000000]/50 px-[8px] text-[#fff] py-[8px] rounded-[15px] justify-center items-center">
          <RiExchangeDollarLine className="text-[50px]"/>
          <span className="text-[30px]">$200B</span>
          <span className="text-[20px]">VOLUME (24H)</span>
        </div>

        <div className="flex flex-col max-w-[200px] border-[#ffeb82] border-[1px] bg-[#000000]/50 px-[8px] text-[#fff] py-[8px] rounded-[15px] justify-center items-center">
          <FaExchangeAlt className="text-[50px]"/>
          <span className="text-[30px]">2000</span>
          <span className="text-[20px]">TXS (24H)</span>
        </div>
      </div> */}
      <div className="flex flex-col justify-start items-start w-full md:w-[700px]">
        <span className="font-[700] text-[20px] text-[#fff] text-left">Top Tokens</span>
        <div className="artboard artboard-horizontal bg-[#161525]/70 px-[2px] rounded-[20px] overflow-auto py-[8px] shadow-lg md:h-[400px]">
          <div className="table w-full border-collapse">
            <div className="table-header-group w-full h-[50px]">
              <div className="table-row text-primary w-full font-[800] space-x-4 uppercase">
                <div className="table-cell text-left">#</div>
                <div className="table-cell text-left">Name</div>
                <div className="hidden md:table-cell text-center">Price</div>
                <div className="hidden md:table-cell text-center">Price Change</div>
                <div className="table-cell text-center">Volume 24H</div>
                <div className="hidden md:table-cell text-center">Liquidity</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row text-[#fff] py-4 h-[50px]">
                <div className="table-cell text-left font-[600]">1</div>
                <div className="table-cell text-left">
                  <div className="flex justify-start items-center gap-2 py-1">
                    <img src="/images/vefi.png" alt="vefi_logo" className="rounded-[50px] w-[20px] h-[20px]" />
                    <div className="flex justify-start items-center px-2">
                      <span className="font-[600] text-[20px]">Vefi Ecosystem Token</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">$400</span>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">0.02</span>
                </div>
                <div className="table-cell text-center">
                  <span className="font-[600] text-[20px]">$400B</span>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">$20B</span>
                </div>
              </div>
              <div className="table-row text-[#fff] h-[50px]">
                <div className="table-cell text-left font-[600]">2</div>
                <div className="table-cell text-left">
                  <div className="flex justify-start items-center gap-2 py-1">
                    <img src="/images/brise.png" alt="brise_logo" className="rounded-[50px] w-[20px] h-[20px]" />
                    <div className="flex justify-start items-center px-2">
                      <span className="font-[600] text-[20px]">Wrapped Brise</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">$400</span>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">0.02</span>
                </div>
                <div className="table-cell text-center">
                  <span className="font-[600] text-[20px]">$400B</span>
                </div>
                <div className="hidden md:table-cell text-center">
                  <span className="font-[600] text-[20px]">$20B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full md:w-[700px]">
        <span className="font-[700] text-[20px] text-[#fff]">Top Pools</span>
        <div className="artboard artboard-horizontal bg-[#161525]/70 px-[2px] rounded-[15px] overflow-auto py-[8px] shadow-lg md:h-[400px]">
          <div className="table w-full border-collapse">
            <div className="table-header-group w-full h-[50px]">
              <div className="table-row text-primary w-full font-[800] uppercase gap-3">
                <div className="table-cell text-left">#</div>
                <div className="table-cell text-left">Pool</div>
                <div className="table-cell text-center">Volume 24H</div>
                <div className="hidden md:table-cell text-center">Volume 7D</div>
                <div className="hidden md:table-cell text-center">Volume 30D</div>
                <div className="hidden md:table-cell text-center">Liquidity</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row text-[#fff] h-[50px]">
                <div className="table-cell text-center">1</div>
                <div className="table-cell text-center">BRISE/VEF</div>
                <div className="table-cell text-center">$400</div>
                <div className="hidden md:table-cell text-center">2%</div>
                <div className="hidden md:table-cell text-center">$400BN</div>
                <div className="hidden md:table-cell text-center">$20BN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
