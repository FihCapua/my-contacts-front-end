import { Link } from 'react-router-dom';
import {
  Card, Container, InputSearchContainer, Header, ListContainer,
} from './style';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Modal } from '../../components/Modal';

export function Home() {
  return (
    <Container>
      <Modal />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>ContactsList</strong>
        <Link to="/new-contact">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Fiama de Capua</strong>
              <small>instagram</small>
            </div>
            <span>email@emaildev.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit-contact/123">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
