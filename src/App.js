import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>My Contacts</h1>
    </ThemeProvider>
  );
}

export default App;
