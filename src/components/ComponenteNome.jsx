import { useEffect, useState } from "react";

function ComponenteNome() {
    const [nome, setNome] = useState('Renato');

    useEffect(()=>{
        alert(`O nome foi alterado para ${nome}`)
    },[nome])

    return (
        <div>
        <button onClick={() =>setNome("seu apelido")}>ALterar para apelido</button>
        <button onClick={() =>setNome("Nome")}>ALterar para Nome</button>

        <p>Nome: {nome}</p>
        </div>
    )
}

export {ComponenteNome};