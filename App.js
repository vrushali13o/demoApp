import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {Provider as StoreProvider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';
import theme from './src/utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Navigation />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
