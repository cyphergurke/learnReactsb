import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Primary, Red } from './Button.stories';

const label = "Click me"
test("should render Button", () => {

    render(<Button label={label} />)
    const btnElm = screen.getByRole("button");
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent(label);
});


test("should render Primary Button", () => {
    render(<Primary label={label} {...Primary.args} />);
    const btnElm = screen.getByRole("button");
    expect(btnElm).toHaveClass('storybook-button--primary');
});

test("should render Red Button", () => {
    render(<Red label={label} {...Red.args} />);
    const btnElm = screen.getByRole("button");
    expect(btnElm).toHaveStyle("background-color: red")
});