import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import Page404 from './pages/page404';
import Header from './components/Header';
import Container from './components/Container/Index';
import Footer from './components/Footer';
import PageBase from './pages/PageBase';

function AppRoutes() {
  return ( 
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<PageBase />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
   );
}

export default AppRoutes;