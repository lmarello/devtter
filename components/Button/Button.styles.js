import css from "styled-jsx/css"
import { colors } from "styles/theme"

export default css`
  button {
    align-items: center;
    background-color: ${colors.black};
    border-radius: 9999px;
    border: 0;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 24px;
    transition: opacity 0.3s ease;
  }

  button[disabled] {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  button > :global(svg) {
    margin-right: 8px;
  }

  button:hover {
    opacity: 0.8;
  }
`
