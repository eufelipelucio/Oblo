import React, { useState } from "react";
import {Box, Button, Text} from '@skynexui/components'
import appColor from '../config.json'


function Dropdown(){
    const[click, setclick] = useState(true)
    return(
        <>
           <Box styleSheet={{
               position:'relative',
               top:'5.7rem',
               right:'4.8rem',
               display:'flexbox',
               justifyContent:'center',              
               alignItems:'center',
               textAlign:'right',  
               width:'140px'             
               
           }}>     
                <Button type="button"
                    variant="tertiary"
                    rounded="sm"   
                    label="Serviços"
                    size="xl"
                    colorVariant="light"       
                    styleSheet={{
                     fontSize:{sm:'40px',xs:'30px'},                
                     fontFamily: 'Kentledge',
                     textDecoration:'none',
                     textAlign:'center',
                     color:appColor.theme.colors.primary[222],                     
                     backgroundColor:appColor.theme.colors.primary[111], 
                    "hover": {
                        "color": appColor.theme.colors.primary[444],
                        "backgroundColor":"none",
                    "active":{
                        "color": appColor.theme.colors.primary[111]
                    }
                    }
                }}
                  >
                </Button>
                <Button type="button"
                    variant="tertiary"
                    rounded="sm"   
                    label="Sobre nós"
                    size="xl"
                    colorVariant="light"       
                    styleSheet={{
                     fontFamily: 'Kentledge',
                     textDecoration:'none',
                     textAlign:'center',
                     color:appColor.theme.colors.primary[222],                     
                     backgroundColor:appColor.theme.colors.primary[111], 
                    "hover": {
                        "color": appColor.theme.colors.primary[444],
                        "backgroundColor":"none",
                    "active":{
                        "color": appColor.theme.colors.primary[111]
                    }
                    }
                }}
                  >
                </Button>
                <Button type="button"
                    variant="tertiary"
                    rounded="sm"   
                    label="Contate-nos"
                    size="xl"
                    colorVariant="light"       
                    styleSheet={{
                     fontFamily: 'Kentledge',
                     textDecoration:'none',
                     textAlign:'center',
                     color:appColor.theme.colors.primary[222],                     
                     backgroundColor:appColor.theme.colors.primary[111], 
                    "hover": {
                        "color": appColor.theme.colors.primary[444],
                        "backgroundColor":"none",
                    "active":{
                        "color": appColor.theme.colors.primary[111]
                    }
                    }
                }}
                  >
                </Button>
            </Box>
        </>
    )
}

export default Dropdown