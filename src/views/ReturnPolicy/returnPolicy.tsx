import {
    Box,
    Heading,
    Text,
    Flex,
    Link
  } from "@chakra-ui/react";
  import React from "react";
  import NavBar from "../Navbar/Navbar";
  
 const ReturnPolicy = () => {
    return (
      <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
         <NavBar/> 
         <Box marginTop={"10"} w="full" bg="blue.700" px="100px" py="40px">
          <Flex justifyContent="space-between" alignItems="center" pb="30px">
            <Heading fontSize={44} ml={"180"} letterSpacing="3px" color="whiteAlpha.900">
              Políticas de devolución de tus compras
            </Heading>
          </Flex>
        </Box>
      <Flex>
      <Box
      mt={20}
      ml={"450"}
      maxW="500"
      bg={"whiteAlpha.100"}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={50}
      boxShadow='lg'>
          <Box>
            <Text fontSize={26} color="blackAlpha.900" pb="20px">
            Los productos pueden devolverse gratis, sin importar el motivo.
            </Text>
            <Text fontSize={35} color="blackAlpha.900" pb="20px">
            ¿Cuáles son los requisitos para devolver un producto?
            </Text>
            <Text fontSize={20}>
              -No han pasado más de 30 días de realizada la compra.<br/>
              -El producto debe estar sin marcas de mal uso y tal cual lo recibiste.<br/>
              -Debe tener sus accesorios, manuales y etiquetas.<br/>
              -Si es un celular, notebook, tablet o smartwatch, debe estar desbloqueado, sin claves que impidan su uso.<br/>
              -Si un producto tiene un problema o esta incompleto, cuando lo devuelvas y lo revisemos, debe estar en las mismas condiciones que describas al reclamar.
            </Text>
        <Box pt={5}>
          <Text fontSize={30}>  
          ¿Puedo cambiar un producto?
          </Text> 
          <Text fontSize={20}>
          Si bien no podemos cambiar un producto que compraste, podés solicitar la devolución y recuperar tu dinero para comprar lo que quieras.<br/> En caso de tener un reclamo abierto, puedes acordar con el vendedor la posibilidad de reemplazar el producto. 
          </Text>
          <Text pt={5} fontSize={30}>
            ¿Cuándo y dónde me reembolsan el dinero de la devolución?
          </Text>
          <Text fontSize={20}>
          Para más información sobre el reembolso después de devolver un producto,<br/> 
          <Link color='teal.500' href='/#'>
          podés consultar cuándo y dónde recibirás tu dinero según el medio que usaste para pagar.
          </Link>
          </Text>
        </Box>
          </Box>
      </Box>
      </Flex>
          {/* <Footer/>  */}
      </Box>
    );
  };
export default ReturnPolicy;