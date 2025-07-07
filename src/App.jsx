import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./components/todo/Todo.jsx";
import { getFilteredTodos, fillTodo } from "./store/slice/stackTodosSlice.jsx";
import "./App.css";
import DownPanel from "./components/DownPanel/DownPanel.jsx";
import Modal from "./components/modal/modal.jsx";
import { Box } from "@mui/material";
import { sxDivPage1, sxDivPage2, sxHeader, sxMain } from "./sx.js";
import axios from "axios";

function App() {
  const stackTodos = useSelector((state) => state.stackTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(stackTodos.baseUrl)
      .then((response) => dispatch(fillTodo(response.data)));
  }, []);

  useEffect(() => {
    dispatch(getFilteredTodos());
  }, [stackTodos.todos, stackTodos.flag]);

  return (
    <>
      <Box component="header" sx={sxHeader}>
        <h1>todos</h1>
      </Box>
      <Box component="main" sx={sxMain}>
        <Modal />
        <Todo />
        <DownPanel />
      </Box>
      <Box component="div" className="background-page-1" sx={sxDivPage1} />
      <Box component="div" className="background-page-2" sx={sxDivPage2} />
    </>
  );
}

export default App;
