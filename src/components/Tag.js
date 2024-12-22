import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//By process we can access env file   
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const[tag,settag] = useState('');

  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler(tag) {
      fetchData();
  }

  function changeHandler(event) {
    settag(event.target.value);
  }
  
  return (

    <div className='w-1/2 bg-blue-500  rounded-lg border border-black
    flex flex-col items-center gap-y-5'>

      <h1 className='mt-[20px] text-2xl underline uppercase font-bold'>
      Random {tag} GIF
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      
      <input
        className='w-10/12 bg-slate-200 rounded-lg text-lg py-2 mb-[6px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button 
      className='w-10/12 bg-slate-200 rounded-lg text-lg py-2 mb-[12px]'
      onClick={clickHandler}>
        Generate
      </button>

    </div>
  )
}

export default Tag 