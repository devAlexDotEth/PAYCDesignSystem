import { Container } from './styles';
// import Home from './compositions/home';
import Box from './components/box';
import Grid from './components/grid';
import PortalTemplateExternal from './compositions/portal-template-external';
// import PortalTemplateInternal from './compositions/portal-template-internal';
// import Portals from './compositions/portals';
// import Contact from './compositions/contact';
// import DesignSystem from './compositions/design-system';

function App() {
  
  return (
    <Container>
      {/* <Home /> */}
      {/* <Portals /> */}
      {/* <DesignSystem /> */}
      {/* <Contact /> */}

      {/* NOTE ONLY: Hosted on Vite */}

      <PortalTemplateExternal title="Frogtober" children={
        <Grid columns={1} localStyles={{
          gridTemplateColumns: 'repeat(2, 1fr);',
          padding: 'var(--scale-24)',
          '@media (min-width: 600px)' :{
            gridTemplateColumns: 'repeat(3, 1fr);',
          },
          '@media (min-width: 1000px)' :{
            gridTemplateColumns: 'repeat(4, 1fr);',
          },
        }}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box>
          <Box>7</Box>
        </Grid>
      }/>

      {/* NOTE ONLY: Hosted in our app */}

      {/* <PortalTemplateInternal title="Frogtober" children={
        <Grid columns={1} localStyles={{
          gridTemplateColumns: 'repeat(2, 1fr);',
          padding: 'var(--scale-24)',
          '@media (min-width: 600px)' :{
            gridTemplateColumns: 'repeat(3, 1fr);',
          },
          '@media (min-width: 1000px)' :{
            gridTemplateColumns: 'repeat(4, 1fr);',
          },
        }}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box>
          <Box>7</Box>
        </Grid>
      }/> */}
    </Container>
  );
}

export default App;
