import { useState } from "react";
import { Button, Container,Form, FormGroup, Input, Label } from "reactstrap";


const EstadoInicial = {
    nombre:'',
    posicion:''
}

const FormJugador = ({agregarFn}) => {

    const [formulario, setFormulario] = useState(EstadoInicial);

    const guardarJugador = e => {
        e.preventDefault();
        agregarFn(formulario);
        setFormulario(EstadoInicial);
    }

    return(
        <Container>
            <Form onSubmit={guardarJugador}>
                <FormGroup>
                    <Label>Nombre: </Label>
                    <Input type="text" name="nombre" placeholder="nombre..."></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Posicion: </Label>
                    <Input type="text" name="posicion" placeholder="posicion..."></Input>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" color="primary">Agregar</Button>
                </FormGroup>
            </Form>
        </Container>
    )

}
export default FormJugador;