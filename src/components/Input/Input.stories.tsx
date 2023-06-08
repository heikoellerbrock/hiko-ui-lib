import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Atoms/Input",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

const renderInput = (args: any) => (
    <Input data-testId="InputField-id" {...args} />
);

export const InputField: Story = {
    render: renderInput
};
InputField.args = {
    error: false,
    disabled: false,
    label: "InputField",
    success: false,
    message: ''
};
