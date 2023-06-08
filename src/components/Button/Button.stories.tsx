import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Atoms/Button",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

const renderButton = (args: any) => (
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
