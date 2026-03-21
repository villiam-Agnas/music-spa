import styles from "./feature.module.css"
import { getImageURL } from "../../utils/functions"

const Feature = ({name, image, album, readMore}) => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.album}>
        <h2 className={styles.title}>{name}</h2>
        <img className={styles.image} src={getImageURL(image)} alt="Album cover"  height="auto" width="50%"/>
      </div>
      <div className={styles.songWrapper}>
        {album.map((song, index) => (
          <div key={index} className={styles.song}>
            <h2 className={styles.songTitle} onClick={() => readMore(song)}>{song.title}</h2>
            <audio controls>
              <source src={song.audio} type="audio/mpeg"/>
            </audio>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Feature