import React from "react";
import { Box,Text,Icon } from "@skynexui/components";
import appColor from '../config.json'




function Footer(){
    return(
        <> 
            <Box styleSheet={{
                display:{lg:'flex',xl:'flex',md:'flex',sm:'flex',xs:'flexbox'},
                justifyContent:'space-around',
                alignItems:'center',
                width:'100%',
                }}>
                <Text styleSheet={{
                    display:'flex',
                    justifyContent:'center',                   
                    paddingBottom:'20px',
                    fontFamily:'Kentledge',
                    fontWeight:'900',
                    fontSize:'43px',
                    color:appColor.theme.colors.primary[222]
                    }}>
                        Oblo
                </Text>
                <Box styleSheet={{
                    display:'flex',
                    paddingBottom:'20px',
                    justifyContent:'center'

                }}>                       
                    <a href="#">
                        <Icon  label="Instagram"
                        name="FaFacebook"
                        size="25px"
                        styleSheet={{
                            color: appColor.theme.colors.primary[222],
                            width:'50px'
                        }}/>
                    </a>
                    <a href="#">
                        <Icon label="Instagram"
                        name="FaInstagram"
                        size="25px"
                        styleSheet={{
                            color:appColor.theme.colors.primary[222],
                            width:'50px'
                        }}/>
                    </a>
                    <a href="#">
                        <Icon href='#'
                        label="Instagram"
                        name="FaTwitter"
                        size="25px"
                        styleSheet={{
                            color:appColor.theme.colors.primary[222],
                            width:'50px'
                    }}/>
                    </a>
                </Box>
                <Text styleSheet={{
                    display:'flex',
                    justifyContent:'center',
                    color:appColor.theme.colors.primary[222],
                    fontFamily:'Kentledge',
                    fontSize:'15px',
                    fontStyle:'normal',
                    paddingBottom:'30px',

                }}>© 2022 Oblo Todos os Direitos Reservados️</Text>
            </Box>
        </> 
    )
}

export default Footer