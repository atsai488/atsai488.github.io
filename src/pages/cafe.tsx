import './cafe.css'
import Header from "./components/header.tsx"
import Footer from "./components/footer.tsx"
import Main from "./cafe/main.tsx"
function Cafe() {
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

export default Cafe
