import CalculationElement from '../CalculationElement'
import { IProps } from '../Expressions/type'

const Expressions = ({ items }: IProps) => {
  return (
    <ul>
      {items.map(item => (
        <CalculationElement item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default Expressions
