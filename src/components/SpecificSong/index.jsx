import styles from "./specific-song.module.css"
import { getImageURL } from "../../utils/functions"

const SpecificSong = ({song, updateFunction}) => {

  const handleClick = () => {
    updateFunction(null)
  }

  return(
    <>
      <div className={`${styles[song.slug]} ${styles.box}`}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img className={styles.image} src={getImageURL(song.image)} alt="Album cover"  height="auto" width="50%"/>
            <h2 className={styles.title}>{song.title}</h2>
            <audio controls>
                  <source src={song.audio} type="audio/mpeg"/>
            </audio>
            <div className={styles.button} onClick={handleClick}>Go Back</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecificSong