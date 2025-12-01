import Main from "./blog/main.tsx"
import Header from "./components/header.tsx"
import Footer from "./components/footer.tsx"
function Blog() {
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

export default Blog
