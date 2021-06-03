import './app.styles.scss'
import HomePage from './pages/home.page'
import ItemDirectory from './pages/shopping-item/shopping-item.container'
import { Route, Switch} from 'react-router-dom'
import Header from './components/header/header.component'


const HatsPage = () => {
  return (<div>Hats</div>)
}

function App() {
  return (
    <>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={HatsPage}/>
      <Route path="/shopping" component={ItemDirectory}/>
    </Switch>
    </>
  );
}

export default App;
