import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Menu, MenuButton, MenuList,MenuItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



export function Categories(){

    return(
        <Box mt='2rem'>
            <Menu isLazy >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                 Categories
            </MenuButton>
             <MenuList>
                <MenuItem to={'/products'} as={Link}>All</MenuItem>
                <MenuItem to='/' as={Link}>Shirts</MenuItem>
                <MenuItem to='/' as={Link}>Pants</MenuItem>
                <MenuItem to='/' as={Link}>UnderWear</MenuItem>
                <MenuItem to='/' as={Link}>Shoes</MenuItem>
                <MenuItem to='/' as={Link}>Hoodies</MenuItem>
                <MenuItem to='/' as={Link}>Jackets</MenuItem>
                <MenuItem to='/' as={Link}>Caps</MenuItem>
             </MenuList>
                        
            </Menu>
        </Box>
    )
}