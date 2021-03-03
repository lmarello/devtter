import css from "styled-jsx/css"

export default css`
  section.container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px;
  }
  .avatar-container {
    margin-right: 10px;
  }
  form {
    padding: 10px;
    width: 100%;
    border: 1px solid #f0f0f0;
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
  section.section-image {
    position: relative;
    padding: 5px;
  }
  section.section-image > :global(svg) {
    position: absolute;
    left: 70px;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  img {
    width: 70px;
    border-radius: 10px;
  }
  div {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 15px;
  }
`
