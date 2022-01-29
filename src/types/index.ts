import { SelectChangeEvent } from '@mui/material'

export interface IData {
  id: string
  sign: string
  value: number
  isDisabled: boolean
}

export interface IContext {
  handleRemove: (id: string) => () => void
  handleDisabled: (id: string) => () => void
  onChange: (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
  handleChange: (id: string) => (event: SelectChangeEvent<string>) => void
}
