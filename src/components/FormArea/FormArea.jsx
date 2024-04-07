import { Container, Button, Flex } from '@chakra-ui/react';
import BioData from './BioData';
import LinkData from './LinkData';
import SkillsData from './SkillsData';
import ProjectData from './ProjectData';
import ExperienceData from './ExperienceData';
import AcheivementData from './AcheivementData';

const FormArea = () => {
  return (
    <Container p={2}>
      <BioData />
      <LinkData />
      <SkillsData />
      <ProjectData />
      <ExperienceData />
      <AcheivementData />
      <Flex justifyContent='center'>
        <Button colorScheme='blue'> Render </Button>
      </Flex>
    </Container>
  );
};
export default FormArea;
