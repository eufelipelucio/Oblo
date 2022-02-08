import React from 'react'

function GlobalStyle(){
    return(
      <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Kentledge''Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        background-color:#FF5876;
        
      } 
    `}</style>
    )
  }
  export default GlobalStyle