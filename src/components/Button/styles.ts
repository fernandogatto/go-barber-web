import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  padding:  16px;
  height: 56px;
  width: 100%;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  transition: background .2s;

  &:hover {
    background: ${shade(.2, '#ff9000')};
  }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid #312e38;
    border-color: #312e38 transparent #312e38 transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
