import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import { Overlay } from './style';
import { Spinner } from '../Spinner';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <section>
      {createPortal(
        <Overlay>
          <Spinner size={90} />
        </Overlay>,
        document.getElementById('loader-root'),
      )}
    </section>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
