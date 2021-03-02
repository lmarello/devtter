import css from "styled-jsx/css"

export default css`
  form {
    padding: 20px;
  }
  textarea {
    width: 100%;
    border: 2px solid transparent;
    padding: 10px;
    resize: none;
    font-size: 21px;
    outline: 0;
  }
  textarea.dragging {
    border: 2px dashed #09f;
  }
  div {
    padding: 15px;
  }
`
