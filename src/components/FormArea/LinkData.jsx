import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const LinkData = () => {
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState({ linkedin: '', email: '' });

  // Update the links state when the input values change
  const handleLinkChange = (e, key) => {
    setLinks({
      ...links,
      [key]: e.target.value, // Update the corresponding key in the links object
    });
  };

  // Function to handle save action
  const handleSave = () => {
    // Add logic here to save the links data
    console.log('Links saved:', links);
  };

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
        Links
        {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Stack>
            <InputGroup>
              <InputLeftAddon w={'25%'}>LinkedIn:</InputLeftAddon>
              <Input
                value={links.linkedin}
                onChange={(e) => handleLinkChange(e, 'linkedin')}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon w={'25%'}>Email:</InputLeftAddon>
              <Input
                value={links.email}
                onChange={(e) => handleLinkChange(e, 'email')}
              />
            </InputGroup>
          </Stack>

          <Flex justifyContent={'flex-end'} mt={2}>
            <Button mr={1} px={7} colorScheme='red'>
              Clear
            </Button>
            <Button colorScheme='blue' px={7} onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Box>
      )}
    </Container>
  );
};

export default LinkData;
