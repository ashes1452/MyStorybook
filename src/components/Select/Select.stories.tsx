import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"
const meta = {
    title: "Components/Select",
    component: Select,
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const 基础选择器: Story = {
    args: {
        mode: "single",
        options: [
            { label: "111", value: "111" },
            { label: "222", value: "222" },
            { label: "333", value: "333", disabled: true },
            { label: "444", value: "444" },
        ],
    },
}
