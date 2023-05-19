import PropTypes from 'prop-types';
import { Container, Footer, Overlay } from './style';

import Button from '../Button';

export function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>

        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-btn">Cancelar</button>

          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
