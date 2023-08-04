import { Flex } from '@mantine/core'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddTodo from './AddTodo';
import Todos from './Todos';
import { BoardContext } from '../Context/BoardContextProviderForm';

const BoardTodos = () => {
    const { boardId } = useParams();
    const { fetchTodos, todos } = useContext(BoardContext);

    const incompleteTodos = todos.filter((todo) => todo.isComplete === false)
    const completeTodos = todos.filter((todo) => todo.isComplete === true)



    useEffect(() => {
        if (boardId) {
            fetchTodos(boardId);
        }
    }, [boardId])


    return (
        <Flex gap={20} mt={20} >
            <Todos title='Incomplete Todos' todos={incompleteTodos} boardId={boardId} />
            <AddTodo boardId={boardId} />
            <Todos title='Complete Todos' todos={completeTodos} boardId={boardId} />
        </Flex>
    )
}

export default BoardTodos