import { Container } from './style';

import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width={200} />
    </Container>
  );
}
