import { useContext } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import DeleteIcon from '@mui/icons-material/Delete'

import { MyContext } from '../../../context'

import { IProps } from './type'

const CalculationElement = ({ item }: IProps) => {
  const { id, sign, value, isDisabled } = item

  const { handleRemove, handleDisabled, onChange, handleChange } = useContext(MyContext)

  return (
    <Stack direction="row" alignItems="center" spacing={2} marginTop={2}>
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Sign</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sign"
          value={sign}
          onChange={handleChange(id)}
          disabled={isDisabled}
        >
          <MenuItem value="-">-</MenuItem>
          <MenuItem value="+">+</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Number"
        type="number"
        value={value}
        variant="outlined"
        onChange={onChange(id)}
        disabled={isDisabled}
      />
      <Button
        variant="outlined"
        disabled={isDisabled}
        startIcon={<DeleteIcon />}
        color="error"
        onClick={handleRemove(id)}
      >
        Delete
      </Button>
      <Button onClick={handleDisabled(id)} variant="contained">
        Disabled
      </Button>
    </Stack>
  )
}

export default CalculationElement
