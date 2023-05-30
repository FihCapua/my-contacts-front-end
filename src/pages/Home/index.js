import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
} from './style';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(contacts);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new-contact">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </header>

        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small> }
              </div>
              <span>{contact.email}</span>
              <span>
                (11)
                {' '}
                {contact.phone}
              </span>
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
        ))}
      </ListContainer>
    </Container>
  );
}
