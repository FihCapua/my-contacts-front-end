import { createPortal } from 'react-dom';
import { Overlay } from './style';

export function Loader() {
  return (
    <section>
      {createPortal(
        <Overlay>
          <div className="loader" />
        </Overlay>,
        document.getElementById('loader-root'),
      )}
    </section>
  );
}
