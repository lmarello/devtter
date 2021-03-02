import css from "styled-jsx/css"
import { colors } from "styles/theme"

export default css`
  header {
    position: sticky;
    height: 49px;
    top: 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    background: white;
  }

  section {
    flex: 1;
  }

  h2 {
    font-weight: 700;
    font-size: 21px;
    padding-left: 15px;
  }

  nav {
    background: white;
    border-top: 1px solid #eee;
    bottom: 0;
    height: 49px;
    position: sticky;
    width: 100%;
    padding: 10;
    display: flex;
  }

  nav a {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    height: 100%;
  }

  nav a:hover {
    background: radial-gradient(#0099ff22 16%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }

  nav a:hover > :global(svg) {
    stroke: ${colors.primary};
  }
`
