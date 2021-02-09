import { Button } from "react-bootstrap";

function Extra(props) {
    return (
        <div className="mt-5">
            <h3 className="mb-3">Extra Features</h3>
            <Button variant='info' onClick={() => props.onClick()}>Clear cache</Button>
        </div>
    )
}
export default Extra;