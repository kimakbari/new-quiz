
import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Link from "next/link";

export default function Home() {
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
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontSize="4.5rem"
          fontWeight="bold"
          lineHeight="4rem"
          color="#5340FF"
          h="70%"
          userSelect="none"
        >
          <Text pr="1em">Quiz</Text>
          <Text pl="1em">App</Text>
        </Flex>
        <Flex
          bgColor="#5340FF"
          h="30%"
          borderRadius="30% 30% 0 0"
          flexDir="column"
        >
          <Flex
            alignItems="center"
            px={{ base: "null", md: "2em" }}
            flexDir="column"
            h="100%"
          >
            <Button
              w="13em"
              h="3em"
              borderRadius="50px"
              mb="2em"
              mt="-1em"
              fontSize="1.5em"
              fontWeight="bold"
              color="#fff"
              alignItems="center"
              justifyContent="center"
              bgColor="#9B51E0"
              _hover={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                cursor: "pointer",
              }}
            >
              <Link href="/signIn" width="100%" height="100%">SIGN IN</Link>
            </Button>
            <Button
              w="13em"
              h="3em"
              borderRadius="50px"
              fontSize="1.5em"
              fontWeight="bold"
              color="#fff"
              bgColor="transparent"
              border="2px solid #fff"
              alignItems="center"
              justifyContent="center"
              _hover={{ cursor: "pointer" }}
            >
              <Link href="/signUp" >SIGN UP</Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
