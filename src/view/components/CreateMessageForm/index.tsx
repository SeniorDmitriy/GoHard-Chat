// Core
import React, { FC } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useKeyboard } from '../../../bus/client/keyboard';
import { useTogglersRedux } from '../../../bus/client/togglers';
// Styles
import * as S from './styles';

// Types
type PropTypes = {
    keybortRef: React.MutableRefObject<HTMLDivElement | null>
}

// Asset
import keyboardIcon from '../../../assets/icons/keyboard.png';

export const CreateMessageForm: FC<PropTypes> = ({ keybortRef }) => {
    const { keyboard, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const { user } = useUser();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { createMessage } = useMessages();

    const keybordBtns = keybortRef.current?.querySelectorAll('button');

    const handleKeyboard = () => {
        setTogglerAction({ type: 'isKeyboardOpen', value: !togglersRedux.isKeyboardOpen });
    };

    const handleCreateMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (keyboard) {
            createMessage({ username: user?.username, text: keyboard.text });
            resetKeybordWords();
        }

        if (keybordBtns) {
            keybordBtns.forEach((el) => el.removeAttribute('style'));
        }
    };

    return (
        <S.Container>
            <S.Btn onClick = { handleKeyboard }>
                <img src = { keyboardIcon } />
            </S.Btn>
            <S.Form onSubmit = { handleCreateMessage }>
                <S.Input
                    type = 'text'
                    value = { keyboard.text }

                    onChange = { (event) => {
                        const value = event.target.value;
                        resetKeybordWords();
                        getKeyboardWord(value);
                    }  }

                    onKeyDown = { (event) => {
                        if (keybortRef.current) {
                            const keyboardReff = keybortRef.current;
                            const clickBtnValue = event.keyCode;
                            const keybordBtn = keyboardReff.querySelector(`button[value = '${clickBtnValue}']`);

                            if (keybordBtn) {
                                keybordBtn.setAttribute('style', 'background-color:#E15A32; border-color: #fff');
                            }
                        }
                    } }

                    onKeyUp = { (event) => {
                        if (keybortRef.current) {
                            const keyboardReff = keybortRef.current;
                            const clickBtnValue = event.keyCode;
                            const keybordBtn = keyboardReff.querySelector(`button[value = '${clickBtnValue}']`);

                            if (keybordBtn) {
                                keybordBtn.setAttribute('style', 'background-color:#ccc; border-color: none');
                            }
                        }
                    } }
                />
                <S.SubmitBtn
                    disabled = { !keyboard.text }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
