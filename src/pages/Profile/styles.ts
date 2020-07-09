import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  header {
    background: #23262e;
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    div {
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;

      a {
        svg {
          color: #999591;
          transition: color .2s;

          &:hover {
            color: ${shade(.2, '#999591')};
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -140px auto 0;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color .2s;

      &:hover {
        color: ${shade(.2, '#f4ede8')};
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const Avatar = styled.div`
  margin: auto;
  margin-bottom: 36px;
  position: relative;
  width: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #ff9000;
    transition: background .2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(.2, '#ff9000')};
    }

    svg {
      height: 20px;
      width: 20px;
      color: #312e38;
    }
  }
`;
