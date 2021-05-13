
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false 
        };
    }
    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleVisibility}>
                    {this.state.visibility ? 'Hide Deets' : 'Show Deets'}
                </button>
                {this.state.visibility && <div>Deets are shown</div>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));














// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>This was hidden</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();





















// // my try at the chellenge
// const appRoot = document.getElementById('app')

// let btnName = 'Show It'

// const showIt = () => {
//         btnName = 'Hide It';
//         render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button  onClick={showIt}>{btnName}</button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render();
