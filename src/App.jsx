import { useState} from 'react';
import './App.css'
import {Box, SimpleGrid, Heading, Button, Input } from '@chakra-ui/react'



function App() {
  
  const [repoData, setRepoData] = useState();
  

  

  async function repoDataURL() {
    //Get repo data about github user
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
  
<Box as='body' className='App' display='flex' flexDirection="column" gap= "50px" height= "100%"> 

<Heading as='h2' size='2xl' noOfLines={1}>
    AKINTAYO'S GITHUB PORTFOLIO
  </Heading>
  <Button  onClick={repoDataURL}>Show Repo URL</Button>

  <Input variant='filled' placeholder='Search Repository' />

 
  <SimpleGrid spacing={200} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  
  
</SimpleGrid>
 {repoData}
</Box>  

   
  );
}

export default App;