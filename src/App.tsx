import { Container } from './styles';
import Home from './compositions/home';
// import PortalTemplateExternal from './compositions/portal-template-external';
// import PortalTemplateInternal from './compositions/portal-template-internal';
// import Portals from './compositions/portals';
// import Contact from './compositions/contact';
// import DesignSystem from './compositions/design-system';

function App() {
  
  return (
    <Container>
      <Home />
      {/* <Portals /> */}
      {/* <DesignSystem /> */}
      {/* <Contact /> */}

      {/* NOTE ONLY: Hosted on Vite */}
      {/* <PortalTemplateExternal /> */}

      {/* NOTE ONLY: Hosted in our app */}
      {/* <PortalTemplateInternal /> */}

    </Container>
  );
}

export default App;
