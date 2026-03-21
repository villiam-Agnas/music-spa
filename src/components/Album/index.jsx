import styles from "./album.module.css"
import { getImageURL } from "../../utils/functions"

const Album = ({image, updateFunction, page, name}) => {
  return(
    <div>
      <div className={styles.card} onClick={() => updateFunction(page)}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>{name}</div>
          <img className={styles.cardBack} src={getImageURL(image)} alt="Album cover" />
        </div>
      </div>
    </div>

  )
}

export default Album