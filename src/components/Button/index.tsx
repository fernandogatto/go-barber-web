import React, { ButtonHTMLAttributes } from 'react';

import { Container, Loading } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
};

const Button:React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <Container type="button" {...props}>
    {loading ? <Loading /> : children}
  </Container>
);

export default Button;
