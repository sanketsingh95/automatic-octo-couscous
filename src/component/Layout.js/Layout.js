import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Main } from '../Main';

const Layout = ({ children }) => {
    return (
        <Grid
            templateRows="auto 96vh"
            templateColumns="repeat(5, 1fr)"
            p={3}
            gap={3}
        >
            {/* TODO:  */}
            {/* <GridItem
                border="1px"
                borderColor="red"
                rowStart={1}
                rowEnd={1}
                colStart={1}
                colEnd={6}
            >
                <Header />
            </GridItem> */}

            <GridItem
                border="1px"
                borderColor="blue"
                rowStart={2}
                rowEnd={-1}
                colStart={1}
                colEnd={2}
                overflowY="hidden"
                _hover={{
                    overflowY: 'scroll',
                }}
            >
                <Navbar />
            </GridItem>

            <GridItem
                bg="rgba(245,245,245,1)"
                borderColor="white"
                boxShadow="lg"
                p="6"
                rounded="lg"
                rowStart={2}
                rowEnd={-1}
                colStart={2}
                colEnd={-1}
                overflowY="hidden"
                _hover={{
                    overflowY: 'scroll',
                }}
            >
                <Main>{children}</Main>
            </GridItem>
        </Grid>
    );
};

export default Layout;