import { Link } from "react-router-dom";
import { Box, Container, Text, SimpleGrid, useColorModeValue, } from "@chakra-ui/react";
import {IoShirtSharp, } from 'react-icons/io5'
import {GiArmoredPants, GiUnderwearShorts} from 'react-icons/gi'
import React from "react";


export function Categories() {
    
return (
    <Container maxW={"80vw"} m={0} p="0" w="100%" h={'100%'}>
        <SimpleGrid
            mb='2rem'
            columns={{ sm: 2, md: 4 }}
            spacing="2"
            bg={useColorModeValue('white', 'default')}
            p="5"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            >
    
    <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiArmoredPants size={'100%'} ></GiArmoredPants>
                </Box>
                <Text fontSize={'small'}>PANTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiUnderwearShorts size={'100%'} ></GiUnderwearShorts>
                </Box>
                <Text fontSize={'small'}>UNDERWEAR</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'} ></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        </SimpleGrid>
    </Container>
    );
}
