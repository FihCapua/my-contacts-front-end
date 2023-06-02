import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
} from './style';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Loader } from '../../components/Loader';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line max-len
  const filteredSearchTheme = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [orderBy]);

  console.log('renderizei');

  const handleToggleOrder = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar pelo nome..."
          onChange={handleSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredSearchTheme.length}
          {filteredSearchTheme.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new-contact">Novo Contato</Link>
      </Header>

      {filteredSearchTheme.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrder}>
            Nome
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </ListHeader>
      )}

      {filteredSearchTheme.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>
              (11)
              {' '}
              {contact.phone}
            </span>
          </div>

          <div className="actions">
            <Link to={`/edit-contact/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
