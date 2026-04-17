import type { Meta, StoryObj } from "@storybook/react";
import Multiselect from "./Multiselect";

const meta = {
    title: "Components/Multiselect",
    component: Multiselect,
} satisfies Meta<typeof Multiselect>;

export default meta;
type Story = StoryObj<typeof Multiselect>;

export const 基础多选框: Story = {
    args: {
        options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3", disabled: true },
            { label: "4", value: "4" },
        ],
        defaultValue: ["1"],
    },
};