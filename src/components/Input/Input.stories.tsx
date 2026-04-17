import type { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

const meta = {
    title: "Components/Input",
    component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const 基础输入框: Story = {
    args: {
        placeholder: "请输入内容",
    },
}

export const 禁用输入框: Story = {
    args: {
        placeholder: "此处不可输入",
        disabled: true,
    },
}

export const 密码输入框: Story = {
    args: {
        type: "password",
        placeholder: "请输入密码",
    },
}