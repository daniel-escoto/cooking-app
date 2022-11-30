import type { ComponentMeta } from '@storybook/react'

import CreateRecipePage from './CreateRecipePage'

export const generated = () => {
  return <CreateRecipePage />
}

export default {
  title: 'Pages/CreateRecipePage',
  component: CreateRecipePage,
} as ComponentMeta<typeof CreateRecipePage>
