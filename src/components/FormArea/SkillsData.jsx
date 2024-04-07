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

const SkillsData = () => {
  const [isOpen, setOpen] = useState(false);
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
        Skills {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Stack>
            <InputGroup>
              <InputLeftAddon minW={'25%'}>Technical Skills:</InputLeftAddon>
              <Input />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon minWw={'25%'}>Soft Skills:</InputLeftAddon>
              <Input />
            </InputGroup>
          </Stack>

          <Flex justifyContent={'flex-end'} mt={2} >
            <Button mr={1} px={7} colorScheme='red'>
              Clear
            </Button>
            <Button colorScheme='blue' px={7}>
              Save
            </Button>
          </Flex>
        </Box>
      )}
    </Container>
  );
};
export default SkillsData;
