import styles from "./navbar.module.css"

const Navbar = ({updateFunction, clearSong}) => {

  const handleClick = (page) => {
    updateFunction(page)
    clearSong()
  }

  return(
    <div>
      <nav className={styles.nav}>
        <div className={styles.navItem} onClick={() => handleClick(null)}>Home</div>
        <div className={styles.navItem} onClick={() => handleClick("Red")}>Red House Tapes</div>
        <div className={styles.navItem} onClick={() => handleClick("Keyboard")}>Keyboard Club</div>
      </nav>
    </div>
  )
}

export default Navbar