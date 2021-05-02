import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NoteInput = () => {
    return (
        <div>
            <p>Title: </p>
            <InputGroup className="mb-3">
                <FormControl
                aria-label="Title"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <p>Body: </p>
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>

            <p>Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</p>

            <Button variant="primary">Submit</Button>
        </div>
    )
}

export default NoteInput;