import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEditar = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/funcionario/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            nomechange(resp.nome);
            emailchange(resp.email);
            telefonechange(resp.telefone);
            açãochange(resp.ação);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[nome,nomechange]=useState("");
    const[email,emailchange]=useState("");
    const[telefone,telefonechange]=useState("");
    const[ação,açãochange]=useState(true);
    const[validar,validarchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,nome,email,telefone,ação};
      

      fetch("http://localhost:8000/funcionario/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Salvo com Sucesso!')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Editar Funcionário</h2>
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
                                    {nome.length==0 && validar && <span className="text-danger">Nome!!!</span>}
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
                                        <label  className="form-check-label">Ativo</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Salvar</button>
                                       <Link to="/" className="btn btn-danger">Voltar</Link>
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
 
export default EmpEditar;