import { Button, Card, Divider, Flex, TextInput, Textarea, Title } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { BoardContext } from '../Context/BoardContextProviderForm';

const AddTodo = ({ boardId }) => {

    const { handleAddTodo } = useContext(BoardContext);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const handleAddTodoSubmit = async (e) => {

        e.preventDefault();

        const values = {
            name,
            desc
        }
        await handleAddTodo(boardId, values);
        setName('');
        setDesc('');
    }

    return (
        <Card padding='lg' radius='md' w='100%'>
            <Title order={2} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add Todos</Title>
            <Divider my={30}/>
            <form onSubmit={handleAddTodoSubmit}>
                <Flex gap={10} direction={'column'}>
                    <TextInput placeholder='Eg. Bring Milk' label="Name" value={name} onChange={handleNameChange}></TextInput>
                    <Textarea label="Description" value={desc} onChange={handleDescChange}></Textarea>
                    <Button type='submit'>Submit</Button>
                </Flex>
            </form>
        </Card>
    )
}

export default AddTodo