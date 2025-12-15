import './me.css'
import Main from "./me/main.tsx"
import Header from "./components/header.tsx"
import Footer from "./components/footer.tsx"
function Me() {
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

export default Me
