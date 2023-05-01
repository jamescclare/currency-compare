import * as React from 'react';
import Image from 'next/image'
import { Avatar, Heading, Text } from '@chakra-ui/react'

//import MoneyIconSVG from '/dollar.svg';

import classNames from 'classnames/bind';
import styles from '@/styles/topbar.module.css';
const cx = classNames.bind(styles);

const USERNAME = "Trial User";

const Topbar = () => {

    return <div className={cx('topbar')}>
        <div className={cx('branding')}>
            {/* <Image src={MoneyIconSVG} className={cx('logo')} alt="Currency Compare"/> */}
            <Heading fontSize="3xl">Currency Compare</Heading>
        </div>
        <div className={cx('login')}>
            <Avatar name={USERNAME}/>
            <Text fontSize="md">{USERNAME}</Text>
        </div>
    </div>
};

export default Topbar;
export { Topbar };