function ToDo(props) {
    let btnText = props.value.state ? 'done' : 'undone';
    return (
        <li>
            <p>{props.value.task}</p>
            <div>
                {props.value.state
                    ? <span style={{color: 'green'}}>Task is done</span>
                    : <span style={{color: 'red'}}>Task is not done</span>
                }
                <button style={{marginLeft: '15px'}} onClick={props.onClick}>
                Mark as {btnText}
                </button>
            </div>
        </li>
        );
}
 
export default ToDo;