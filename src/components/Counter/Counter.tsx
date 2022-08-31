import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';


interface iProps {
    color: string;
    //  count: number;
}

export default function Counter({ color }: iProps) {
    const [count, setCount] = useState<number>(0)

    const handleOnClick = (evtType: string) => {
        if (evtType === "Add") {
            setCount(count + 1);
            console.log("add Button click", count);
            return;
        }
        setCount(count - 1);
        console.log("sub button Click", count);
    };

    return (
        <>
            <span style={{ color }}>Counter: { }</span>
            <Button onClick={() => handleOnClick("Add")} primary={true} size="large" backgroundColor={color} label='+' />
            <Button onClick={() => handleOnClick("")} primary={true} size="large" backgroundColor='green' label='-' />
        </>
    )
}

Counter.propTypes = { color: PropTypes.string, };