import * as React from 'react';

import Topbar from './Topbar';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => (
    <Box height="100%">
        <Topbar />
        <Box height="calc(100vh - 5rem)">
            {children}
            <Footer />
        </Box>
    </Box>
);

export default Layout;
export { Layout };