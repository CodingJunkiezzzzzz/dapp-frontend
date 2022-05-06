import { Header } from './index';
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
