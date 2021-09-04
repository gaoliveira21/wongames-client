import { Meta, Story } from '@storybook/react/types-6-0'

import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Most Popular'
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />
