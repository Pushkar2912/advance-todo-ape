import React from 'react'
import { Flex, Header as MantineHeader, Text } from '@mantine/core'
import { FcTodoList } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <MantineHeader height={60}>
        <Flex justify="center" align='center' gap={10} h={'100%'}>
          <FcTodoList size={20}/>
          <Text weight={500} color='#1E90FF'>Todo Ape</Text>
        </Flex>
    </MantineHeader>
  )
}

export default Header