export async function addToMetamask(address: string, symbol: string, decimals: number, image?: string) {
  try {
    if ((window as any).ethereum) {
      await (window as any).ethereum.request({
        method: 'wallet_watchAsset',
        params: { type: 'ERC20', options: { address, symbol, decimals, image } }
      });
    }
  } catch (error: any) {
    console.log(error);
  }
}
