import React from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ProductList from './components/ProductList';
import productsData from './data/products';
import theme from './theme';
import { ReactComponent as Logo } from './assets/buff-logo.svg';


const App: React.FC = () => {
  const productsFromTemplate = JSON.parse('${{ values.products }}');
  const products = productsFromTemplate ?? productsData;
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline /> {/* Normalize the CSS */}
      <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
        <Toolbar>
        <Logo style={{ height: 50, marginRight: 16 }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            ${{ values.fundraiserName }}
            </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography sx={{ paddingTop: '24px' }}>
          <strong>${{ values.fundraiserHeadline }}</strong>
        </Typography>
        <Typography sx={{ paddingTop: '24px' }}>
          ${{ values.fundraiserInstructions }}
          <strong>This fundraiser ends ${{ values.endDate }}</strong>
        </Typography>
      </Container>
      <Container sx={{ paddingTop: '24px' }}>
        <ProductList products={products} />
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
