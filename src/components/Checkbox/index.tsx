import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)
