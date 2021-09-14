import logo from './logo.svg';
import './App.css';


function Header(props){
  return <h1>
    Hello {props.name}
  </h1>
};
function Main(props)
{
  return <section>
    {props.content}
  </section>
};
function Footer(props)
{
  return <footer>Copy Right {props.year}</footer>
};
function App() {
  return (
    <div>
  <Header name="Deepak"/>
    <Main content="You can Change Any Content Here"/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  
  );
}

export default App;
