import { Button, Flex, Group, Modal, TextInput, Title } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { MdClose } from 'react-icons/md'
import { BoardContext } from '../Context/BoardContextProviderForm'
import { Link, useParams } from 'react-router-dom'


const Board = () => {

    const [openMoadal, setOpenModal] = useState(false);
    const { boards, setBoards, getBoard, postBoard, deleteBoard, fetchTodos } = useContext(BoardContext);
    const [boardName, setBoardName] = useState('');
    const param = useParams();



    const openBoradModal = () => {
        setOpenModal(true);
    }

    const closeBoradModal = () => {
        setOpenModal(false);
    }

    const handleBoardNameChange = (e) => {
        setBoardName(e.target.value);
    }

    const submitAddBoard = async (e) => {
        e.preventDefault();

        const boardData = {
            name: boardName
        }

        await postBoard(boardData);
        setOpenModal(false);
        setBoardName('');


    }

    const handleDelete = (id) => {
        deleteBoard(id);
    }

    const getTodos = (id) => {
        fetchTodos(id);
    }


    return (
        <>
            <Modal title={<Title order={4} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add Board</Title>} opened={openMoadal} onClose={closeBoradModal}>
                <form onSubmit={submitAddBoard}>
                    <Flex gap={20} direction={'column'}>
                        <TextInput label="Name" placeholder='Eg. Facebook' value={boardName} onChange={handleBoardNameChange}></TextInput>
                        <Button type='submit'>Submit</Button>
                    </Flex>
                </form>
            </Modal>

            <Group>
                <Flex gap={10}>
                    <Flex gap={10}>
                        {
                            boards.map((board) => {
                                return (
                                    <Flex key={board._id}>
                                        <Button variant='light' onClick={() => getTodos(board._id)} component={Link} to={`/todos/${board._id}`} rightIcon={<MdClose onClick={() => handleDelete(board._id)} />}>{board.name}</Button>
                                    </Flex>
                                )
                            })
                        }
                    </Flex>
                    <Flex>
                        <Button onClick={openBoradModal} variant='filled' color='dorgerBlue' rightIcon={<LuPlus />}>Add Board</Button>
                    </Flex>
                </Flex>
            </Group>
        </>
    )
}

export default Board