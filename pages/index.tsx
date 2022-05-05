import type { NextPage } from 'next';
import { Layout } from '../components';
import GlobalStyle from '../styles/GlobalStyle';
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    </>
  );
};

export default Home;
