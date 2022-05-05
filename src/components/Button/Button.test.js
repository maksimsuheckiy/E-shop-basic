import '@testing-library/jest-dom/extend-expect';
import React from "react";
import Button from "./Button";
import {render, fireEvent, screen} from "@testing-library/react";

describe('Testing Button.js', () => {
    const {getByTestId} = screen;

    test('testing the props of the text', () => {
        render(<Button text='Add to cart'/>)

        const btn = getByTestId('btn');
        expect(btn).toHaveTextContent('Add to cart');
    })

    test('testing the props of classes', () => {
        render(<Button classes='product__control-add' text='Add to cart'/>)

        const btn = getByTestId('btn');
        expect(btn).toHaveClass('product__control-add');
    })

    test('testing handle click', () => {
        const mockFunc = jest.fn();

        render(<Button text='Button' onClick={new mockFunc()}/>);
        const btn = getByTestId('btn');

        fireEvent(btn, new MouseEvent('click'));
        expect(mockFunc).toBeCalled();
    });
})