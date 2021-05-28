import authRecuder from '../../reducers/auth';

test('should set uid for log in', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authRecuder({}, action);
    expect(state.uid).toBe(action.uid)
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authRecuder({uid: 'abc123'}, action);
    expect(state).toEqual({});
});