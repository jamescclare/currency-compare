import * as React from 'react';

import { Box, Text } from '@chakra-ui/react';

import classNames from 'classnames/bind';
import styles from '@/styles/footer.module.css'
const cx = classNames.bind(styles);

const Footer = () => (
    <div className={cx('footer')}>
        <Text fontSize="sm">Currency Compare</Text>
        <Text fontSize="sm">A demo project by James Clare</Text>
    </div>
);

export default Footer;
export { Footer };