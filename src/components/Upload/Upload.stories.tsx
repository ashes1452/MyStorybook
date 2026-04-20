import type { Meta, StoryObj } from "@storybook/react"
import Upload from "./Upload"

const meta = {
    title: "Components/Upload",
    component: Upload,
} satisfies Meta<typeof Upload>

export default meta
type Story = StoryObj<typeof Upload>

export const 基础上传: Story = {
    args: {
        text: "点击上传文件",
    }
}