import styles from "./home.module.css"
import Album from "../Album"
import Intro from "../Intro"

const Home = ({updateFunction}) => {
  return(
    <div className={styles.wrapper}>
      <Intro />
      <div className={styles.albums}>
        <Album image="red-house-tapes.jpg" updateFunction={updateFunction} page="Red" name="Red House Tapes" />
        <Album image="keyboard-club.jpg" updateFunction={updateFunction} page="Keyboard" name="Keyboard Club" />
      </div>
    </div>

  )
}

export default Home