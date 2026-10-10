import  Hero  from '../../components/hero/Hero';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export const Home = () => {
  useDocumentTitle('Inicio | TECHZ');

  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;