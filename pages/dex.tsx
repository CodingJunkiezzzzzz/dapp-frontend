import React, { useState } from 'react';
import { Swap } from '../routes/dex';

enum Route {
  SWAP,
  LIQUIDITY
}

export default function Dex() {
  const [route, setRoute] = useState<Route>(Route.SWAP);
  return <div className="flex justify-center items-center my-32">{route === Route.SWAP && <Swap />}</div>;
}
