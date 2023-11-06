import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Navbar } from './Components/Navbar';
import { Chart1 } from './Components/Chart1';
import { Chart2 } from './Components/Chart2';
import { Chart3 } from './Components/Chart3';
import { Chart4 } from './Components/Chart4';


const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#000',
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif"
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Sidebar />
        <Box sx={{
          padding: '0 2rem', marginLeft: '270px', marginRight: '60px',
          marginTop: '94px', display: 'grid', justifyItems: 'stretch',
          justifyContent: 'space-evenly', alignItems: 'center',
          gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '2rem'
        }}>
          <Chart1 />
          <Chart2 />
          <Chart3 />
          <Chart4 />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
