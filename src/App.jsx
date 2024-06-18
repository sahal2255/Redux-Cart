
import './App.css'
import ShopPage from './components/ShopPage'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
function App() {

  return (
    <Provider store={Store}>

      <div>
        <ShopPage />
      </div>
    </Provider>
  )
}

export default App
