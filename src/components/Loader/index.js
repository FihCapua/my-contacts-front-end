import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import { Overlay } from './style';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

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

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
