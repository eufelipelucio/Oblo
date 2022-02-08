import React from "react";
import { Box,Text, Image,Icon } from "@skynexui/components"
import appColor from '../config.json'

//estilos para botões/

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
//estilos para botões//




function Corpo(){
    return(
        <> 
        <Box styleSheet={{
            display:'flex',
            justifyContent:'space-between',
            paddingLeft:'5%',
            paddingRight:'5%'

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
                    }}>Ganhe mais audiência com a Oblo.
                </Text>
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
                    }}>Ja pensou em ganhar mais seguidores nas suas redes sociais sem fazer esforço? contrate a Oblo e se surpreenda.
                </Text>
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
                            style={styles.contato}>contate-nos
                        </a>
                    </Text>
                        <Text><a href='#' 
                            style={styles.video}>Assistir Video</a>
                        </Text>
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
                    }}>
                    <Image src='/images/Saly-1.png'  
                    alt='Logo' styleSheet={{
                        minWidth:'480px',
                        marginBottom:'120px'
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
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center',
                    textAlign:'center'
                    }}> 
                    <Box styleSheet={{
                        paddingTop:'170px'                                
                        }}> 
                        <Text styleSheet={{
                            fontSize:'60px',
                            fontFamily:'Kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                50+
                        </Text>
                        <Text styleSheet={{
                            fontSize:'20px',
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Clientes
                        </Text>
                    </Box>
                    <Box styleSheet={{
                        paddingTop:'170px'
                        }}>
                        <Text styleSheet={{
                            fontSize:'60px',
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                5+
                        </Text>
                        <Text styleSheet={{
                            fontSize:'20px',
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Experiência
                        </Text>
                    </Box>
                    <Box styleSheet={{
                        paddingTop:'170px'

                        }}>
                        <Text styleSheet={{
                            fontSize:'60px',
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                120+
                        </Text>
                        <Text styleSheet={{
                            fontSize:'20px',
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Projetos
                        </Text>                                
                    </Box>
                    <Box styleSheet={{
                        paddingTop:'170px'
                        }}>
                        <Text styleSheet={{
                            fontSize:'60px',
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                10.000+
                        </Text>
                        <Text styleSheet={{
                            fontSize:'20px',
                            fontWeight:'500',
                            fontFamily:'Kentledge',
                            }}>
                                Avaliações
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box styleSheet={{
                display:'flex',
                justifyContent:'space-around',
                margin:'0 10%',
                paddingBottom:'200px'

            }}>
                <Box styleSheet={{
                    display:'flexbox',
                    
                }}> 
                    <Text styleSheet={{
                        fontSize:'63px',
                        fontFamily:'Kentledge',
                        fontWeight:'bold',
                        color:appColor.theme.colors.primary[222],
                        paddingTop:'40%'

                    }}>
                        Por que escolher a 
                            <Text styleSheet={{
                                display:'flex',
                                fontWeight:'900',
                                fontSize:'63px',
                                fontFamily:'Kentledge'
                                }}>
                                    Oblo?
                            </Text>
                    </Text>
                    <Text styleSheet={{
                        paddingTop:'30px ',
                        maxWidth:'600px',
                        fontSize:'20px',
                        fontFamily:'kentledge',
                        color:appColor.theme.colors.primary[222]
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.                       
                    </Text>
                </Box>
                <Box>
                    <Image src='/images/Saly-2.png'  
                            alt='Logo' 
                            styleSheet={{
                            maxWidth:'760px'
                    }}/>                    
                </Box>
            </Box>
            <Box styleSheet={{
                display:'flex',
                justifyContent:'space-around'
            }}>
                <Box styleSheet={{
                    width:'390px',
                    height:'369px',
                    borderRadius:'29px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:'34px',
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 10%',
                    }}>
                        Aumente a Visibilidade da sua marca
                    </Text>
                </Box>
                <Box styleSheet={{
                    width:'390px',
                    height:'369px',
                    borderRadius:'29px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:'34px',
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 20%',
                    }}>
                        Gere mais clientes e seguidores
                    </Text>
                </Box>
                <Box styleSheet={{
                    width:'390px',
                    height:'369px',
                    borderRadius:'29px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:'34px',
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 20%',

                    }}>
                        Se qualifique no mercado com um bom Marketing
                    </Text>
                </Box>
            </Box>   
        </>
    )
}

export default Corpo