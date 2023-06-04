import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Marbella/InputField",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

const renderInput = (args: any) => (
    <Input data-testId="InputField-id" {...args} />
);

export const Primary: Story = {
    render: renderInput
};
Primary.args = {
    error: false,
    disabled: false,
    label: "Primary",
};

export const Success: Story = {
    render: renderInput
};
Success.args = {
    error: false,
    success: true,
    disabled: false,
    label: "Success",
};

export const Error: Story = {
    render: renderInput
};
Error.args = {
    error: true,
    disabled: false,
    message: "Error",
};

export const Disabled: Story = {
    render: renderInput
};
Disabled.args = {
    disabled: true,
    label: "Disabled",
};
