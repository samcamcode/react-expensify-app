

// Action SORT BY TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
});

// Action SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Action SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Action SET START DATE
export const setStartDate = (start) => ({
    type: 'START_DATE',
    start
});

// Action SET END DATE
export const setEndDate = (end) => ({
    type: 'END_DATE',
    end
});