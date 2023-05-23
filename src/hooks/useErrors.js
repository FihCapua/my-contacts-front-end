import { useState } from 'react';

export const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const setError = ({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  };

  const removeError = (fieldName) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  };

  // eslint-disable-next-line max-len
  const getErrorMessageByFieldName = (fieldName) => errors.find((error) => error.field === fieldName)?.message;

  return { setError, removeError, getErrorMessageByFieldName };
};
