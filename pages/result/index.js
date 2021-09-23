import {
    Flex,
    Text,
    Button,
    CircularProgress,
    CircularProgressLabel,
  } from "@chakra-ui/react";
  import Link from "next/link"
  import axios from 'axios'
  import { useQuery } from "react-query";
  
  const getResults =async ()=>{
    const result = 
      await axios.get(
        "http://quize.arcatech.dev/api/user_correct_percentage_answer",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      return result
      }
  
  function Index() {
    const { data, status } = useQuery("questions", getResults)
  
    console.log(data?.data.content)
    return (
      <Flex
        w="100%"
        maxW="1920px"
        minH="100vh"
        h="100%"
        justifyContent="center"
        overflowX="hidden"
      >
        <Flex
          maxW={{ base: "100%", md: "50%" }}
          w="100%"
          alignItems={{ base: "null", md: "center" }}
          flexDir="column"
          p="1em"
        >
          <Flex justifyContent="center" alignItems="center" p="2em" userSelect="none">
          <CircularProgress value={data?.data.content} color="#5340FF" size="4em">
            <CircularProgressLabel fontSize=".3em" fontWeight="700">{data?.data.content}</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          <Flex flexDir="column" alignItems="center" userSelect="none">
            <Text fontSize="2.4em" fontWeight="700">
              Congratulations!
            </Text>
            <Text fontSize="1.5em" textAlign="center" my="1em">
              You have received {data?.data.content} of the score
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w={{ base: "100%", md: "50%" }}
            my="2em"
          >
            <Button w="10em" h="3em" color="#5340FF" borderRadius="1em">
                <Link href="/" >Back To Home</Link>
              
            </Button>
            <Button
              w="10em"
              h="3em"
              borderRadius="1em"
              bgColor="#6959FF"
              color="#F6F5FF"
            >
              Show Answers
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default Index;
  