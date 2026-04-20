import type { Meta, StoryObj } from "@storybook/react"
import Form from "./Form"
const meta = {
    title: "Components/Form",
    component: Form,
    argTypes: {
    },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof Form>

export const 基础表单: Story = {
    args: {

    },
}
