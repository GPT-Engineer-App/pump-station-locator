import { Box, Container, Text, VStack } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white" textAlign="center">
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
      </Box>
      <Map />
    </Container>
  );
};

export default Index;