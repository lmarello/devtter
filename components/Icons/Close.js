import * as React from "react"

function Close(props) {
  return (
    <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 15.5l10-10M15.5 15.5l-10-10z" />
      </g>
    </svg>
  )
}

export default Close
