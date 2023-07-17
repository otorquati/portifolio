import Container from '../../components/Container/Index';
import Header from '../../components/Header';

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <h2>Algo de errado não está certo</h2>
        <div>
          <span>404</span> <br/>
          <strong>Página Não Localizada</strong>
        </div>
      </Container>
    </>
   );
}

export default Page404;