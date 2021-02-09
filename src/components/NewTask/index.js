import { Button, Form, InputGroup } from 'react-bootstrap';

function NewTask(props) {
    return (
        <Form className="mt-5" onSubmit={props.onSubmit}>
            <h3 className="mb-3">Create new task</h3>
            <InputGroup controlId="newTask">
                <InputGroup.Prepend>
                    <InputGroup.Text>Task:</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text" 
                    value={props.value}
                    placeholder={'What is your task?'} 
                    onChange={props.onChange} />
                    <InputGroup.Append>
                        <Button variant="primary" type={'submit'}>Create</Button>
                    </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default NewTask;