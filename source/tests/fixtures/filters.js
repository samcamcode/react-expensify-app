import moment from 'moment';


const filters = {
    text: '',
    sortBy: 'date', 
    setStartDate: undefined,
    setEndDate: undefined
};

const altFilters = {
    text: 'bill',
    sortBy: 'amount', 
    setStartDate: moment(0),
    setEndDate: moment().add(3, 'days')
};

export {filters, altFilters};