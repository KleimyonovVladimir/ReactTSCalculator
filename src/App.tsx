import React, { useState } from 'react'

import { SelectChangeEvent } from '@mui/material'
import Button from '@mui/material/Button'

import Expressions from './components/blocks/Expressions'
import { MyContext } from './context'
import { guid } from './helpers'
import { IData } from './types'

const App = () => {
  const [expressions, setExpressions] = useState<IData[]>([])

  const handleAdd = () => {
    const newElement = {
      id: guid(),
      sign: '+',
      value: 0,
      isDisabled: false,
    }

    setExpressions([...expressions, newElement])
  }

  const handleDisabled = (rowId: string) => () => {
    const mappedExpressions = expressions.map(item => ({
      ...item,
      isDisabled: item.id === rowId ? !item.isDisabled : item.isDisabled,
    }))

    setExpressions(mappedExpressions)
  }

  const handleRemove = (rowId: string) => () => {
    setExpressions(expressions.filter(({ id }) => id !== rowId))
  }

  const onChange = (rowId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value

    const mappedExpressions = expressions.map(item => ({
      ...item,
      value: item.id === rowId ? Number(number) : item.value,
    }))

    setExpressions(mappedExpressions)
  }

  const handleChange = (rowId: string) => (event: SelectChangeEvent<string>) => {
    const sign = event.target.value

    const mappedExpressions = expressions.map(item => ({
      ...item,
      sign: item.id === rowId ? sign : item.sign,
    }))

    setExpressions(mappedExpressions)
  }

  const resultOfExpressions = () => {
    return expressions
      .filter(expression => !expression.isDisabled)
      .reduce((acc, current) => {
        const { value, sign } = current

        const number = Number(`${sign}${value}`) || 0

        return acc + number
      }, 0)
  }

  return (
    <MyContext.Provider value={{ handleChange, handleDisabled, onChange, handleRemove }}>
      <div className="App">
        <Button variant="outlined" sx={{ marginBottom: '10px' }} type="submit" onClick={handleAdd}>
          Add
        </Button>
        <Expressions items={expressions} />
        <div>
          Total: <strong>{resultOfExpressions()}</strong>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App
