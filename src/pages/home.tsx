import './home.css'
import Main from "./home/main.tsx"
import Header from "./components/header.tsx"
import Footer from "./components/footer.tsx"
function Home() {
  return (
    <>
    <div className='w-full h-full'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
