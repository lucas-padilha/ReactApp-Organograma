import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css'
import { useState } from 'react';


const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const[nome, setNome] = useState('Padilhao')
    const[cargo, setCargo] = useState('setr')
    const[imagem, setImagem] = useState('aeee')
    const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado(
            {
                nome, 
                cargo,
                imagem, 
                time
            }
        )
        console.log("Form Submetido", nome, cargo, imagem, time)
    }
   
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor =>setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto valor={cargo} aoAlterado={valor =>setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto valor={imagem} aoAlterado={valor =>setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Coloque uma imagem"/>
                <ListaSuspensa valor={time} aoAlterado={valor =>setTime(valor)} obrigatorio={true} label="Time" itens={times}></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao> 
            </form>
        </section>

    )
}

export default Formulario