
import { Navbar } from './components/NavBar/Navbar'
import  { Title } from './components/Title/Title'
import { Section } from './components/ProductsSection/Section'

function App() {
  console.log('render')
  return (
    <>
    <Navbar/>
    <Title/>
    <Section/>
    </>
  );
}

export default App;
