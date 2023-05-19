import { styled } from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  background: #FFF;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-btn {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
