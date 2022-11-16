import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCriar = () => {
    const[id, idchange]=useState("");
    const[nome, nomechange]=useState("");
    const[email, emailchange]=useState("");
    const[telefone, telefonechange]=useState("");
    const[ação, açãochange]=useState(true);
    const[validar, validarchange]=useState(false);


    const navigate=useNavigate();
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata=({nome,email,telefone,ação})
        

        fetch("http://localhost:8000/funcionario", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert('Salvo com Sucesso!')
            navigate('/');


        }).catch((err)=>{
            console.log(err) //erro ao usar "err.message" (CORRIGIR!!!!!!!)

        })  //O método global fetch() inicia o processo de busca de um recurso da rede

    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign":"left" }}>
                            <div className="card-title">
                                <h2> Criar Funcionário</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>

                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input required value={nome} onMouseDown={e=>validarchange(true)} onChange={e=>nomechange(e.target.value)} className="form-control"></input>
                                           {nome.length==0 && validar &&  <span className="text-danger">DIGITE SEU NOME!</span>}
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>

                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Telefone</label>
                                            <input value={telefone} onChange={e=>telefonechange(e.target.value)} className="form-control"></input>

                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={ação} onChange={e=>açãochange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Ativo</label>

                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Salvar</button>
                                            <Link to="/" className="btn btn-danger">Sair</Link>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}

export default EmpCriar;