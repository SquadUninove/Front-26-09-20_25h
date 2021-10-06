import { Grid, GridItem, Box } from "@chakra-ui/react"

export default function Home() {

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Box
          width="100%"
          height="100vh"
          backgroundImage={require('public/restaurante.jpg').default.src}
          //coloquei o backgroundImage dessa forma porquê o chakra me odeia, ele n aceita da forma que está no site :)
          backgroundPosition="center"
          backgroundRepeat="no-repeat">
        </Box>
      </GridItem>

      <GridItem>
        <Box width="100%" height="100vh" backgroundColor="white">
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg="tomato" />
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={4} bg="tomato" />
          </Grid>
        </Box>
      </GridItem>

    </Grid>
  )
}
