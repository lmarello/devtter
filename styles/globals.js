import css from "styled-jsx/css"
import { colors, fonts } from "../styles/theme"
import { addOpacityToColor } from "../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export default css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
    font-family: ${fonts.base};
  }
`
