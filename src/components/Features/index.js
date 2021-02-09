import { Row, Col } from 'react-bootstrap'

function Features() {
    return (
        <Row className="mt-5">
            <Col>
                <h3 className="mb-3">Implemented Features</h3>
                <ul>
                    <li>Add new tasks</li>
                    <li>Toggle task's state</li>
                    <li>Save & Load Tasks from "localStorage"</li>
                    <li>Add to your mobile (manifest.json)</li>
                </ul>
            </Col>
            <Col>
                <h3 className="mb-3">Feather features</h3>
                <ul>
                    <li>Make it work offline</li>
                    <li>Remove Task</li>
                    <li>Sort Tasks</li>
                </ul>
            </Col>
        </Row>
    )
}

export default Features;