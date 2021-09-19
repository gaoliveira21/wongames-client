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
})
