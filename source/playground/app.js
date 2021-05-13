

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
            // do nothing
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        } 
    }
    componentWillUnmount() {
        console.log('will unmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const i = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[i])
    }
    handleAddOption(option) {
        if (!option) {
            return 'enter valid item'
        }else if (this.state.options.indexOf(option) > -1) {
            return 'this already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlepick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOptions 
                    handleaddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );    
};

Header.defaultProps = {
    title: 'Indecision App'
};  

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlepick}
            disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add an option to get started</p>}
            {props.options.map(opt => <Option key={opt} optionText={opt} handleDeleteOption={props.handleDeleteOption}/>)}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}
            >Remove
            </button>
        </div>
    );
};

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleaddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    } 
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
// ReactDOM.render(<User name='Samuel' age={36}/>, document.getElementById('app'));
// stateless functional component


///////// --- no longer used when IndecisionApp was created
// const jsx = (
//     <div>
//         
//         <Header />
//         <Action />
//         <Options />
//         <AddOPtions />
//     </div>
// )
// ReactDOM.render(jsx, document.getElementById('app'));
