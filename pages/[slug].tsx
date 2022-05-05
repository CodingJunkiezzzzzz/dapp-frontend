import { usePageQuery } from '../hooks';

const Index = () => {
  const { slug } = usePageQuery();

  return (
    <>
      {slug === 'swap' ? (
        <>
          <h1>Swap Page</h1>
        </>
      ) : (
        <>
          <h1>Liquidity Page</h1>
        </>
      )}
    </>
  );
};

export default Index;
