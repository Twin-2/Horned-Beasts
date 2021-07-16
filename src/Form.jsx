import React from 'react';
import { Form, Button } from 'react-bootstrap'

class Forms extends React.Component {


    selectHorns = (e) => {
        e.preventDefault();
        this.props.selectedHorns(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.filter()
    }

    render() {
        return (
            <div>
                <Form id='selectHornsForm'>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        <Form.Label>How many horns are you looking for?</Form.Label>
                        <Form.Control
                            as='select'
                            onChange={this.selectHorns}
                            style={{ width: '100%' }}>
                            <option>Number of Horns</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={100}>100</option>
                        </Form.Control>
                        <button onClick={this.onSubmit}>Find those horns!</button>

                    </Form.Group>
                </Form>
            </div>
        )
    }


}

export default Forms;

<Form>
    <Form.Group >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>


    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>