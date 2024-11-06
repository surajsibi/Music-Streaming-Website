import { Outlet } from 'react-router-dom'
import './App.css'
import { LeftSide, Header, RightSide } from './index'
import { switcher } from './store/hamburgerSlice'
import { useSelector } from 'react-redux'


function App() {
  const leftStatus = useSelector((state) => state.hamburger.leftStatus)




  return (
    <div >
      <header className='sm:min-h-[10vh] fixed w-[100vw]'><Header /></header>
      <div className='grid grid-cols-2'>
        <aside className={`border border-gray-600  fixed sm:h-[89vh] rounded-lg sm:top-[11%]  ${leftStatus ? "sm:w-[16vw]" : "sm:w-[6vw]"}`}><LeftSide /></aside>
        <main className={` z-[-1] scrollbar overflow-y-scroll sm:top-[11%] sm:min-h-[89vh] ${leftStatus ? "sm:w-[84vw] absolute left-[16%]" : "sm:w-[94vw] absolute left-[6%]"}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
