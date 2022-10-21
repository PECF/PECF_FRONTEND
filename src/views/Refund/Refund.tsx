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
            When and where do I receive my refund money?
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
          When do I get my money back?
          </Text>
          <Text fontSize={20}>
          We will make the refund 3 business days after the product arrives, once we verify if it meets <Link color='teal.500' href='/#'>the return policies.</Link> <br/> However, sometimes we can make the return as soon as the product is delivered, so that you have the money faster.
          </Text>
      <Box pt={5}>
        <Text fontSize={30}>  
        Where do I get my money refunded?
        </Text> 
        <Text fontSize={20}>
        ⚫︎ We will refund the money in the same payment method that you used to buy.<br/><br/>
        ⚫︎ In some cases, we make the refund in Mercado Pago if you paid by credit card in one installment or debit card without a shopping cart, so that you receive the money immediately, without waiting.
        </Text>
        <Text pt={5} fontSize={30}>
          When do I receive the refund?
        </Text>
        <Text fontSize={20}>
        The time it takes to credit the refund depends on the means in which you will receive the money. <br/>The deadlines are usually the following:
        </Text>
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>How did you pay</Th>
        <Th>Where do you get the refund?</Th>
        <Th>Time it takes to get credited</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Money in Mercado Pago</Td>
        <Td>Money in Mercado Pago</Td>
        <Td>Immediate</Td>
      </Tr>
      <Tr>
        <Td>Cash, transfer or deposit</Td>
        <Td>Money in Mercado Pago</Td>
        <Td>Immediate</Td>
      </Tr>
      <Tr>
        <Td>Credit or debit card</Td>
        <Td>Money in Mercado Pago</Td>
        <Td>Immediate</Td>
      </Tr>      
      <Tr>
        <Td>Mercado Crédito</Td>
        <Td>Your available limit</Td>
        <Td>Immediate</Td>
      </Tr>
      <Tr>
        <Td>Credit card</Td>
        <Td>Credit card</Td>
        <Td>Between 2 and 35 days (the term depends on the bank)</Td>
      </Tr>
      <Tr>
        <Td>Debit card</Td>
        <Td>Debit card</Td>
        <Td>Between 2 and 35 days (the term depends on the bank)</Td>
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
    