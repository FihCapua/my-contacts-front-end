import PropTypes from 'prop-types';
import { Container } from './style';

export function FormGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
