import { ListGroup, Button } from 'react-bootstrap';


function ToDo(props) {
    var attr = {};
    if (props.value.state) {
        attr['disabled'] = 'disabled';
    }
    return (
        <ListGroup.Item as='li' {...attr}>
            <div className='d-flex align-items-center justify-content-between'>
                <p className="mb-0">{props.value.task}</p>
                {props.value.state
                    ? <Button className="ml-2" onClick={props.onClick} variant="success" size='sm'>✓</Button>
                    : <Button className="ml-2" onClick={props.onClick} variant="danger" size='sm'>✕</Button>
                }
            </div>
        </ListGroup.Item>
        );
}
 
export default ToDo;