import cembaloJump from "./audio/cembalo-jump-red.mp3"
import Stumbles from "./audio/stumbles-red.mp3"
import nutshellJazz from "./audio/nutshell-jazz-red.mp3"
import Moonrise from "./audio/moonrise-red.mp3"
import Pace from "./audio/pace-red.mp3"
import cembaloJumpAlt from "./audio/cembalo-jump-alt-red.mp3"
import unluckyLuke from "./audio/unlucky-luke-red.mp3"
import mrMikes from "./audio/mr-mikes-red.mp3"
import overAndOverAgain from "./audio/over-and-over-again-red.mp3"
import theGoldenDays from "./audio/the-golden-days-keyboard.mp3"
import fridayNightSnackBar from "./audio/friday-night-snack-bar-keyboard.mp3"
import Jazzgattu from "./audio/jazzgattu-keyboard.mp3"
import susmanB from "./audio/susman-b-keyboard.mp3"
import solemnCelebration from "./audio/solemn-celebration-keyboard.mp3"
import fridayNightSnackBarAlt from "./audio/friday-night-snack-bar-alt-keyboard.mp3"
import susmanA from "./audio/susman-a-keyboard.mp3"



function Song(title, album, audio, image, slug) {
  this.title = title
  this.album = album
  this.audio = audio
  this.image = image
  this.slug = slug
}

export const Red = [
  new Song("Cembalo Jump", "Red House Tapes", cembaloJump, "red-house-tapes.jpg", "red"),
  new Song("Stumbles", "Red House Tapes", Stumbles, "red-house-tapes.jpg", "red"),
  new Song("Nutshell Jazz", "Red House Tapes", nutshellJazz, "red-house-tapes.jpg", "red"),
  new Song("Moonrise", "Red House Tapes", Moonrise, "red-house-tapes.jpg", "red"),
  new Song("P´s Pace", "Red House Tapes", Pace, "red-house-tapes.jpg", "red"),
  new Song("Cembalo Jump-Alternate Takes", "Red House Tapes", cembaloJumpAlt, "red-house-tapes.jpg", "red"),
  new Song("Unlucky Luke", "Red House Tapes", unluckyLuke, "red-house-tapes.jpg", "red"),
  new Song("Mr.Mikes", "Red House Tapes", mrMikes, "red-house-tapes.jpg"),
  new Song("Over And Over Again", "Red House Tapes", overAndOverAgain, "red-house-tapes.jpg", "red")
]

export const Keyboard = [
  new Song("The Golden Days", "Keyboard Club", theGoldenDays, "keyboard-club.jpg", "keyboard"),
  new Song("Friday Night Snack Bar", "Keyboard Club", fridayNightSnackBar, "keyboard-club.jpg", "keyboard"),
  new Song("Jazzgattu", "Keyboard Club", Jazzgattu, "keyboard-club.jpg", "keyboard"),
  new Song("Susman B", "Keyboard Club", susmanB, "keyboard-club.jpg", "keyboard"),
  new Song("Solemn Celebration", "Keyboard Club", solemnCelebration, "keyboard-club.jpg", "keyboard"),
  new Song("Friday Night Snack Bar (Alternative Take)", "Keyboard Club", fridayNightSnackBarAlt, "keyboard-club.jpg", "keyboard"),
  new Song("Susman A", "Keyboard Club", susmanA, "keyboard-club.jpg", "keyboard")
]