import {
    Flex,
    Text,
    Input,
    InputLeftElement,
    InputGroup,
    FormControl,
    FormHelperText,
    Button,
    Avatar,
    AvatarBadge,
    AvatarGroup,
  } from "@chakra-ui/react"
  import { FaRegUser, FaApple, FaFacebook } from "react-icons/fa"
  import { HiOutlineKey } from "react-icons/hi"
  import { FcGoogle } from "react-icons/fc"
  import Link from "next/link"
  import { useState } from "react"
  import axios from "axios"
  import { useRouter } from "next/router"

  
  function Index() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
  
    const SignIn = () => {
      axios
        .post("http://quize.arcatech.dev/api/login", { username, password })
        .then((response) => {
          router.replace("/questions")
          console.log(response.data.access_token)
          localStorage.setItem("token", response?.data?.access_token)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
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
            h="40%"
            pt={{ base: "null", md: "1em" }}
            userSelect="none"
          >
            <Text pr="1em">Quiz</Text>
            <Text pl="1em">App</Text>
          </Flex>
          <Flex
            flexDir="column"
            w={{ base: "null", md: "70%" }}
            p={{ base: "1em 1.5em", md: "3em 3em 0 3em" }}
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="#3f51b5">
                  <FaRegUser />
                </InputLeftElement>
                <Input
                  placeholder="USERNAME"
                  borderStyle="none"
                  borderBottom="1px solid #abb8c3"
                  borderRadius="0"
                  _focus={{
                    colorScheme: "#555555",
                    borderStyle: "none",
                    borderBottom: "1px solid #9900EF",
                    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
              <InputGroup mt="3em">
                <InputLeftElement pointerEvents="none" color="#3f51b5">
                  <HiOutlineKey />
                </InputLeftElement>
                <Input
                  placeholder="PASSWORD"
                  borderStyle="none"
                  borderBottom="1px solid #abb8c3"
                  borderRadius="0"
                  _focus={{
                    colorScheme: "#555555",
                    borderStyle: "none",
                    borderBottom: "1px solid #9900EF",
                    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <FormHelperText color="#3f51b5" fontSize="0.8em" dir="rtl">
                <Link href="/signIn">?FORGOT PASSWORD</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius="50px"
              bgColor="#9B51E0"
              fontSize="1.5em"
              color="#fff"
              h="2.8em"
              my="3em"
              onClick={() => SignIn()}
            >
              SIGN IN
            </Button>
          </Flex>
          <Flex justifyContent="center">
            <AvatarGroup spacing="1em">
              <Avatar bgColor="#F2F2F2" icon={<FaApple fontSize="1.5em" />} />
              <Avatar bgColor="#F2F2F2" icon={<FcGoogle fontSize="1.5em" />} />
              <Avatar bgColor="#F2F2F2" icon={<FaFacebook fontSize="1.5em" />} />
            </AvatarGroup>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            w={{ base: "null", md: "60%" }}
            bgColor="#5340FF"
            h="10%"
            mt="2em"
            mx="-3px"
            borderRadius="50% 50% 0 0 "
          >
            <Text color="#D9D9D9">Dont you have an account?</Text>
            <Text color="#fff">
              <Link href="/signUp">Sign up</Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  }
  
  export default Index
  