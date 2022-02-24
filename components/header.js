import React, { useState } from "react";
import { Box ,Button,Icon,Image, Text } from '@skynexui/components'
import appColor from '../config.json'
import Dropdown from '../components/dropdown'





// estilos para botões//
let styles = {
    servicos:{
        fontFamily: 'Kentledge',
        fontSize:'1.2rem',
        textDecoration:'none',
        color:appColor.theme.colors.primary[222]
      },
    sobre:{
        fontFamily: 'Kentledge',
        fontSize:'1.2rem',
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
        fontSize:'1rem',
        
    }
  }
  // estilos para botões//


function Header() {

  //animação de dropdown do botão do cabeçalho
  const [open, setOpen] = useState(false);
  const handleClick = ()=>setOpen(!open);
 

    return (
      <>
         <Box  styleSheet={{
           width:'100%',
           height:'7rem',
           display:'flex',
           justifyContent:'space-between',
           alignItems:'flex-end',
           paddingLeft:'5%',
           paddingRight:'5%'
           
         }}>
            <Text styleSheet={{
              fontFamily:'Kentledge',
              fontWeight:'900',
              fontSize:'43px',
              color:appColor.theme.colors.primary[222]
              }}>
                Oblo
            </Text>
            <Box styleSheet={{
              display:{lg:'flex',sm:'none', xs:'none'},
              justifyContent:'space-between',
              color: appColor.theme.colors.primary[222],
              alignItems:'center',
              }}>
                <Text>
                  <a href='#' 
                  style={styles.servicos}>
                      Serviços
                  </a>
                </Text>
                <Text>
                  <a href='#' 
                  style={styles.sobre}>
                    Sobre nós
                  </a>
                </Text>
                <Text styleSheet={{
                    backgroundColor: appColor.theme.colors.primary[222],                 
                    marginLeft:'40px',
                    borderRadius:'16px',
                    textAlign:'center',                     
                    }}>
                  <a style={styles.contato} 
                    href="#">
                    contate-nos
                  </a>
                </Text>                  
            </Box>
            <Box styleSheet={{
              display:{xl:'none',lg:'none',sm:'flex', xs:'flex'}, 
              }}>
              <Button onClick={()=>setOpen(!open)}
              iconName='FaAlignJustify' 
                variant='tertiary'
                colorVariant='light'
                styleSheet={{
                 position:'absolute',
                 top:'4rem',
                 right:'3rem',
                 backgroundColor:appColor.theme.colors.primary[111],
                 
                }}
               >
              </Button>     
            </Box>
            <Box styleSheet={{
                 display:{xl:'none',lg:'none',sm:'flex', xs:'flex'}, 
              }}>   
            {open && <Dropdown   />}     
            </Box>  
          </Box>
      </>
  
    )}
  export default Header