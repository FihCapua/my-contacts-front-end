import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;
