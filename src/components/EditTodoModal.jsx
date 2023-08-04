import { Button, Flex, Modal, TextInput, Title } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { BoardContext } from '../Context/BoardContextProviderForm';

const EditTodoModal = ({ openUpdateTodoModal, closeTodoModal, todo, boardId }) => {

    const [name, setName] = useState(todo.name);
    const [desc, setDesc] = useState(todo.desc);
    const { updateTodo } = useContext(BoardContext);



    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const handleUpdateTodoSubmit = async (e) => {

        e.preventDefault();
        const values = {
            name,
            desc
        }

        await updateTodo(boardId, todo._id, values);
        closeTodoModal();
    }

    return (
        <Modal title={<Title order={4} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Update Todo</Title>} opened={openUpdateTodoModal} onClose={closeTodoModal}>
            <form onSubmit={handleUpdateTodoSubmit}>
                <Flex gap={20} direction={'column'}>
                    <TextInput label="Name" value={name} onChange={handleNameChange}></TextInput>
                    <TextInput label="Description" value={desc} onChange={handleDescChange}></TextInput>
                    <Button type='submit'>Submit</Button>
                </Flex>
            </form>
        </Modal>

    )
}

export default EditTodoModal