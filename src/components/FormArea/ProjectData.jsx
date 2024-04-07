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

const ProjectData = () => {
  const [isOpen, setOpen] = useState(false);
  const [projects, setProjects] = useState([{ title: '', description: '' }]);

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };
  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };
  const handleChange = (index, feild, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][feild] = value;
    setProjects(updatedProjects);
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
        Projects
        {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </Flex>

      {isOpen && (
        <Box my={2} mx={2}>
          <Stack spacing={2}>
            {projects.map((project, index) => (
              <Box key={index}>
                <Flex
                  fontWeight='bold'
                  fontSize='l'
                  py={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Box color={'blue.500'}>#Project {index + 1}</Box>
                  <Box
                    cursor={'pointer'}
                    mr={2}
                    onClick={() => handleDeleteProject(index)}>
                    <RiDeleteBin6Line />
                  </Box>
                </Flex>

                <InputGroup>
                  <InputLeftAddon w={'25%'}>Title:</InputLeftAddon>
                  <Input
                    value={project.title}
                    onChange={(e) =>
                      handleChange(index, 'title', e.target.value)
                    }
                  />
                </InputGroup>
                <Textarea
                  value={project.description}
                  my={2}
                  onChange={(e) =>
                    handleChange(index, 'description', e.target.value)
                  }
                  placeholder='Describe your project'
                />
              </Box>
            ))}
            <Flex justifyContent={'center'}>
              {projects.length > 0 && ( // Check if there are any experiences
                <Button mr={1} w={'50%'} colorScheme='green'>
                  Save
                </Button>
              )}
              <Button flex={1} colorScheme='blue' onClick={handleAddProject}>
                Add more Project
              </Button>
            </Flex>
          </Stack>
        </Box>
      )}
    </Container>
  );
};
export default ProjectData;
