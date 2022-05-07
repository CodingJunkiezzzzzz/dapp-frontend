import { ConnectWallet } from '../../styles/GlobalStyle';
import ImageWrapper from '../Image';
const Network = ({ src, label, width, height, alt }: any) => {
  return (
    <ConnectWallet>
      <div className="wallet__logo">
        <ImageWrapper src={src} width={width} height={height} alt={alt} />
      </div>
      <div className="wallet__name">{label}</div>
    </ConnectWallet>
  );
};

export default Network;
