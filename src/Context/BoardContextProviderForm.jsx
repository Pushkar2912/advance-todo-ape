import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export const  BoardContext = createContext();
export const TodoConext = createContext();

const BoardContextProvider = ({children}) => {

    const [boards, setBoards] = useState([]);
    const [todos, setTodos] = useState([]);

    const getBoard= async() =>{
        const {data} = await axios.get("https://todo-ape-pushkar.up.railway.app/v1/boards");
        setBoards(data.data.boards);
    }

    useEffect(()=>{
        getBoard();
    },[])

    const postBoard= async(payload)=>{
        const {data}= await axios.post("https://todo-ape-pushkar.up.railway.app/v1/boards",payload);
        const response = [...boards, data.data.board];
        setBoards(response);
    }

    const deleteBoard= async(id)=>{
        const {data}= await axios.delete(`https://todo-ape-pushkar.up.railway.app/v1/boards/${id}`)
        const response = boards.filter((board)=>{return (board._id !== id)})
        setBoards(response);
    }

    const handleAddTodo= async(id, payload)=>{
        const url= `https://todo-ape-pushkar.up.railway.app/v1/todos/${id}`
        const {data} = await axios.post(url, payload);
        const response = [...todos, data.data.todo];
        setTodos(response);
    }
    const fetchTodos= async(boardId) =>{
        const url = `https://todo-ape-pushkar.up.railway.app/v1/todos/${boardId}`
        const response = await axios.get(url);
        setTodos(response.data.todos);
     }

     const deleteTodo= async(boardId,id)=>{
        const url= `https://todo-ape-pushkar.up.railway.app/v1/todos/${boardId}/${id}`;
        const {data} = await axios.delete(url);
        const response= todos.filter((todo)=> todo._id !== id)
        setTodos(response);
     }

     const updateTodo= async(boardId, todoId, payload)=>{
        const url= `https://todo-ape-pushkar.up.railway.app/v1/todos/${boardId}/${todoId}`
        const {data} = await axios.put(url, payload);
        console.log(data);
        const response = todos.map((todo)=>{
            if(todo._id ===todoId){
                return data.data.todo
            }
            else{
                return todo
            }
        })
        setTodos(response);
     }

     const handleCompleteUpdate= async(boardId, todoId, payload)=>{
        const url = `https://todo-ape-pushkar.up.railway.app/v1/todos/${boardId}/${todoId}`
        const {data} = await axios.put(url, payload);
        const response = todos.map((todo)=>{
            if(todo._id ===todoId){
                return data.data.todo
            }
            else{
                return todo
            }
        })
        setTodos(response);
        
     }
     
    const values={
        boards,
        setBoards,
        getBoard,
        postBoard,
        deleteBoard,
        todos,
        setTodos,
        handleAddTodo,
        fetchTodos,
        deleteTodo,
        updateTodo,
        handleCompleteUpdate
    }

  return (
    <BoardContext.Provider value={values}>
        
        {children}
       
    </BoardContext.Provider>
  )
}

export default BoardContextProvider