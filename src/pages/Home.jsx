import Navbar from "../components/navbar"
import Videos from "../components/videos"
function Home() {
  return (
    <div  className="w-full min-h-full flex items-start justify-start" >
      <Navbar className="w-[15%]"/>
      <Videos  className='w-[85%]'/>
    </div>
  )
}

export default Home
