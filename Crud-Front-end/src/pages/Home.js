import React, { useState } from 'react';
import '../styles/pages/home.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from '../api';


const Home = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [salary, setSalary] = useState('');
    const [office, setOffice] = useState('');
    const [startDate, setStartDate] = useState(new Date());


    async function getUser() {
        try {
            const response = await api.post('/Funcionario');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const options = [
        { value: 'Diretor', label: 'Diretor' },
        { value: 'Desenvolvedor frontend', label: 'Desenvolvedor frontend' },
        { value: 'Desenvolvedor backend', label: 'Desenvolvedor backend' },
        { value: 'Design', label: 'Design' },

    ]

    return (
        <div className="home">

            <div className="form">
                <h2 className="title-h1">Formulário de Fincionário</h2>
                <h3 className="title">Nome</h3>
                <input
                    type="text"
                    className="form-name"
                    value={name}
                    onChange={setName}
                />

                <h3 className="title">Sobrenome</h3>
                <input
                    type="text"
                    className="form-name"
                    value={surname}
                    onChange={setSurname}
                />

                <h3 className="title">Salario</h3>
                <input
                    type="text"
                    className="form-name"
                    value={salary}
                    onChange={setSalary}
                />
                <h3 className="title">Data de nascimento</h3>

                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    format="DD/MM/YYYY"
                    className="form-name"
                />
                <div>
                    <h3 className="title-office">cargo</h3>
                    <Select
                        value={office}
                        onChange={setOffice}
                        options={options}
                        className="form-select"
                    />
                </div>
                <button
                    className="button"
                    type="button"
                    onClick={getUser}
                >
                    Cadastrar
          </button>

            </div>

        </div >
    );
};

export default Home;