import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helper'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('Should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('Should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should dispatch onCheck when label status changes', () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked={false} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    expect(onCheck).toHaveBeenCalledWith(true)

    userEvent.click(screen.getByRole('checkbox'))
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('Should dispatch onCheck when label status changes', () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('Should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()
    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
