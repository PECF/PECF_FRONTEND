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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Refund() {
  return (
    <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
      <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
        <Flex justifyContent="space-between" alignItems="center" pb="30px">
          <Heading color="whiteAlpha.900">
            When and where do I receive my refund money?
          </Heading>
        </Flex>
      </Box>
      <Flex>
        <Box
          // mt={10}
          // ml={"450"}
          // maxW="500"
          bg={"whiteAlpha.100"}
          overflow="hidden"
          p={50}
          boxShadow="lg"
        >
          <Box>
            <Text fontSize="2xl" as="i" pb="20px">
              When do I get my money back?
            </Text>
            <Text fontSize="lg">
              We will make the refund 3 working days after the product arrives,
              once we check if it meets with
              <Link color="teal.500" href="../pages/ReturnPolicy">
                {" "}
                return policies.
              </Link>{" "}
              However, sometimes we can make the refund as soon as you deliver
              the product, so that you get your money faster. You will be able
              to follow all the details regarding the amount, place and day of
              the money crediting from the status of your purchase.
            </Text>
            <Box pt={5}>
              <Text fontSize="2xl" as="i">
                Where do I get my money back?
              </Text>
              <Text fontSize="lg">
                <UnorderedList>
                  <ListItem>
                    We refund the money in the same payment method you used to
                    buy.
                  </ListItem>
                  <ListItem>
                    In some cases, we will reimburse you in Mercado Pago if you
                    paid with credit card in one installment or debit card
                    without shopping cart, so that you receive the money
                    immediately, without waiting.
                  </ListItem>
                </UnorderedList>
              </Text>
              <br />
              <Text fontSize="2xl" as="i">
                When do I receive my refund?
              </Text>
              <Text fontSize="lg">
                The time it takes for the reimbursement to be credited depends
                on the medium in which you will receive the money. <br />
                The deadlines are usually as follows:
              </Text>
              <TableContainer display={"flex"}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>How did you pay</Th>
                      <Th>Where you receive reimbursement</Th>
                      <Th>Time it takes to be credited</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr bg="teal.100" color="blackAlpha.900">
                      <Td>Money in Mercado Pago</Td>
                      <Td>Money in Mercado Pago </Td>
                      <Td>Immediate</Td>
                    </Tr>
                    <Tr>
                      <Td>Cash, transfer or deposit</Td>
                      <Td>Money in Mercado Pago</Td>
                      <Td>Immediate</Td>
                    </Tr>
                    <Tr bg="teal.100" color="blackAlpha.900">
                      <Td>Credit or debit card</Td>
                      <Td>Money in Mercado Pago</Td>
                      <Td>Immediate</Td>
                    </Tr>
                    <Tr>
                      <Td>Credit Market</Td>
                      <Td>Your available limit</Td>
                      <Td>Immediate</Td>
                    </Tr>
                    <Tr bg="teal.100" color="blackAlpha.900">
                      <Td>Credit card</Td>
                      <Td>Credit card</Td>
                      <Td>Between 2 and 35 days (term depends on the bank)</Td>
                    </Tr>
                    <Tr>
                      <Td>Debit card</Td>
                      <Td>Debit card</Td>
                      <Td>Between 2 and 35 days (term depends on the bank)</Td>
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
}
