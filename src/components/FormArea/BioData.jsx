import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const BioData = () => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  return (
    <Container>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        bgColor='gray.100'
        p={2}
        mb={2}
        cursor={'pointer'}
        onClick={() => setOpen(!isOpen)}>
        Bio Data
        {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Stack>
            <InputGroup>
              <InputLeftAddon w={'25%'}>Name:</InputLeftAddon>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon w={'25%'}>Contact No:</InputLeftAddon>
              <Input
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon w={'25%'}>City:</InputLeftAddon>
              <Input
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon w={'25%'}>Country:</InputLeftAddon>
              <Input
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </InputGroup>
            <Flex justifyContent={'flex-end'}>
              <Button mr={1} px={7} colorScheme='red'>
                Clear
              </Button>
              <Button colorScheme='blue' px={7}>
                Save
              </Button>
            </Flex>
          </Stack>
        </Box>
      )}
    </Container>
  );
};
export default BioData;
