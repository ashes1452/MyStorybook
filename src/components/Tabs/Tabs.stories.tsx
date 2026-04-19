import type { Meta, StoryObj } from "@storybook/react"
import Tabs from "./Tabs"

const meta = {
    title: "Components/Tabs",
    component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const 基础标签页: Story = {
    args: {
        items: [
            { label: "111", key: "111" ,content:<div>111内容</div>},
            { label: "222", key: "222" ,content:<div>222内容</div>},
            { label: "333", key: "333", disabled: true ,content:<div>333内容</div>},
            { label: "444", key: "444" ,content:<div>444内容</div>},
        ],
    },
}