import './app.styles.scss'
import HomePage from './pages/home.page'
import { Route, Switch} from 'react-router-dom'


const HatsPage = () => {
  return (<div>Hats</div>)
}

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={HatsPage}/>
    </Switch>
  );
}

export default App;
