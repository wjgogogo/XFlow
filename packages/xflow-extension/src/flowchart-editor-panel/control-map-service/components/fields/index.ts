import InputFiled from './input'
import ColorPicker from './color'
import InputNumberFiled from './input-number'
import Size from './size'
import Position from './position'
import SelectField from './select'

export const EditorPanels: Record<string, React.FC | React.NamedExoticComponent<any>> = {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
}

export { InputFiled, ColorPicker, InputNumberFiled, Size, Position, SelectField }
