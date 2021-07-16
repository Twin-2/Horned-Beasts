import React from 'react';
import Form from 'react-bootstrap/Form'

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
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        <Form.Label>How many horns are you looking for?</Form.Label>
                        <select onChange={this.selectHorns}>
                            <option>Number of Horns</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={100}>100</option>
                        </select>
                        <button onClick={this.onSubmit}>Find those horns!</button>

                    </Form.Group>
                </Form>
            </div>
        )
    }


}

export default Forms;