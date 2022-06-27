// componentes/layout/Footer.js

import Stack from '../components/stack';
import Text from '../components/text';
import styled from 'styled-components';
import css from '@styled-system/css';
import Link from '../components/link';

const Component = styled(Stack)(
    css({
        borderTop: 'focus',
        borderColor: 'base'
    })
);

const Footer = () => {
    return (
        <Component
            as="footer"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            p="m">
            <Text>
                <Link href="./over" name="Over Nico Prevoo" />
            </Text>
            <Text ml="auto">Copyright &copy; {new Date().getFullYear() + ' '} Nico Prevoo</Text>
        </Component>
    );
};

/** @component */
export default Footer;
