import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpLista = () => {
    const [empdata, empdatachange] = useState(null);
    
    const navigate=useNavigate();

    const LoadDetalhes=(id)=>{
        navigate("/employee/Detalhes/" +id);
    }

    const LoadEditar=(id)=>{
        navigate("/employee/Editar/" +id);
    }
    const RemoverFuncao=(id)=>{
        if (window.confirm('Deseja remover?')) {
            fetch("http://localhost:8000/funcionario/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removido com Sucesso.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
    }
}
    useEffect(() => {
        fetch("http://localhost:8000/funcionario").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp)

        }).catch((err) => {
            console.log(err.message);
        })

    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <div>
                        <h2> Tabela de Funcionários </h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <Link to="employee/criar" className="btn btn-success"> Adicionar </Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>Email</td>
                                    <td>Telefone</td>
                                    <td>Ação</td>
                                </tr>

                            </thead>
                            <tbody>

                                {empdata &&
                                    empdata.map(item => (        //TD significa "Table Data" e define cada uma das células da tabela.
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefone}</td>
                                            <td><a onClick={() =>{LoadEditar(item.id)}} className="btn btn-success">Editar</a>
                                                <a onClick={() =>{RemoverFuncao(item.id)}} className="btn btn-danger">Remover</a>
                                                <a onClick={() =>{LoadDetalhes(item.id)}} className="btn btn-primary">Detalhes</a>
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default EmpLista;