
// higher order component H.O.C ---> A component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>This is Private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>access denied</p>}
            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info={'this is the deets'}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info={'this is the deets'}/>, document.getElementById('app'));