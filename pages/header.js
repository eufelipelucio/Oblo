import React from 'react'
import { Box ,Image, Text } from '@skynexui/components'
import appColor from '../config.json'





// estilos para botões//
let styles = {
    servicos:{
        fontFamily: 'Kentledge',
        fontSize:'21px',
        marginLeft:'30px',
        textDecoration:'none',
        color:appColor.theme.colors.primary[222]
      },
    sobre:{
        fontFamily: 'Kentledge',
        fontSize:'21px',
        marginLeft:'30px',
        color:appColor.theme.colors.primary[222],
        textDecoration:'none',
    }, 
    contato: {
        fontFamily: 'Kentledge',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:appColor.theme.colors.primary[333],
        textDecoration:'none',
        width:'148px',
        height:'51px',
        fontSize:'15px',
        
    }
  }
  // estilos para botões//


function App() {
    return (
      <>
         <Box  styleSheet={{
           width:'100%',
           height:'112px',
           display:'flex',
           justifyContent:'space-between',
           alignItems:'flex-end',
           paddingLeft:'4.8%',
           paddingRight:'5%'
           
         }}>
               <Text styleSheet={{
                 fontFamily:'Kentledge',
                 fontWeight:'900',
                 fontSize:'43px',
                 color:appColor.theme.colors.primary[222]
               }}>Oblo</Text>
               <Box  styleSheet={{
                 display:'flex',
                 justifyContent:'space-between',
                 color: appColor.theme.colors.primary[222],
                 alignItems:'center',
                 
               }}>
                   <Text>
                     <a href='#' 
                     style={styles.servicos}>Serviços</a></Text>
                  <Text>
                    <a href='#' 
                    style={styles.sobre}>Sobre nós</a></Text>
                   <Text  
                   styleSheet={{
                     backgroundColor: appColor.theme.colors.primary[222],                 
                     marginLeft:'40px',
                     borderRadius:'16px',
                     textAlign:'center',                     
                    }}>
                      <a 
                      style={styles.contato} 
                      href="#">contate-nos</a></Text>
               </Box>
               
          </Box>
      </>
    )
  }
  
  export default App