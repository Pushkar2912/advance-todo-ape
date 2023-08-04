import { Card, Divider, Title } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { BoardContext } from '../Context/BoardContextProviderForm'
import Todo from './Todo'



const Todos = ({ title, todos, boardId }) => {

    const { deleteTodo } = useContext(BoardContext);

    return (
        <>


            <Card padding='lg' radius='lg' w='100%'>
                <Title order={2} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{title}</Title>
                <Divider my={30}/>
                {todos.map((todo) => {
                    return (

                        <Todo todo={todo} deleteTodo={deleteTodo} boardId={boardId} key={todo._id} />

                    )
                })}
            </Card>
        </>

    )
}

export default Todos