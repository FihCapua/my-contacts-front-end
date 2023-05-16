import { Container, InputSearchContainer } from './style';

import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width={200} />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
