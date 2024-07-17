import React, { useContext } from 'react'
import Sidebarr from './Component/Sidebarr'
import Player from './Component/Player'
import Display from './Component/Display'
import {PlayerContext} from './Context/PlayerContext'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='flex h-[90%]'>
       <Sidebarr/>
       <Display/>
      </div>
       <Player/>
       <audio src={track.file} ref={audioRef} preload='auto'>
                
       </audio>
    </div>
  )
}

export default App