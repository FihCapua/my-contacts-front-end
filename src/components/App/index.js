import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';

import defaultTheme from '../../styles/themes/default';
import { Container } from './style';
import { Header } from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        Olá mundo!
      </Container>
    </ThemeProvider>
  );
}

export default App;
