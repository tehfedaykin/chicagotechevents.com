import React from 'react'
import SubmitEventMessage from './SubmitEventMessage'
import { Div, P } from 'styled-system-html'

export default props => (
  <SubmitEventMessage>
    <Div width={72}>
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#dd0000"
          d="m506.144531 81.855469-76-76c-3.753906-3.75-8.839843-5.855469-14.144531-5.855469h-320c-5.304688 0-10.390625 2.105469-14.144531 5.855469l-76 76c-3.75 3.753906-5.855469 8.839843-5.855469 14.144531v320c0 5.304688 2.105469 10.390625 5.855469 14.144531l76 76c3.753906 3.75 8.839843 5.855469 14.144531 5.855469h320c5.304688 0 10.390625-2.105469 14.144531-5.855469l76-76c3.75-3.753906 5.855469-8.839843 5.855469-14.144531v-320c0-5.304688-2.105469-10.390625-5.855469-14.144531zm-34.144531 325.859375-64.285156 64.285156h-303.429688l-64.285156-64.285156v-303.429688l64.285156-64.285156h303.429688l64.285156 64.285156zm-244.898438-195.597656c-2-41.378907-2.996093-70.640626-2.996093-87.765626 0-17.582031 15.902343-26.113281 33.414062-26.113281 16.054688 0 29.519531 9.292969 29.519531 26.113281 0 17.125-.429687 46.386719-1.285156 87.765626-.855468 41.386718-1.28125 70.5-1.28125 87.335937 0 12.992187-15.519531 18.839844-26.953125 18.839844-18.28125 0-27.417969-6.277344-27.417969-18.839844-.003906-16.835937-1.003906-45.949219-3-87.335937zm62.078126 168.679687c0 17.5-13.8125 32.964844-31.199219 32.964844-20.1875 0-35.160157-15.710938-35.160157-32.964844 0-17.828125 14.398438-32.964844 35.160157-32.964844 17.402343 0 31.199219 15.5 31.199219 32.964844zm0 0"
        />
      </svg>
    </Div>
    <P pt={3} pb={4} width={1} color="red">
      Oops! There was a problem.
    </P>
  </SubmitEventMessage>
)