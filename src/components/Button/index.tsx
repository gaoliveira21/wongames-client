import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    minimal={minimal}
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
