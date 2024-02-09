import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DashboardRemedy(props) {
    return (
        <Svg
            width={25}
            height={28}
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24.319 8.785l-1.094-1.899a1.029 1.029 0 00-1.405-.378l-6.533 3.785a.266.266 0 01-.399-.232l.006-7.536a1.063 1.063 0 00-1.063-1.063h-2.125a1.062 1.062 0 00-1.062 1.063l.004 7.542a.265.265 0 01-.398.232L3.716 6.514a1.029 1.029 0 00-1.404.378l-1.093 1.9a1.024 1.024 0 00.377 1.4l6.54 3.791a.266.266 0 010 .458l-6.54 3.79a1.032 1.032 0 00-.377 1.402l1.093 1.899a1.029 1.029 0 001.405.378l6.533-3.785a.266.266 0 01.399.232l-.005 7.543a1.062 1.062 0 001.062 1.062h2.125a1.063 1.063 0 001.063-1.062l-.005-7.549a.266.266 0 01.398-.232l6.534 3.785a1.029 1.029 0 001.404-.378l1.094-1.899a1.025 1.025 0 00-.378-1.401l-6.54-3.79a.265.265 0 010-.459l6.54-3.79a1.03 1.03 0 00.378-1.402z"
                stroke="#F5F5F5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default DashboardRemedy
