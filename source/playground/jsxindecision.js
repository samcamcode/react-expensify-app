console.log('hi')

//JSX = JavaScript XML
// var template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is some info</p>
//         <ul>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ul>
//     </div>
// );

// var challengeTemplateTwo = (
//     <div>
//         <h1>Samuel Camacho</h1>
//         <p>Age: 36</p>
//         <p>Location: LA</p>
//     </div>
// );



// var userName = "Sam Cam";
// var userAge = 37;
// var userLocation = 'Los Angeles';
// const user = {
//     name: 'Samuel',
//     age: 36,
//     location: 'Azusa'
// };

// function getLocation(location) {
//     if (location) {
//         // return location;
//         return <p>Location: {location}</p>
//     }
// }

// const challengeTemplateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'secret'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* <p>Location: {getLocation(user.location)}</p> */}
//         {getLocation(user.location)}
//     </div>
// );

const app = {
    title: 'Indecision App',
    subtitle: 'Some more info',
    options: []
};

const onFormSubmit= (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length >0 ? 'Here are your options' : 'no options available'}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map(opt => <li key={opt}>{opt}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

renderApp();