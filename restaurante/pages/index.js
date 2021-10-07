import { Box, Button, Center, FormControl, Grid, GridItem, Image, Input, Square, Text, Wrap } from "@chakra-ui/react"

export default function Home() {
  return (

    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Box
          width="100%"
          height="100vh"
          backgroundImage={require('public/restaurante.jpg').default.src}
          //coloquei o backgroundImage dessa forma porquê o chakra me odeia, ele n aceita da forma que estáno site :)
          backgroundPosition="center"
          backgroundRepeat="no-repeat">

          <Grid
            gap="3"
            h="100%"
            w="100%"
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(5, 1fr)">

            <GridItem rowSpan={4} colSpan={1} bg="transparent"></GridItem>
            <GridItem colSpan={4} bg="transparent"></GridItem>

            <GridItem rowSpan={3} colSpan={3} bg="transparent">

              <Square h="100%" w="100%">
                <Image
                  rowSpan={2}
                  boxSize="400px"
                  src={require('public/icone01.png').default.src}
                  alt="icone perfil"
                />
              </Square>

            </GridItem>
            <GridItem rowSpan={3} bg="transparent" ></GridItem>
            <GridItem colSpan={5} bg="transparent" >

              <Grid templateColumns="repeat(7, 1fr)"
                //icones de perfil na parte de baixo da esquerda do login
                gap="3"
                h="100%"
                w="100%">
                <GridItem rowSpan={1} colSpan={1} >
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="50px"
                      src={require('public/setaPraEsquerda.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="125px"
                      src={require('public/icone01.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="125px"
                      src={require('public/icone01.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="125px"
                      src={require('public/icone01.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="125px"
                      src={require('public/icone01.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="125px"
                      src={require('public/icone01.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Square h="100%" w="100%">
                    <Image
                      rowSpan={2}
                      boxSize="50px"
                      src={require('public/setaPraDireita.png').default.src}
                      alt="icone perfil"
                    />
                  </Square>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>


      <GridItem
      //Essa aqui é a parte da direita da página de login
      >
        <Box width="100%" height="100vh" backgroundColor="white">
          <Grid
            h="100%"
            w="100%"
            templateColumns="repeat(4, 1fr)"
            gap={3}
          >

            <GridItem rowSpan={2} colSpan={4} textColor="Black">

              <Grid
                h="100%"
                w="100%"
                templateColumns="repeat(4, 1fr)"
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
                <GridItem rowSpan={1} colSpan={2} textColor="Blue">
                  <Square h="100%" w="100%">
                    <Center>
                      <Image
                        boxSize="200px"
                        h="270px"
                        src={require('public/logo.png').default.src}
                        alt="icone perfil"
                      />
                    </Center>
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
              </Grid>

            </GridItem>
            <GridItem rowSpan={1} colSpan={4} textColor="Black">
              <Grid
                h="100%"
                w="100%"
                templateColumns="repeat(4, 1fr)"
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={1} textColor="Blue">
                </GridItem>

                <GridItem rowSpan={1} colSpan={2} textColor="Blue">
                  <Square h="100%" w="100%">
                    <Center>

                      <FormControl id="email e senha" justify="center" align="center">
                        <Wrap>
                          <Input borderRadius="50" bg="#F58220" type="email" size="lg" variant="filled" placeholder="email" />
                          <Input borderRadius="50" bg="#F58220" type="senha" size="lg" variant="filled" placeholder="senha" />
                        </Wrap>
                        <Text fontSize="lg" color="#C1BABA">
                          Esqueci minha senha
                        </Text>
                        <br /><br />
                        <Square h="100%" w="100%">
                          <Center>
                            <Button className="jakeGreen" borderRadius="50" width="150px" textColor="black">
                              <Text color="White" fontSize="lg">
                                Entrar
                              </Text>
                            </Button>
                          </Center>
                        </Square>
                      </FormControl>

                    </Center>
                  </Square>
                </GridItem>

                <GridItem rowSpan={1} colSpan={1} textColor="Blue">
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem rowSpan={1} colSpan={4} textColor="Black">
              <Grid
                h="100%"
                w="100%"
                templateColumns="repeat(4, 1fr)"
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
                <GridItem rowSpan={1} colSpan={2} textColor="Blue">

                  <Text justify="center" align="center" fontSize="lg" color="black">ou</Text>
                  
                  <Square h="80%" w="100%">
                    <Center>
                      <Button style={{backgroundColor: "#FF6961"}}  borderRadius="50" width="250px" colorScheme="red" textColor="black">
                        <Text color="White" fontSize="lg">
                          Entrar com o Google
                        </Text>
                      </Button>
                    </Center>
                  </Square>
                  <Square h="1px" w="100%">
                    <Center>
                      <Button style={{backgroundColor: "#3C89FC"}} borderRadius="50" width="250px" colorScheme="blue" textColor="black">
                        <Text color="White" fontSize="lg">
                          Entrar com o Facebook
                        </Text>
                      </Button>
                    </Center>
                  </Square>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
              </Grid>
            </GridItem>
            <GridItem rowSpan={1} colSpan={4} textColor="Black">
              <Grid
                h="100%"
                w="100%"
                templateColumns="repeat(4, 1fr)"
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
                <GridItem rowSpan={1} colSpan={2} textColor="Blue">

                </GridItem>
                <GridItem rowSpan={1} colSpan={1} textColor="Blue"></GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  )
}
