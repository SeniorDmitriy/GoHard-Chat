// Core
import styled from 'styled-components';

//Asset
import shurikenBgIcon from '../../../assets/icons/shuriken.svg';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${shurikenBgIcon});
    background-repeat: repeat;
    background-size: 100% 100%;
    background-position: center;
`;

export const Title = styled.h1`
    font-family: 'Inter-Black';
    font-weight: 900;
    font-size: 32px;
    line-height: 34px;
    color: #55BBF8;
`;

export const AccentTitleWord = styled.span`
    color: #E15A32;
`;

export const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
`;

export const LogoutBtn = styled.button`
    display: block;
    font-family: 'Inter-Black';
    font-weight: 900;
    width: 50%;
    padding: 15px 10px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: inset 0px -5px 0px rgba(0, 0, 0, 0.3);
    border-radius: 6px; 
    color: #000;
    transition: ease-in-out 0.1s background-color, ease-in-out 0.2s color;
    cursor: pointer;

    &:hover {
        background-color: #E15A32;
        color: var(--text);
        transition: ease-in-out 0.1s background-color, ease-in-out 0.2s color;
    }
`;

export const Chat = styled.div`
    padding: 10px 20px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    height: 40vh;
    overflow-y: auto;
    background: #6C6C6C;
`;

export const Message = styled.div`
    background: rgba(255, 255, 255, 0.43);
    width: fit-content;
    padding: 10px 6px;
    color: #0E0E0E;
    margin-bottom: 10px;
`;

export const UserName = styled.span`
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
`;

export const UserMessage = styled.p`
    font-size: 16px;
    word-break: break-all;
`;

export const DispatchTime = styled.time`

`;

export const DecorImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
    position: relative;
`;
