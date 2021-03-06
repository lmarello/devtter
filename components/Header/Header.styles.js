import css from "styled-jsx/css"

export default css`
  header {
    position: sticky;
    height: 49px;
    top: 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 21px;
    padding-left: 5px;
  }
  header > :global(svg) {
    margin-left: 10px;
  }
`
