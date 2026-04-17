import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;
export const 主要按钮: Story = {
    args: {
        type: 'primary',
        size: 'medium',
        message: '主要按钮',
    },
};

export const 默认按钮: Story = {
    args: {
        type: 'default',
        size: 'medium',
        message: '默认按钮',
    },
};

export const 虚线按钮: Story = {
    args: {
        type: 'dashed',
        size: 'medium',
        message: '虚线按钮',
    },
};

export const 链接按钮: Story = {
    args: {
        type: 'link',
        size: 'medium',
        message: '链接按钮',
    },
};

export const 文字按钮: Story = {
    args: {
        type: 'text',
        size: 'medium',
        message: '文字按钮',
    },
};