import Counter from "./Counter";

export default {
    title: 'Components/Counter',
    component: Counter
}

const Template = (args: any) => <Counter {...args} />;

export const Default = Template.bind({});

