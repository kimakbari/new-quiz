import axios from "axios";
import { useState, useEffect } from "react";
import Question from "../../components/Question";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";

const getQuestions = async () => {
  const res = await axios.get("https://quize.arcatech.dev/api/getQuestions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  return res
}
function Index() {
  const { data, status } = useQuery("questions", getQuestions)
  // const data = getQuestions()
  // console.log(data.then((res) => console.log(res)))

  console.log(data?.data.content)
  console.log(data?.data.message)

  return (
    <>
      {data !== undefined ? (
        <Question data={data?.data.content} />
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default Index
