import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';

import defaultTheme from '../../styles/themes/default';
import { Container } from './style';
import { Header } from '../Header';
import { ContactsList } from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
