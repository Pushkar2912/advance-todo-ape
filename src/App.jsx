import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppShell } from '@mantine/core'
import Header from './components/common/Header'
import Board from './components/Board'
import BoardTodos from './components/BoardTodos'
import BoardContextProvider from './Context/BoardContextProviderForm'

const App = () => {


  return (

    <AppShell
      padding="md"
      header={<Header>{/* Header content */}</Header>}
    >
      <BoardContextProvider>
      {/* Your application here */}

     <Board/> 

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todos/:boardId' element={<BoardTodos/>}/>
    </Routes>
    </BoardContextProvider>
    </AppShell>
  )
}

export default App