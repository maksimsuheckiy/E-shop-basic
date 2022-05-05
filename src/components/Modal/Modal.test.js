import React from "react";
import Modal from "./Modal";
import {Provider} from "react-redux";
import store from "../../redux/store";
import Button from "../Button/Button";
import { render } from "@testing-library/react";

describe('testing modal windows', () => {
    test('test render buttons of modal', () => {
        const wrapper = render(
            <Provider store={store}>
                <Modal actions={{
                    ok: <Button className='modal__btn' text='Confirm'/>,
                    cancel: <Button className='modal__btn' text='Cancel'/>
                }}/>
            </Provider>
        )

        const btn = wrapper.findAllByTestId('btn')
        expect(btn).not.toBeUndefined();
    })
})