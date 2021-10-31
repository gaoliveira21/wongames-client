import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id={labelFor}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
