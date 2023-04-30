import * as React from 'react';
import Image from 'next/image'
import { Avatar, Text } from '@chakra-ui/react'

//import MoneyIconSVG from '/dollar.svg';

import classNames from 'classnames/bind';
import styles from '@/styles/topbar.module.css';
const cx = classNames.bind(styles);

const USERNAME = "James Clare";

const Topbar = () => {

    return <div className={cx('topbar')}>
        <div className={cx('branding')}>
            {/* <Image src={MoneyIconSVG} className={cx('logo')} alt="Currency Compare"/> */}
            <Text fontSize="xl">Currency Compare</Text>
        </div>
        <div className={cx('login')}>
            <Avatar name={USERNAME}/>
            <Text fontSize="md">{USERNAME}</Text>
        </div>
    </div>
};

export default Topbar;
export { Topbar };