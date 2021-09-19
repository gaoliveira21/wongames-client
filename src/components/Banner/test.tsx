import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { Banner } from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Banner
        img={'https://source.unsplash.com/user/willianjusten/1042x580'}
        title={'Defy death'}
        subtitle={'subtitle'}
        buttonLabel={'Buy now'}
        buttonLink={'/games/defy-death'}
      />
    )

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        img={'https://source.unsplash.com/user/willianjusten/1042x580'}
        title={'Defy death'}
        subtitle={'subtitle'}
        buttonLabel={'Buy now'}
        buttonLink={'/games/defy-death'}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
