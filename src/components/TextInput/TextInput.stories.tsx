import React from 'react';
import { TextInput } from "./TextInput";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Components/TextInput",
    component: TextInput,
    argTypes: {
        type: {
            options: ['text', 'password', 'email', 'date'],
            control: { type: 'select' }
        }
    }
} as ComponentMeta<typeof TextInput>;


const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'fname',
    label: 'First Name',
    placeholder: 'Enter your first name',
}

export const Password = Template.bind({});
Password.args = {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
}

