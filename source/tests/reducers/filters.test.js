import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sort by amount', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
    const text = 'bill';
    const action = {
        type: 'TEXT_FILTER',
        text
    }
    const state = filterReducers(undefined, action);
    expect(state.text).toBe('bill')
});


test('should set start date filter', () =>  {
    const startDate = moment();
    const action = {
        type: 'START_DATE',
        start: startDate
    };
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(action.start);
});

test('should set end date filter', () =>  {
    const endDate = moment();
    const action = {
        type: 'END_DATE',
        end: endDate
    };
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(action.end);
});