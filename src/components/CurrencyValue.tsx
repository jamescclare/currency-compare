import { Box, Button, HStack, Popover, PopoverContent, PopoverTrigger, Spinner, Stat, StatHelpText, StatLabel, StatNumber, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { StarIcon, DeleteIcon, SettingsIcon } from '@chakra-ui/icons'
import classNames from 'classnames/bind';

import style from '@/styles/currency-value.module.css';

const cx = classNames.bind(style);

type Actions = {
    onRemove?: () => void,
    onMakePrimary?: () => void,
}

type Props = {
    code: string,
    name: string,
    value?: number,
    actions?: Actions
}

const CurrencyValue = ({ code, name, value, actions = {} }: Props) => {
    const {
        onRemove,
        onMakePrimary
    } = actions;

    const hasActions = Object.keys(actions).length > 0;

    return (
        <Popover>
            <Stat className={cx('currency-value')} >
                <StatLabel>{code}</StatLabel>
                {
                    value
                        ? <StatNumber>{value.toFixed(2)}</StatNumber>
                        : <Spinner />
                }
                <StatHelpText>{name}</StatHelpText>
                {
                    hasActions && 
                        <PopoverTrigger>
                            <Button leftIcon={<SettingsIcon />} className={cx('settings')} />
                        </PopoverTrigger>
                }
            </Stat>
            <PopoverContent>
                <HStack padding="0.5rem" spacing="0.5rem" justifyContent="center">
                    {onMakePrimary && <Button leftIcon={<StarIcon/>} onClick={onMakePrimary}>Make Primary</Button>}
                    {onRemove && <Button leftIcon={<DeleteIcon />} onClick={onRemove}>Delete</Button>}
                </HStack>
            </PopoverContent>
        </Popover>
    );
};

export default CurrencyValue;
export { CurrencyValue };