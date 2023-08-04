import { ActionIcon, Badge, Box, Card, Checkbox, Flex, Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import EditTodoModal from './EditTodoModal';
import { BoardContext } from '../Context/BoardContextProviderForm';

const Todo = ({ todo, deleteTodo, boardId }) => {

    const [openUpdateTodoModal, setOpenUpdateTodoModal] = useState(false);
    const [isComplete, setIsComplete] = useState(todo.isComplete);
    const { handleCompleteUpdate } = useContext(BoardContext);


    const openTodoModal = () => {
        setOpenUpdateTodoModal(true);
    }

    const closeTodoModal = () => {
        setOpenUpdateTodoModal(false);
    }

    // const handleCompletedChange = (e) => {
    //     setIsComplete(e.target.checked)
    // }

    const handleCompleteUpdateChange = () => {

        const values = {
            isComplete: !isComplete
        }

        handleCompleteUpdate(boardId, todo._id, values);
    }



    return (
        <>
            <EditTodoModal openUpdateTodoModal={openUpdateTodoModal} closeTodoModal={closeTodoModal} todo={todo} boardId={boardId} />
            <Card withBorder mt={10}>
                <Flex gap={10} direction={'column'}>
                    <Flex justify={'space-between'}>
                        <Text truncate>{todo.name}</Text>
                        <Checkbox onChange={handleCompleteUpdateChange} checked={todo.isComplete} />
                    </Flex>
                    <Box p={10} sx={{
                        borderRadius: 5
                    }} bg={'#f4f4f4'}>
                        <Text size= 'xs' color='#444'>{todo.desc}</Text>
                    </Box>
                    <Flex justify='flex-end' gap={10}>
                        <ActionIcon color='red' variant='subtle' onClick={() => deleteTodo(boardId, todo._id)}><MdDelete /></ActionIcon>
                        <ActionIcon color='green' variant='subtle' onClick={openTodoModal}><MdEdit /></ActionIcon>
                    </Flex>
                </Flex>
            </Card>
        </>

    )
}

export default Todo