//import { useAuth } from "../hooks/useAuth";
import illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Link} from "react-router-dom"


import '../styles/auth.scss'
import { useState, FormEvent } from "react";

export function NewRoom() {
 
//   const { user } = useAuth()
const [newRoom, setNewRoom] = useState('');

async function handleCreateRoom(event: FormEvent) {

  event.preventDefault();

  if(newRoom.trim() === ''){
    return;
  }
}

  return ( 
    <div id = "page-auth" >
      <aside>

        <img
          src={illustration}
          alt="illustraçao simbolizando perguntas e respostas"
        />
        <strong> Crie salas de Q&amp;A  ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>

        <div className = "main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2> Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input type="text" 
            placeholder=" Digite o código da sala" 
            onChange ={event => setNewRoom(event.target.value)}
            value = {newRoom} />

            <Button type="submit"> 
               Criar sala 
            </Button>
            <p>
                Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>

          </form>
        </div>
      </main>
    </div>
  );
}
