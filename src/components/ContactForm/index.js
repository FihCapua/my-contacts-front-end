import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import { ButtonContainer, Form } from './style';

import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { useErrors } from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

export function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategory(categoriesList);
      } catch {} finally {
        setIsLoadingCategory(false);
      }
    }

    loadCategories();
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido' });
    } else {
      removeError('email');
    }
  };

  const handleChangePhone = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  const disabledButtonField = (name && errors.length === 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name,
      email,
      phone,
      categoryId,
    });
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          maxLength={15}
          onChange={handleChangePhone}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategory}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategory}
        >
          <option value="sem categoria">Sem categoria</option>
          {category.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!disabledButtonField}>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
