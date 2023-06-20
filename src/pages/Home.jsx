
import React, { useRef } from 'react'
import { setTrainerNameG } from '../store/slices/trainerName.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const trainerNameRef=useRef()
    const navigate=useNavigate()

    // const{trainerName}=useSelector(states=>states)

    const dispatch=useDispatch()
    
    const handleSumit=(e)=>{
        e.preventDefault()
       dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
      navigate('/pokedex')
    }

    // console.log(trainerName)

  return (
    <div className='home'>
      <div><img className='img_home' src="../pokedex.png" alt="pokedex" /></div>
      {/* <h1 className='title_home'>P<span className='efect_o'>O</span>KEDEX</h1> */}
      <h2 className='hi_home'>Hi Trainer!</h2>
      <p className='parra_home'>To start in this application, please, give me your trainer name.</p>
      <form className='form_home' onSubmit={handleSumit}>
        <input className='input_home' ref={trainerNameRef} placeholder='Trainer Name' type="text" />
        <button className='button_home'>Catch them all!</button>
      </form>
      
      <footer className='franja_home'>

      <div><img className='img_footer' src="../pokebola.png" alt="pokebola" /></div>
        <section className='seccion_home'>Karla Yulieth Caquimbo U.: 
        <a className='link_repositorio' href="">Repositorio</a></section>
      </footer>
    </div>
  )
}

export default Home