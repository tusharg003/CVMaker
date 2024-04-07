import Form from './components/FormArea/FormArea';
import Layout from './components/LayoutArea/LayoutArea';
import ResumeArea from './components/ResumeArea/ResumeArea';
import { Box, Flex } from '@chakra-ui/react';
function App() {
  return (
    <Flex justifyContent={'column'} h={'100vh'} >
      <Box flex={1}>
        <Layout />
      </Box>
      <Box flex={3}>
        <Form />
      </Box>
      <Box flex={5}>
        <ResumeArea />
      </Box>
    </Flex>
  );
}

export default App;
