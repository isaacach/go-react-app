import { Box, MantineProvider } from "@mantine/core";
import useSWR from "swr";
import AddTodo from "./components/AddTodo";

export interface Todo {
  id; 
  title; 
  body; 
  done;
}

export const ENDPOINT = 'http://localhost:4000'

const fetcher = url => fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

export default function App() {

  const {data, mutate} = useSWR('api/todos', fetcher)

  return (
    <MantineProvider defaultColorScheme="dark">
      <Box bg="red.5" my="xl" component="a" href="/">
        {JSON.stringify(data)}

        <AddTodo mutate = { mutate }/>

      </Box>
    </MantineProvider>
  )
}


