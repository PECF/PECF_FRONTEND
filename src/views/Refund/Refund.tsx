import {
    Box,
    Heading,
    Text,
    Flex,
    Link,
    Thead,
    Td,
    Tbody,
    Th,
    Tr,
    Table,
    TableContainer,
  } from "@chakra-ui/react";
  import React from "react";
  import NavBar from "../Navbar/Navbar"
  
 const Refund = () => {
    return (
      <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
         <NavBar/> 
         <Box marginTop={"10"} w="full" bg="gray.700" px="100px" py="40px">
          <Flex justifyContent="space-between" alignItems="center" pb="30px">
            <Heading fontSize={44} ml={"180"} letterSpacing="3px" color="whiteAlpha.900">
            Cuándo y dónde recibo el dinero de mi devolución
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
            <Text fontSize={35} color="blackAlpha.900" pb="20px">
            ¿Cuándo me reembolsan el dinero?
            </Text>
            <Text fontSize={20}>
            Haremos el reembolso 3 días hábiles después de que llegue el producto, una vez que revisemos si cumple con las<Link color='teal.500' href='/#'> políticas de devolución.</Link> Sin embargo, algunas veces podemos hacer el reembolso ni bien entregás el producto, para que tengas el dinero más rápido.<br/><br/>
            Podrás seguir todos los detalles sobre el monto, lugar y día de acreditación del dinero desde el estado de tu compra. 
            </Text>
        <Box pt={5}>
          <Text fontSize={30}>  
          ¿Dónde me reembolsan el dinero?
          </Text> 
          <Text fontSize={20}>
          ⚫︎ Reembolsamos el dinero en el mismo medio de pago que usaste para comprar.<br/><br/>
          ⚫︎ En algunos casos, hacemos el reembolso en Mercado Pago si pagaste con tarjeta de crédito en una cuota o débito sin carrito de compras, para que recibas el dinero de forma inmediata, sin esperar.
          </Text>
          <Text pt={5} fontSize={30}>
            ¿Cuándo recibo el reembolso?
          </Text>
          <Text fontSize={20}>
             El tiempo que tarda en acreditarse el reembolso depende del medio en el que recibirás el dinero. <br/>Los plazos suelen ser los siguientes:
          </Text>
          <TableContainer>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Cómo pagaste</Th>
          <Th>Dónde recibís el reembolso</Th>
          <Th>Tiempo que tarda en acreditarse</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Dinero en Mercado Pago</Td>
          <Td>Dinero en Mercado Pago	</Td>
          <Td>Inmediato</Td>
        </Tr>
        <Tr>
          <Td>Efectivo, transferencia o depósito</Td>
          <Td>Dinero en Mercado Pago</Td>
          <Td>Inmediato</Td>
        </Tr>
        <Tr>
          <Td>Tarjeta de crédito o débito</Td>
          <Td>Dinero en Mercado Pago</Td>
          <Td>Inmediato</Td>
        </Tr>      
        <Tr>
          <Td>Mercado Crédito</Td>
          <Td>Tu límite disponible</Td>
          <Td>Inmediato</Td>
        </Tr>
        <Tr>
          <Td>Tarjeta de crédito</Td>
          <Td>Tarjeta de crédito</Td>
          <Td>Entre 2 y 35 días (el plazo depende del banco)</Td>
        </Tr>
        <Tr>
          <Td>Tarjeta de débito</Td>
          <Td>Tarjeta de débito</Td>
          <Td>Entre 2 y 35 días (el plazo depende del banco)</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
        </Box>
          </Box>
      </Box>
      </Flex>
          {/* <Footer/>  */}
      </Box>
    );
  };
export default Refund;
    