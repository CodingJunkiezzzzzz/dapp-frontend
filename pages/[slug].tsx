import { Container, Layout, ToggleBtn } from '../components';
import { usePageQuery } from '../hooks';
import Swap from '../routes/app/Swap';
import { LayoutWrapper } from '../styles/GlobalStyle';
import { useState } from 'react';

const Index = () => {
  const { slug } = usePageQuery();
  const [clicked, setClicked] = useState(false);

  function onChange(checked: boolean) {
    setClicked(checked);
    console.log(`switch to ${clicked}`);
  }

  return (
    <>
      <Layout>
        <LayoutWrapper>
          <ToggleBtn />
          <Container maxWidth="400px">
            {slug === 'swap' || slug === '/' ? (
              <>
                <Swap />
              </>
            ) : (
              <>
                <h1>Liquidity Page</h1>
              </>
            )}
          </Container>
        </LayoutWrapper>
      </Layout>
    </>
  );
};

export default Index;
