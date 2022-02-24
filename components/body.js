import React, {useState,useEffect } from "react";
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
    width:'11rem',
    height:'4rem',
    fontSize:'1.2rem',    
},

video: {
    fontFamily: 'Kentledge',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'4rem',
    color:appColor.theme.colors.primary[222],
    textDecoration:'none',
    width:'11rem',
    fontSize:'1.2rem',
}
}
//estilos para botões//



function Corpo(){


//Animação para contagem de clientes, projetos, avaliações, experiências//

const [numberAnimation, setNumberAnimation] = useState(0);

useEffect(()=> {
    if(numberAnimation === 0 , numberAnimation < 50) {
        setTimeout(() => {
            setNumberAnimation(state => state + 1)
        }, 40)
    }
    
},[numberAnimation])

const [clientsAnimation, setClientsAnimation] = useState(0);


useEffect(()=> {
    if(clientsAnimation === 0 , clientsAnimation < 5) {
        setTimeout(() => {
            setClientsAnimation(state => state + 1)
        }, 200)
    }
    
},[clientsAnimation])

const [experienceAnimation, setExperienceAnimation] = useState(0);


useEffect(()=> {
    if(experienceAnimation === 0 , experienceAnimation < 120) {
        setTimeout(() => {
            setExperienceAnimation(state => state + 2)
        }, 50)
    }
    
},[experienceAnimation])

const [projectsAnimation, setProjectsAnimation] = useState(0);


useEffect(()=> {
    if(projectsAnimation === 0 , projectsAnimation < 50) {
        setTimeout(() => {
            setProjectsAnimation(state => state + 1)
        }, 50)
    }
    
},[projectsAnimation])

const [assessmentsAnimation, setAssessmentsAnimation] = useState(0);


useEffect(()=> {
    if(assessmentsAnimation === 0 , assessmentsAnimation < 10000) {
        setTimeout(() => {
            setAssessmentsAnimation(state => state + 100)
        }, 1)
    }
    
},[assessmentsAnimation]);

//Animação para contagem de clientes, projetos, avaliações, experiências//


    return(
        <> 
        <Box 
            styleSheet={{
            display:{xl:'flex',lg:'flex',md:'flex-box',},
            justifyContent:'space-between',
            paddingLeft:'5%',
            paddingRight:'5%',
            marginBottom:'7.5rem',
            alignItems:'center'            
        }}>
            <Box 
                styleSheet={{
                display:'flex-box' ,
                alignItems:'center',
                justifyContent:'center',
                }}>
                <Text 
                    tag="h1" 
                    styleSheet={{
                    display:'flex',
                    fontSize:{xl:'63px',lg:'63px',md:'63px',sm:'63px',xs:'40px'},
                    fontFamily:'Kentledge',
                    fontWeight:'850',
                    color:appColor.theme.colors.primary[222],
                    minWidth:'20rem',
                    marginLeft:'9%',
                    marginTop:'5rem',
                    marginBottom:'2.5rem'
                }}>
                    Ganhe mais audiência com a Oblo.
                </Text>
                <Text 
                    tag="p" 
                    styleSheet={{
                    fontFamily:'Kentledge',
                    fontSize:{sm:'1.2rem',xs:'1rem'},
                    fontWeight:'200',
                    color:appColor.theme.colors.primary[222],
                    marginLeft:'9%',
                    marginBottom:'2.5rem',
                    maxWidth:'45rem',
                }}>
                    Ja pensou em ganhar mais seguidores nas suas redes sociais sem fazer esforço? contrate a Oblo e se surpreenda.
                </Text>
                <Box 
                    styleSheet={{
                    display:'flex',
                    justifyContent:{xl:'left',lg:'left',md:'center',sm:'space-around',xs:'space-around'},
                    height:'9rem',
                    alignItems:'center',
                    marginLeft:{xl:'4.3rem',lg:'4.3rem',md:'4.3rem',sm:'none',xs:'none'},                    
                }}>
                    <Text styleSheet={{
                        display:'flex',                        
                    }}>
                        <a href='#' 
                            style={styles.contato}
                        >
                            Contate-nos
                        </a>
                    </Text>
                    <Text styleSheet={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingLeft:{md:'3.4rem'}
                        }}>
                        <a href='#' 
                            style={styles.video}>
                                Assistir Video
                                    <Icon name="FaRegPlayCircle"
                                    styleSheet={{
                                    color:appColor.theme.colors.primary[222],
                                    width:'25px',
                                    height:'18px',   
                                    paddingLeft:'7px'                     
                                        }}/>
                        </a>                        
                    </Text>                    
                </Box>
            </Box>
                <Box styleSheet={{
                    display:'flex',
                    justifyContent:'center',
                    margin:{xl:'4rem 9%',lg:'4rem auto',md:'4rem auto',sm:'4rem auto',xs:'4rem auto'},
                    }}>
                    <Image src='/images/Saly-1.png'  
                        alt='Logo' styleSheet={{
                        display:{xl:'flex',lg:'flex',md:'flex-box',},
                        maxWidth:{xl:'27rem',lg:'27rem',md:'20rem',sm:'20rem', xs:'14rem'},
                        marginLeft:'1rem'
                        }}/>
                </Box>                
        </Box>
                <Box styleSheet={{
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center',
                    backgroundColor:appColor.theme.colors.primary[222],
                    width:'90%',
                    margin:'auto',
                    height:{xl:'260px',lg:'260px',md:'200px',sm:'150px',xs:'5rem'},
                    boxShadow: '0px 4px 126px rgba(0, 0, 0, 0.1)',
                    borderRadius: '30px',
                    padding:'20px 5%',                    
                    }}> 
                    <Box styleSheet={{
                        display:'flexbox',
                        textAlign:'center'
                        }}> 
                        <Text styleSheet={{
                            fontSize:{xl:'60px',lg:'60px',md:'50px',sm:'25px',xs:'15px'},
                            fontFamily:'Kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                {clientsAnimation+"+"}
                        </Text>
                        <Text styleSheet={{
                            fontSize:{xl:'20px',lg:'20px',md:'15px',sm:'15px',xs:'10px'},
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Clientes
                        </Text>
                    </Box>
                    <Box styleSheet={{
                        display:'flexbox',
                        textAlign:'center'
                        }}>
                        <Text styleSheet={{
                            fontSize:{xl:'60px',lg:'60px',md:'50px',sm:'30px'},
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                {experienceAnimation+"+"}
                        </Text>
                        <Text styleSheet={{
                            fontSize:{xl:'20px',lg:'20px',md:'15px',sm:'15px',xs:'10px'},
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Experiência
                        </Text>
                    </Box>
                    <Box styleSheet={{
                        display:'flexbox',
                        textAlign:'center'
                        }}>
                        <Text styleSheet={{
                            fontSize:{xl:'60px',lg:'60px',md:'50px',sm:'30px'},
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                            {projectsAnimation+"+"}

                        </Text>
                        <Text styleSheet={{
                            fontSize:{xl:'20px',lg:'20px',md:'15px',sm:'15px',xs:'10px'},
                            fontWeight:'500',
                            fontFamily:'Kentledge'
                            }}>
                                Projetos
                        </Text>                                
                    </Box>
                    <Box styleSheet={{
                        display:'flexbox',
                        textAlign:'center'
                        }}>
                        <Text styleSheet={{
                            fontSize:{xl:'60px',lg:'60px',md:'50px',sm:'30px'},
                            fontFamily:'kentledge',
                            fontWeight:'500',
                            color:appColor.theme.colors.primary[111]
                            }}>
                                {assessmentsAnimation+"+"}
                        </Text>
                        <Text styleSheet={{
                            fontSize:{xl:'20px',lg:'20px',md:'15px',sm:'15px',xs:'10px'},
                            fontWeight:'500',
                            fontFamily:'Kentledge',
                            }}>
                                Avaliações
                        </Text>
                    </Box>
                </Box>
            
            <Box styleSheet={{
                display:{xl:'flex',lg:'flex',md:'flexbox',sm:'flexbox',xs:'flebox'},
                justifyContent:{xl:'space-around',lg:'space-around',md:'center',sm:'center',xs:'center'},
                marginTop:'6rem',
                marginLeft:'5%',
                marginRight:'5%',
                alignItems:'center',
                paddingBottom:'50px'

                }}>
                <Box styleSheet={{
                    display:'flexbox',
                    textAlign:{xl:'left',lg:'left',md:'center',sm:'center',xs:'center'},
                    
                    }}> 
                    <Text styleSheet={{
                        display:{xl:'block',lg:'block',md:'block',sm:'block',xs:'block'},
                        fontSize:{xl:'63px',lg:'63px',md:'63px',sm:'40px',xs:'40px'},
                        fontFamily:'Kentledge',
                        fontWeight:'bold',
                        color:appColor.theme.colors.primary[222],
                        paddingTop:'0%',
                        paddingLeft:'10%',
                        alignItems:'center'

                        }}>
                            Por que escolher a 
                            <Text styleSheet={{
                                justifyContent:{sm:'flex-start',xs:'flex-start'},
                                fontWeight:'900',
                                fontSize:{xl:'63px',lg:'63px',md:'63px',sm:'40px',xs:'40px'},
                                fontFamily:'Kentledge',
                                }}>
                                    Oblo?
                            </Text>
                    </Text>
                    <Text styleSheet={{
                        fontSize:'20px',
                        fontFamily:'kentledge',
                        color:appColor.theme.colors.primary[222],
                        textAlign:{xl:'left',lg:'left',md:'center',sm:'center',xs:'center'},
                        alignItems:'center',
                        padding:{xl:'30px 10%',ls:'30px 10%',md:'30px 10%',sm:'30px 0',xs:'30px 0'}
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.                       
                    </Text>
                </Box>
                <Box styleSheet={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'2rem',
                    alignItems:'center'
                    }}>
                    <Image src='/images/Saly-2.png'  
                            alt='Logo' 
                            styleSheet={{
                            display:{xl:'flex',lg:'flex',md:'flex-box',},
                            maxWidth:{xl:'27rem',lg:'27rem',md:'20rem',sm:'20rem', xs:'12rem'},
                            marginLeft:'1rem',
                            }}/>                    
                </Box>
            </Box>
            <Box styleSheet={{
                display:{xl:'flex',lg:'flex',md:'flexbox',sm:'flexbox',xs:'flexbox'},
                justifyContent:'space-around',
                }}>
                <Box styleSheet={{
                    width:{xl:'19rem',lg:'19rem',md:'19rem',sm:'19rem',xs:'14rem'},
                    height:{xl:'18rem',lg:'18rem',md:'18rem',sm:'18rem',xs:'12rem'},
                    borderRadius:'16px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                    margin:'4rem auto'                    
                    }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:{xl:'1.8rem',lg:'1.8rem',md:'1.8rem',sm:'1.8rem',xs:'1.3rem'},
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 10%',
                        }}>
                            Aumente a Visibilidade da sua marca
                    </Text>
                </Box>
                <Box styleSheet={{
                    width:{xl:'19rem',lg:'19rem',md:'19rem',sm:'19rem',xs:'14rem'},
                    height:{xl:'18rem',lg:'18rem',md:'18rem',sm:'18rem',xs:'12rem'},
                    borderRadius:'16px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                    margin:'4rem auto'
                    }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:{xl:'1.8rem',lg:'1.8rem',md:'1.8rem',sm:'1.8rem',xs:'1.3rem'},
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 20%',
                        }}>
                            Gere mais clientes e seguidores
                    </Text>
                </Box>
                <Box styleSheet={{
                    width:{xl:'19rem',lg:'19rem',md:'19rem',sm:'19rem',xs:'14rem'},
                    height:{xl:'18rem',lg:'18rem',md:'18rem',sm:'18rem',xs:'12rem'},
                    borderRadius:'16px',
                    backgroundColor:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    display:'flex',
                    alignItems:'center',
                    margin:'4rem auto',              
                    }}>
                    <Text styleSheet={{
                        fontFamily:'Kentledge',
                        fontSize:{xl:'1.8rem',lg:'1.8rem',md:'1.8rem',sm:'1.8rem',xs:'1.3rem'},
                        fontWeight:'850',
                        color:appColor.theme.colors.primary[111],
                        padding:'0 20%',
                        }}>
                            Se qualifique no mercado com um bom Marketing
                    </Text>
                </Box>
            </Box>   
            <Box styleSheet={{
                marginTop:'10rem',
                marginBottom:'10rem'
                }}>
                <Text styleSheet={{
                    fontFamily:'Kentledge',
                    fontWeight:'bold',
                    fontSize:{xl:'3.1rem',lg:'3.1rem',md:'3.1rem',sm:'1.8rem',xs:'1.5rem'},
                    color:appColor.theme.colors.primary[222],
                    textAlign:'center',
                    marginBottom:'40px'
                    }}>
                        Saiba o que dizem sobre nós
                </Text>
                <Box styleSheet={{
                    display:{xl:'flex',lg:'flex',md:'flex',sm:'flexbox', xs:'flexbox'},
                    justifyContent:{xl:'space-around',lg:'space-around',md:'space-around',sm:'center', xs:'center'},
                    alignItems:'center',
                    padding:'0 5%'  
                    }}>
                    <Box styleSheet={{
                        display:'flex',
                        justifyContent:'center',
                        marginBottom:'20px'
                        }}>
                        <Image  src='/images/Saly-3.png'
                            alt="Vector"
                            styleSheet={{
                            maxWidth:{xl:'27rem',lg:'27rem',md:'20rem',sm:'15rem', xs:'15rem'},
                            }}/>
                    </Box>
                    <Box  styleSheet={{
                        display:'flex'
                        }}>
                        <Image src='/images/Avatar.png'
                            alt="Avatar"
                            styleSheet={{
                            width:{xl:'4rem',lg:'4rem',md:'4rem',sm:'2rem', xs:'2rem'},
                            height:{xl:'4rem',lg:'4rem',md:'4rem',sm:'2rem', xs:'2rem'},
                            margin:'0 30px'
                            }}/>
                        <Box>
                            <Text styleSheet={{
                                fontFamily:'Kentledge',
                                fontWeight:'bold',
                                fontSize:{xl:'20px',lg:'20px',md:'20px',sm:'16px', xs:'14px'},
                                color:appColor.theme.colors.primary[222],
                                maxWidth:'38rem',
                                paddingBottom:'1rem'
                                }}>
                                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.”</Text>
                            <Text styleSheet={{
                                fontFamily:'Kentledge',
                                fontWeight:'bold',
                                fontSize:'20px',
                                color:appColor.theme.colors.primary[222],
                                }}>
                                    Johny
                            </Text>
                            <Text styleSheet={{
                                fontFamily:'Kentledge',
                                fontSize:'13px',
                                color:appColor.theme.colors.primary[222],
                                }}>
                                CEO - Luma
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Corpo