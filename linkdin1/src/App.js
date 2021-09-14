import logo from './logo.svg';
import './App.css';


function Header(){
  return <h1>
    I am Header
  </h1>
};
function Main()
{
  return <section>
    I am in Main
  </section>
};
function Footer()
{
  return <footer>I am Footer</footer>
};
function App() {
  return (
    <div>
  <Header/>
    <Main/>
    <Footer/>
    </div>
  
  );
}

export default App;
