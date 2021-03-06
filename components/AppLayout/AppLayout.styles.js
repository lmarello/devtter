import css from "styled-jsx/css"
import { breakpoints } from "styles/theme"

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      max-width: ${breakpoints.mobile};
    }
  }
`
