import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Textarea, Button } from '@chakra-ui/react';
import { useState } from 'react';

const AcheivementData = () => {
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
        Acheivements
        {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Textarea
            my={2}
            height={'10em'}
            placeholder='List out your achievements'
          />
          <Flex justifyContent={'flex-end'}>
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
export default AcheivementData;
