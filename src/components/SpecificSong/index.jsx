import styles from "./specific-song.module.css"
import { getImageURL } from "../../utils/functions"

const SpecificSong = ({song}) => {
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
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecificSong