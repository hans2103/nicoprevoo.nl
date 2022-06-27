// src/layout/header/js

import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../components/box';
import Flex from '../components/flex';
import Link from '../components/link';
import SocialLinks from '../components/social-icons';

const Header = () => {
    return (
        <Flex as="header" p="m">
            <Box>
                <Link
                    href="https://nicoprevoo.nl"
                    name="NicoPrevoo"
                    hidden={true}
                    title="naar de homepage van NicoPrevoo.nl">
                    Nico Prevoo
                </Link>
            </Box>
            <Box mx="auto" />
            <SocialLinks type="follow" alignItems="center" justifyContent="flex-end" />
        </Flex>
    );
};

/** @component */
export default Header;
