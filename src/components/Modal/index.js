import { Container, Footer, Overlay } from './style';

import Button from '../Button';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>

        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-btn">Cancelar</button>

          <Button>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
