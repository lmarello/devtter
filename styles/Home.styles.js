import css from "styled-jsx/css"
import { colors } from "../styles/theme"

export default css`
  section {
    display: grid;
    place-items: center;
    place-content: center;
    height: 100%;
  }
  img {
    width: 120px;
  }
  h1 {
    color: ${colors.primary};
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 8px;
  }
  h2 {
    color: ${colors.secondary};
    font-size: 21px;
    margin: 0;
    text-align: center;
  }
  div {
    margin-top: 16px;
  }
`
