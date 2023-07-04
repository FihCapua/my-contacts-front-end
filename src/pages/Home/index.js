/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable-next-line max-len */
/* eslint-disable no-nested-ternary */

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  ErrorContainer,
  EmptyListContainer,
} from './style';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';

import { Loader } from '../../components/Loader';
import Button from '../../components/Button';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredSearchTheme = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleToggleOrder = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTryAgain = () => {
    fetchData();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquisar pelo nome..."
            onChange={handleSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifycontent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        }
        haserror={hasError.toString()}
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredSearchTheme.length}
            {filteredSearchTheme.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new-contact">Novo Contato</Link>
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="sad" />
        <div className="details">
          <strong>Ocorreu um erro ao obter seus contatos!</strong>
          <Button type="button" onClick={handleTryAgain}>Tentar novamente</Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>&ldquo;Novo contato &rdquo;</strong> à cima
                para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}
          {filteredSearchTheme.length > 0 && (
          <ListHeader orderby={orderBy}>
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
        </>
      )}
    </Container>
  );
}
