import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta = {
    title: "Components/Icon",
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        type: "home",
        size: 16,
        color: "#1890ff",
    },
};

export const AllIcons: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "12px", fontSize: 18 }}>
            <Icon type="home" />
            <Icon type="user" />
            <Icon type="setting" />
            <Icon type="search" />
            <Icon type="check" color="green" />
            <Icon type="close" color="red" />
            <Icon type="down" />
        </div>
    ),
};