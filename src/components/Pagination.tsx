import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";




export const Pagination = ({ functionPagination , productsLength, productsPage, currentPage }) => {
    
    const pageNumber = [];
  
    let i = 0;
    while (i <= Math.ceil(productsLength / productsPage)) {
      pageNumber.push(i + 1);
      i++;
    }
    pageNumber.pop();

    return(
        <Box>
            {pageNumber &&
          pageNumber.map((number, index) => {
            return (
              <Fragment key={index}>
                <input
                  id={`dot-${index + 1}`}
                  className="dot_input"
                  type="radio"
                  name="dots"
                  onChange={() => functionPagination(number)}
                  checked={index + 1 === currentPage ? true : false}
                />
                <label
                  className="label_dot"
                  htmlFor={`dot-${index + 1}`}></label>
              </Fragment>
            );
          })}
        </Box>
    )
  }