import styles from "./header.module.css"
import HeaderTitle from "../HeaderTitle"
import Navbar from "../Navbar"

const Header = ({updateFunction, clearSong}) => {
  return(
    <>
    <HeaderTitle />
    <Navbar updateFunction={updateFunction} clearSong={clearSong}/>
    </>

  )
}

export default Header