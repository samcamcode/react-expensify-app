import moment from 'moment';
import {
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate
} from '../../actions/filters';

test('should set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'START_DATE',
        start: moment(0)
    })
});

test('should set end date object', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'END_DATE',
        end: moment(1)
    })
});

test('should set sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should set sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});

test('should set text filter with passed text', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'bill'
    })
});

test('should reset text filter to blank', () => {
    expect(setTextFilter()).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    })
});