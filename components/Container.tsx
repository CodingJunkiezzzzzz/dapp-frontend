import styled from 'styled-components';
interface IContainer {
  maxWidth?: string;
  children?: any;
}

const ContainerWrapper = styled.div<IContainer>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  margin-left: auto;
  margin-right: auto;
`;
const Container = ({ children, maxWidth }: IContainer) => {
  return (
    <>
      <ContainerWrapper maxWidth={maxWidth}>{children}</ContainerWrapper>
    </>
  );
};

export default Container;
