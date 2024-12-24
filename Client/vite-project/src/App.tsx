import './App.css'
import Layout from '../src/Layout/Layout'
import AppRoute from '../src/Routers/AppRoute'


function App() {

  return (
    <>
  
    <Layout children={<AppRoute/>}/>
 
  
    </>
  )
}

export default App
