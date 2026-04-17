import type { Meta, StoryObj } from '@storybook/react'
import Menu from './Menu'

const meta = {
    title: 'Components/Menu',
    component: Menu,
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof Menu>

const items = [
    { label: '高等数学', key: '高等数学' },
    {
        label: '数据结构',
        key: '数据结构',
        children: [
            { label: '看不懂', key: '看不懂' },
            { label: '听不懂', key: '听不懂' },
            { label: '学不会', key: '学不会', disabled: true },
        ]
    },
    { label: '普通物理', key: '普通物理' },
    { label: '想不到名字', key: '想不到名字', disabled: true },
]

export const 下拉菜单: Story = {
    args: {
        mode: 'horizontal',
        items,
    },
}