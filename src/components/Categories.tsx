import { Link } from "react-router-dom";
import { Box, Container, Text, SimpleGrid,  Heading } from '@chakra-ui/react';
import {IoShirtSharp, } from 'react-icons/io5'
import {GiArmoredPants, GiUnderwearShorts, GiRunningShoe, GiHoodie,GiBilledCap, GiDoubleNecklace, GiMonclerJacket} from 'react-icons/gi'
import React from "react";


export function Categories() {
    
return (
    <Container maxW={"90%"} m={0} p="0" w="100%" h={'100%'}>
        <Heading fontWeight={'light'} fontSize='24' ml='1rem'>Product Categories:</Heading>
        <SimpleGrid
            mb='2rem'
            columns={{ sm: 2, md: 4 }}
            spacing="4"
            
            p="5"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            h={'100%'}
            >
    
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%' _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <IoShirtSharp size={'100%'}></IoShirtSharp>
                </Box>
                <Text fontSize={'small'}>SHIRTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiArmoredPants size={'100%'} ></GiArmoredPants>
                </Box>
                <Text fontSize={'small'}>PANTS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiUnderwearShorts size={'100%'} ></GiUnderwearShorts>
                </Box>
                <Text fontSize={'small'}>UNDERWEAR</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiRunningShoe size={'100%'} ></GiRunningShoe>
                </Box>
                <Text fontSize={'small'}>SHOES</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiHoodie size={'100%'} ></GiHoodie>
                </Box>
                <Text fontSize={'small'}>HOODIES</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiMonclerJacket size={'100%'} />
                </Box>
                <Text fontSize={'small'}>JACKETS</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiDoubleNecklace size={'100%'}/ >
                </Box>
                <Text fontSize={'small'}>ACCESORIES</Text>
            </Box>
            
        </Box>
        <Box boxShadow="dark-lg"  rounded="md" bg="white" role='group'>
            
            <Box as={Link} to='/products' display={'flex'} alignItems='center' p={'10px'} flexDir={'column'} justifyContent={'center'} w={'100%'}  h='100%'    _groupHover={{visibility: 'visible', background: 'radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(152,152,152,1) 100%)' }}>
                <Box borderRadius={'full'} bgColor='grey' color={'white'} p='1' w={'2rem'} h='2rem'>
                <GiBilledCap size={'100%'}/>
                </Box>
                <Text fontSize={'small'}>CAPS</Text>
            </Box>
            
        </Box>
        </SimpleGrid>
    </Container>
    );
}
