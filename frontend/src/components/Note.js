import { Card, Button } from 'react-bootstrap';

const Note = ({title, body}) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {body}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Note;