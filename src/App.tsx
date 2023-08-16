import React from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ProductList from './components/ProductList';
import productsData from './data/products';
import theme from './theme';
import { ReactComponent as Logo } from './assets/buff-logo.svg';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline /> {/* Normalize the CSS */}
      <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
        <Toolbar>
        <Logo style={{ height: 50, marginRight: 16 }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>Dickson Fun Raiser</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography sx={{ paddingTop: '24px' }}>This is the Buff City Soap Dickson Fundraiser. 25% of all sales will go to the Dickson County High School Band! <strong>This fundraiser will end 10/31/2023.</strong>
</Typography>
      <Typography sx={{ paddingTop: '24px' }}>
        Please send your order to Ms. BandDirector 
        <strong> <a href="mailto:your_email@example.com">DCHSBAND</a> Thank you for your support!</strong></Typography>
      </Container>
      <Container sx={{ paddingTop: '24px' }}>
        <ProductList products={productsData} />
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
