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
    <ul>
      {
        dishObjects.map((dish)=> <li key={dish.id}>{dish.title}</li>)
      }
    </ul>
  </section>
};
function Footer(props)
{
  return <footer>Copy Right {props.year}</footer>
};
const dishes = ["Cheese",
"Vegetables","Tufu"]

const dishObjects = dishes.map((dish,i)=>({id:i,title:dish}))
function App() {
  return (
    <div>
  <Header name="Deepak"/>
    <Main content="You can Change Any Content Here" dishes={dishes}/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  
  );

}

export default App;
