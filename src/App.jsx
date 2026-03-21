import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Feature from './components/Feature'
import SpecificSong from './components/SpecificSong'
import { Red } from './data/songs'
import { Keyboard } from './data/songs'
import styles from "./app.module.css"


function App() {
  const[page, setPage] = useState(null)
  const[song, setSong] = useState(null)


  return (
    <div className={styles.app}>
      <Header updateFunction={setPage} clearSong={setSong}/>
      <div className={styles.main}>
        {song ? (
          <SpecificSong song={song} />
        ):(
          <>
          {!page && <Home updateFunction={setPage}/>}
          {page === "Red" && <Feature name={"Red house tapes"} image={"red-house-tapes.jpg"} album={Red} readMore={setSong}/>}
          {page === "Keyboard" && <Feature name={"keyboard club"} image={"keyboard-club.jpg"} album={Keyboard} readMore={setSong}/>}
        </>
        )}
      </div>
    </div>
  )
}

export default App
