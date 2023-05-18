import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/App/index';

// const Heading = styled.h1`
//   color: purple;
// `;

// export const Container = styled.div`
//   background: ${({ theme }) => theme.colors.primaryColor};

//   ${({ theme }) => css`
//     color: ${theme.color.white};
//   `}
// `;

// export const Container2 = styled(Container).attrs({ as: 'article' })`
//   background-color: 'blue';

//   ${Heading}:hover {
//     color: yellow;
//   }
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
