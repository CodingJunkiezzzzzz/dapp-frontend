import { Container, Footer, Layout, ToggleBtn } from '../components';
import { usePageQuery } from '../hooks';
import { Liquidity, Swap } from '../routes';

import { LayoutWrapper } from '../styles/GlobalStyle';

const Index = () => {
  const { slug } = usePageQuery();

  return (
    <>
      <Layout>
        <LayoutWrapper>
          <ToggleBtn />
          <div className="container"></div>
          <Container maxWidth="400px">
            {slug === 'swap' || slug === '/' ? (
              <>
                <Swap />
              </>
            ) : (
              <>
                <Liquidity />
              </>
            )}
          </Container>
          <Footer />
        </LayoutWrapper>
      </Layout>
    </>
  );
};

export default Index;
