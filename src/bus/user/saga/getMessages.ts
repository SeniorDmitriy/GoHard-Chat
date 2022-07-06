// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL, USER_ID } from '../../../init/constants';

// Action
export const getMessagesAction = createAction(`${sliceName}/GET_USER_MESSAGES_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* getMessages() {
    yield makeRequest<User>({
        fetchOptions: {
            successStatusCode: 200,
            fetch:             () => fetch(`${API_URL}/messages`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        },
        succes: function* (result) {
            yield console.log(result);
            // yield put(userActions.setUser(result));
        },
    });
}

// Watcher
export function* watchGetMessages(): SagaIterator {
    yield takeLatest(getMessagesAction.type, getMessages);
}
