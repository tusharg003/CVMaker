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
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ExperienceData = () => {
  const [isOpen, setOpen] = useState(false);
  const [experiences, setExperiences] = useState([
    { company: '', jobTitle: '', description: '' },
  ]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { company: '', jobTitle: '', description: '' },
    ]);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
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
        Work Experience
        {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Stack spacing={2}>
            {experiences.map((experience, index) => (
              <Box key={index}>
                <Flex
                  fontWeight='bold'
                  fontSize='l'
                  py={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Box color={'blue.500'}>#Work Exp {index + 1}</Box>
                  <Box
                    cursor={'pointer'}
                    mr={2}
                    onClick={() => handleDeleteExperience(index)}>
                    <RiDeleteBin6Line />
                  </Box>
                </Flex>
                <Stack>
                  <InputGroup>
                    <InputLeftAddon w={'25%'}>Company:</InputLeftAddon>
                    <Input
                      value={experience.company}
                      onChange={(e) =>
                        handleChange(index, 'company', e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon w={'25%'}>Job Title:</InputLeftAddon>
                    <Input
                      value={experience.jobTitle}
                      onChange={(e) =>
                        handleChange(index, 'jobTitle', e.target.value)
                      }
                    />
                  </InputGroup>
                </Stack>
                <Textarea
                  my={2}
                  placeholder='Describe your Work Exp'
                  value={experience.description}
                  onChange={(e) =>
                    handleChange(index, 'description', e.target.value)
                  }
                />
              </Box>
            ))}

            <Flex justifyContent={'center'}>
              {experiences.length > 0 && ( // Check if there are any experiences
                <Button mr={1} w={'50%'} colorScheme='green'>
                  Save
                </Button>
              )}
              <Button flex={1} colorScheme='blue' onClick={handleAddExperience}>
                Add more exp
              </Button>
            </Flex>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default ExperienceData;
