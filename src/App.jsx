import { useState } from "react";
import "./App.css";
import {
  Box,
  SimpleGrid,
  Button,
  Input,
  Circle,
  Center,
  Image,
  IconButton,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

function App() {
  const [repoData, setRepoData] = useState();

  //Get repo data about github user
  async function repoDataURL() {
    await fetch("https://api.github.com/users/Mastercoder96/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const list = result.map((item, i) => (
            <Box key={i}>
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </Box>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <Box
      as="body"
      className="App"
      display="flex"
      flexDirection="column"
      gap="50px"
      height="100%"
    >
      <Center>
        <Circle size="70px">
          <Image
            src="https://avatars.githubusercontent.com/u/69313896?v=4"
            alt="avatar_url"
            borderRadius="50%"
            size="70px"
          />
        </Circle>
        <Box>AKINTAYO KOLAWOLE</Box>
      </Center>

      <Box>
        Frontend Developer | HTML/CSS | Javascript | Learning React and VueJs
      </Box>

      <Box>
      <IconButton
        colorScheme="teal"
        aria-label="Send email"
        p= "15px"
        w= "10px"
        icon={<EmailIcon />}
      />

      </Box>



      <Input variant="filled" placeholder="Search Repository" />

      <Button onClick={repoDataURL}>Show Repo URL</Button>

      <SimpleGrid
        spacing={200}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      ></SimpleGrid>
      {repoData}
    </Box>
  );
}

export default App;
