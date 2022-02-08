import React from "react";
import { Box,Text, Image,Icon } from "@skynexui/components";
import appColor from '../config.json'

//estilos para botões//

let  styles ={
contato: {
    backgroundColor: appColor.theme.colors.primary[222],
    borderRadius:'16px',
    fontFamily: 'Kentledge',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:appColor.theme.colors.primary[444],
    textDecoration:'none',
    width:'187px',
    height:'65px',
    fontSize:'20px',
},
video: {
    fontFamily: 'Kentledge',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'65px',
    color:appColor.theme.colors.primary[222],
    textDecoration:'none',
    width:'187px',
    fontSize:'20px',
    marginLeft:'60px'
}
}

function Corpo(){
    return(
        <> 
        <Box styleSheet={{
            display:'flex'
            }}>
            <Box styleSheet={{
            display:'flex-box'
            }}>
                <Text 
                tag="h1" 
                styleSheet={{
                    display:'flex',
                    fontSize:'80px',
                    fontFamily:'Kentledge',
                    fontWeight:'850',
                    color:appColor.theme.colors.primary[222],
                    maxWidth:'1200px',
                    marginLeft:'9%',
                    marginTop:'80px',
                    marginBottom:'40px'
                }}>Ganhe mais audiência com a Oblo.</Text>

                <Text 
                tag="p" 
                styleSheet={{
                    fontFamily:'Kentledge',
                    fontSize:'25px',
                    fontWeight:'200',
                    color:appColor.theme.colors.primary[222],
                    marginLeft:'9%',
                    marginBottom:'40px',
                    maxWidth:'772px',
                }}>Ja pensou em ganhar mais seguidores nas suas redes sociais sem fazer esforço? contrate a Oblo e se surpreenda.</Text>
                <Box styleSheet={{
                    display:'flex',
                    height:'150px',
                    alignItems:'center'
                }}>
                    <Text styleSheet={{
                        marginLeft:'9%',
                        display:'flex'
                    }}>
                    <a href='#' 
                    style={styles.contato}>contate-nos</a></Text>
                    <Text><a href='#' 
                    style={styles.video}>Assistir Video</a></Text>
                    <Icon styleSheet={{
                        color:appColor.theme.colors.primary[222],
                        width:'20px',
                        height:'20px',
                        alignItems:'center',
                        justifyContent:'center',
                        textAlign:'center'
                    }}/>
                </Box>
            </Box>
                    <Box styleSheet={{
                        marginRight:'9%',
                        marginTop:'70px'
                    }} >
                    <Image src='/images/Saly-1.png'  
                    alt='Logo' styleSheet={{
                        minWidth:'480px'
                    }}
                     />
                     </Box>
                    
                
                </Box>
                <Box>
                    <Box styleSheet={{
                        backgroundColor:appColor.theme.colors.primary[222],
                        width:'70%',
                        margin:'auto',
                        top:'-100px',
                        height:'256px',
                        boxShadow: '0px 4px 126px rgba(0, 0, 0, 0.1)',
                        borderRadius: '42px',
                        paddingBottom:'200px',
                        
                        
                    }}></Box>
                </Box>   
        </>
    )
}

export default Corpo