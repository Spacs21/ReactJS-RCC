import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <>
    <main className='bg-[#14110E]'>
      <Header/>
      <Home/>
      <Footer/>
    </main>
    </>
  )
}

export default App
