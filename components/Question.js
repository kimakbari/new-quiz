import { Flex, Text, Radio, Button, RadioGroup } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Link from "next/link";
import axios from "axios";

// const GetCurrentAnswer = (questionId) =>
//   useQuery(`getCurrentAnswer_${questionId}`, async () => {
//     const { data } = await axios.get(
//       `http://quize.arcatech.dev/api/get_my_answer/${questionId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     return data;
//   });

function Question({ data }) {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState();
  const [answers, setAnswers] = useState([answer]);
  const router = useRouter();
  // const { data: res } = GetCurrentAnswer(data[counter].id);
  // console.log(res);

  const NextQuestion = () => {
    axios
      .post(
        `https://quize.arcatech.dev/api/submit_answer/${data[counter]?.id}`,
        { answer },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setAnswers([
          ...answers,
          { id: data[counter]?.id, selectedAnswer: answer },
        ]);
        // setAnswer([
        //   ...answer,
        //   {answered:true}
        // ])
        const hasIndex = answers.findIndex((ans) => ans?.id === counter + 1);
        console.log(hasIndex);
        hasIndex !== -1
          ? setAnswer(answers[hasIndex + 1]?.selectedAnswer)
          : null;
        console.log(answers);
        setCounter(counter + 1);
      })
      .catch((error) => console.log(error));
    setAnswer(0);
  };

  const finishExam = () => {
    axios
      .post(
        `https://quize.arcatech.dev/api/submit_answer/${data[counter]?.id}`,
        { answer },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        setAnswers([
          ...answers,
          { id: data[counter]?.id, selectedAnswer: answer },
        ]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        router.replace("/result");
      });
    setAnswer(0);
  };

  const Back = () => {
    setCounter(counter - 1);
    setAnswer(answers[counter]?.selectedAnswer);
  };
  return (
    <Flex
      w="100%"
      maxW="1920px"
      minH="100vh"
      h="100%"
      justifyContent="center"
      overflowX="hidden"
      bgColor="#F6F5FF"
    >
      <Flex
        maxW={{ base: "100%", md: "40%" }}
        w="100%"
        alignItems={{ base: "null", md: "center" }}
        flexDir="column"
        px={{ base: "null", md: "4em" }}
      >
        <Flex justifyContent="center" p="2em">
          <Text
            fontSize="1.5em"
            fontWeight="700"
            color="#324094"
            userSelect="none"
          >
            LANGUAGE QUIZ
          </Text>
        </Flex>
        <Flex flexDir="column" w="100%" p="1em">
          <Flex alignItems="baseline" userSelect="none">
            <Text textAlign="left" fontSize="2.2em" fontWeight="700">
              Question {data[counter]?.id}
            </Text>
            <Text fontSize="1.5em" fontWeight="700" color="#7C7C7C">
              /9
            </Text>
          </Flex>
        </Flex>
        <Flex w="100%" h="10%" justifyContent="space-between">
           {data[counter]?.id===1? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===2? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===3? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===4? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===5? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===6? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===7? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===8? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           {data[counter]?.id===1? <Flex bgColor="red" w="15px" h="2px" />: answer ?<Flex bgColor="green" w="15px" h="2px"/>:<Flex bgColor="gray"w="15px" h="2px"/> }
           
           
        </Flex>
        <Flex p="1em" fontSize="1.2em">
          <Text>{data[counter]?.question_title}</Text>
        </Flex>
        <RadioGroup onChange={setAnswer} value={answer}>
          <Flex textAlign="left" flexDir="column" p="1em" dir="rtl">
            <Flex
              justifyContent="space-between"
              border="1px solid #E0E0E0"
              borderRadius="20px"
              p="1em"
              mb="1em"
              bgColor="#fff"
              _hover={{
                border: "1px solid #0AB54F",
                color: "#0AB54F",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              <Radio
                size="lg"
                colorScheme="#0AB54F"
                value="1"
                _checked={{
                  bgColor: "#0AB54F",
                  border: "1px solid #0AB54F",
                }}
              >
                {data[counter]?.first_answer}
              </Radio>
            </Flex>
            <Flex
              justifyContent="space-between"
              border="1px solid #E0E0E0"
              borderRadius="20px"
              p="1em"
              mb="1em"
              bgColor="#fff"
              _hover={{
                border: "1px solid #0AB54F",
                color: "#0AB54F",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
              }}
            >
              <Radio
                colorScheme="#0AB54F"
                size="lg"
                value="2"
                _checked={{
                  bgColor: "#0AB54F",
                  border: "1px solid #0AB54F",
                  color: "#0AB54F",
                }}
              >
                {data[counter]?.two_answer}
              </Radio>
            </Flex>
            <Flex
              justifyContent="space-between"
              border="1px solid #E0E0E0"
              borderRadius="20px"
              p="1em"
              mb="1em"
              bgColor="#fff"
              _hover={{
                border: "1px solid #0AB54F",
                color: "#0AB54F",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
              }}
            >
              <Radio
                size="lg"
                colorScheme="#0AB54F"
                value="3"
                _checked={{
                  bgColor: "#0AB54F",
                  border: "1px solid #0AB54F",
                  color: "#0AB54F",
                }}
              >
                {data[counter]?.three_answer}
              </Radio>
            </Flex>
            <Flex
              justifyContent="space-between"
              border="1px solid #E0E0E0"
              borderRadius="20px"
              p="1em"
              mb="1em"
              bgColor="#fff"
              _hover={{
                border: "1px solid #0AB54F",
                color: "#0AB54F",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
              }}
            >
              <Radio
                size="lg"
                colorScheme="#0AB54F"
                value="4"
                _checked={{
                  bgColor: "#0AB54F",
                  border: "1px solid #0AB54F",
                  color: "#0AB54F",
                }}
              >
                {data[counter]?.four_answer}
              </Radio>
            </Flex>
          </Flex>
        </RadioGroup>
        <Flex p="1em" pb="2em" justifyContent="space-between" w="100%">
          <Button
            bgColor="transparent"
            fontSize="1.5em"
            color="#5340FF"
            w="4.5em"
            h="2em"
            disabled={counter === 0}
            onClick={Back}
          >
            <AiOutlineArrowLeft />
            Back
          </Button>
          {counter >= data.length - 1 ? (
            <Button
              fontSize="1.5em"
              bgColor="#5340FF"
              color="#fff"
              w="4.5em"
              h="2em"
              borderRadius="0.5em"
              onClick={finishExam}
            >
              End
            </Button>
          ) : (
            <Button
              fontSize="1.5em"
              bgColor="#5340FF"
              color="#fff"
              w="4.5em"
              h="2em"
              borderRadius="0.5em"
              onClick={NextQuestion}
            >
              Next
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Question;
