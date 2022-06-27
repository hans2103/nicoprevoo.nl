// src/components/social-icons.js

import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from './flex';
import Icon from './icon';
import Link from './link';
import Text from './text';

const List = styled(Flex)(
    css({
        listStyle: 'none'
    })
);

const Item = styled(Text)`
    & + &::before {
        /* Draw a bullet with CSS because pseudo content */
        /* is read by screen readers */
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin: 0 1ch;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: currentColor;
    }
`;

const socialFollow = [
    {
        icon: 'twitter',
        link: 'https://twitter.com/nicoprevoo'
    },
    {
        icon: 'linkedin',
        link: 'https://nl.linkedin.com/in/nicoprevoo'
    },
    {
        icon: 'instagram',
        link: 'https://www.instagram.com/nicoprevoo/'
    },
];

const socialShare = [];

const SocialLinks = (props) => {
    let socialList = props.type === 'follow' ? socialFollow : socialShare;

    return (
        <List as="ul" m="0" alignItems={props.alignItems} justifyContent={props.justifyContent}>
            {socialList.map((item) => (
                <Item as="li" key={item.link}>
                    <Link
                        href={item.link}
                        hidden={true}
                        name={'Bekijk mijn profiel op ' + item.icon}>
                        <Icon color="currentColor" icon={item.icon} />
                    </Link>
                </Item>
            ))}
        </List>
    );
};

SocialLinks.propTypes = {
    type: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string
};

/** @component */
export default SocialLinks;
