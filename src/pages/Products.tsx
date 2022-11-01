import { ProductCard } from "../components/product/ProductCard";
import { ProductGrid } from "../components/product/ProductGrid";
import { useRecoveryData } from "../hooks/useRecoveryData";
import {
  Grid,
  GridItem,
  Stack,
  Container,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import * as React from "react";

export const Products = () => {
  const { products } = useRecoveryData("productList");
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [categories, setCategories] = React.useState([]);
  console.log(categories);

  /*React.useEffect(() => {
    if (categories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        categories.includes(product.category[0].value)
      );
      setFilteredProducts(filtered);
    }
  }, [categories]);*/

  const handleFilter = (e) => {
    const filtered = products.filter((product) => {
      return product.category[0].value
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  React.useEffect(() => {
    if (location.pathname) {
      const path = location.pathname.split("/")[2];
      if (path === "search") {
        const search = location.pathname.split("/")[3];
        //console.log(search);
        const filtered = products.filter((product) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredProducts(filtered);
      } else {
        const category = location.pathname.split("/")[2];
        //console.log(category);
        if (category === "all") {
          setFilteredProducts(products);
          //console.log(filteredProducts);
          //console.log(filteredProducts[0].category[0].value);
        } else {
          const filtered = products.filter((product) => {
            //console.log(product.category[0].value.toLowerCase());
            return product.category[0].value.toLowerCase() === category;
          });
          setFilteredProducts(filtered);
          //console.log(filteredProducts);
        }
      }
    }
  }, [location.pathname, products]);

  return (
    <Grid mt="82" templateAreas={`"filter menu"`} gap="1">
      <GridItem bg="blackAlpha.300" width="2xs" area={"filter"}>
        <Container centerContent>
          <Stack mt="5">
            {/*filter by category*/}
            <CheckboxGroup colorScheme="green">
              <Stack direction="column">
                <Checkbox value="shirts" onChange={handleFilter}>
                  Shirts
                </Checkbox>
                <Checkbox value="pants" onChange={handleFilter}>
                  Pants
                </Checkbox>
                <Checkbox value="shoes" onChange={handleFilter}>
                  Shoes
                </Checkbox>
                <Checkbox value="caps" onChange={handleFilter}>
                  Caps
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>
        </Container>
      </GridItem>

      <GridItem area={"menu"}>
        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductGrid>
      </GridItem>
    </Grid>
  );
};

/*
  return (
  <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {filteredProducts.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );



    return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box>
            <CheckboxGroup
              colorScheme="green"
              onChange={handleCheckboxChange}
              value={checkedItems}
            >
              <Stack spacing={4}>
                <Checkbox value="electronics">Electronics</Checkbox>
                <Checkbox value="clothing">Clothing</Checkbox>
                <Checkbox value="furniture">Furniture</Checkbox>
                <Checkbox value="books">Books</Checkbox>
                <Checkbox value="sports">Sports</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </ProductGrid>
        </GridItem>
      </Grid>
    </Container>
  );
};
  */
