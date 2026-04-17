import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const 成功提示: Story = {
  args: {
    type: 'success',
    message: '成功提示',
  },
}

export const 信息提示: Story = {
  args: {
    type: 'info',
    message: '信息提示',
  },
}

export const 警告提示: Story = {
  args: {
    type: 'warning',
    message: '警告提示',
  },
}

export const 错误提示: Story = {
  args: {
    type: 'error',
    message: '错误提示',
  },
}

export const 可描述: Story = {
  args: {
    type: 'success',
    message: '提交成功',
    description: '您的表单已经成功提交',
  },
}

export const 可关闭: Story = {
  args: {
    type: 'info',
    message: '可关闭提示',
    closable: true,
  },
}