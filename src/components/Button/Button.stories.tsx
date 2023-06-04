import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Marbella/Button",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

const renderButton = (args) => (
    <Button data-testId="InputField-id" {...args} />
);

export const Primary: Story = {
    render: renderButton
};
Primary.args = {
    primary: true,
    disabled: false,
    text: "Primary",
};

export const Secondary: Story = {
    render: renderButton
};
Secondary.args = {
    primary: false,
    disabled: false,
    text: "Secondary",
};

export const Disabled: Story = {
    render: renderButton
};
Disabled.args = {
    primary: false,
    disabled: true,
    text: "Disabled",
};

export const Small: Story = {
    render: renderButton
}
Small.args = {
    primary: true,
    disabled: false,
    size: "small",
    text: "Small",
};

export const Medium: Story = {
    render: renderButton
};
Medium.args = {
    primary: true,
    disabled: false,
    size: "medium",
    text: "Medium",
};

export const Large: Story = {
    render: renderButton
};
Large.args = {
    primary: true,
    disabled: false,
    size: "large",
    text: "Large",
};
