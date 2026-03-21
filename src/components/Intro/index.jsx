import styles from "./intro.module.css"

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.welcome}>Welcome!</h2>
      <p className={styles.intro}>This is a Website to showcase a few of my brothers albums. Take a look around, listen to some music and find some new songs to add to your playlists.</p>
      <div className={styles.links}>
        <a className={styles.link} href="https://open.spotify.com/album/0hSdHiua1IbSyBbDryZnN2?si=o6EIiM7oR6WbF7fyKdxznw"><span>Link to spotify: </span>Keyboard Club</a>
        <a className={styles.link} href="https://open.spotify.com/album/3jq03i9uHfXbFVEtzyE52N?si=WYNcHgq9S3iOPAamn-hMcw"><span>Link to spotify: </span>Red House Tapes</a>
      </div>
    </div>
  )
}

export default Intro