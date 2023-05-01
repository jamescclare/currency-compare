import { Button, Checkbox, FormControl, FormHelperText, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Select, UseDisclosureProps, UseDisclosureReturn } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons'
import * as React from 'react';
import CurrencySelect from '../CountrySelect';

type WatchedCurrency = string;

type Props = { exclude: Array<string>, onComplete: (currency: string, isPrimary: boolean) => void } & UseDisclosureReturn;

const AddCurrencyModal = ({ exclude, onComplete, ...modalProps }: Props) => {
    const [currency, setCurrency] = React.useState<string | null>(null);
    const [isPrimary, setIsPrimary] = React.useState(false);

    const handleClose = () => {
        modalProps.onClose();
        setCurrency(null);
        setIsPrimary(false);
    };

    const handleComplete = () => {
        currency && onComplete(currency, isPrimary);
        handleClose();
    };


    return (<Modal {...modalProps} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new currency to your dashboard</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <FormControl>
                    <FormLabel>Select the currency to add</FormLabel>
                    <CurrencySelect exclude={exclude} onChange={setCurrency}/>
                    <FormLabel></FormLabel>
                    <Checkbox onChange={({ target }) => setIsPrimary(target.checked)}>
                        Make this new currency the primary currency
                    </Checkbox>
                </FormControl>
          </ModalBody>
          <ModalFooter>
            <HStack spacing="1rem">
            <Button onClick={handleClose}>
              Close
            </Button>
            <Button 
                onClick={handleComplete}
                backgroundColor={"#A2E3C4"}
                disabled={!currency}
            >
                Add currency
            </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
    </Modal>)
};

export default AddCurrencyModal;
export { AddCurrencyModal };