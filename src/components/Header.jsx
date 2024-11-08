import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo, SearchBar, Button } from '../index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {switcher} from '../store/hamburgerSlice'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const status = useSelector((state)=> state.auth.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  let handleNavigate = ()=>{
    navigate('/home')
  }
  
  return (
    <div className='flex h-full border-gray-700 items-center  border-b-2'>
      <button onClick={()=>{
        dispatch(switcher())
      }}>
      <div className='hamburger sm:pl-[6%] '><FontAwesomeIcon icon={faBars} className='sm:text-[26px] sm:p-[15px_12px]' /></div>
      </button>
      <button className='logo border border-blue-600 sm:pl-[3%] font-extrabold h-auto' onClick={()=>{handleNavigate}}><Logo /></button>
      <div className='flex   items-center sm:ml-[13%] sm:p-[1%_0%] sm:my-[1%] sm:h-[3rem] border rounded-md sm:w-[31%]'>
        <div className='w-full sm:pl-2 items-cente'><SearchBar /></div>


      {status?<Button
        className='bg-blue-500 sm:left-[450px] relative flex rounded-[9px]'
        children="sa"
        />:<Button
        className='bg-blue-500 sm:ml-[466px]'
        children="SignUp"
        />}
      </div>
    </div>
  )
}

export default Header
