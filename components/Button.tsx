import React from 'react';
import styled from 'styled-components';

interface IButton {
  bg?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  width?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  height?: string;
  border?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  hoverBg?: string;
  hoverColor?: string;
  label?: string;
  icon?: any;
  className?: any;
  onClick?: any;
}

const StyledButton = styled.button<IButton>`
  background: ${(props) => (props.bg ? props.bg : '#000')};
  color: ${(props) => (props.color ? props.color : '#000')};
  border: ${(props) => (props.border ? props.border : 'none')};
  padding: ${(props) => (props.padding ? props.padding : '10px 20px;')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '5px'};
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : '')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '15px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  height: ${(props) => (props.height ? props.height : '')};
  transition: all 300ms ease-out;
  .icon {
    font-size: 20px;
    padding-right: 5px;
  }

  &:hover {
    transition: all 300ms ease-out;
    background: ${({ hoverBg }) => hoverBg || ''};
    color: ${({ hoverColor }) => hoverColor || ''};
  }
`;
const Button = ({ icon, label, ...children }: IButton) => {
  return (
    <>
      <StyledButton {...children}>
        <span>{icon}</span>
        <span>{label}</span>
      </StyledButton>
    </>
  );
};

export default Button;
