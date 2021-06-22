import {  useHistory } from 'react-router-dom'


import illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

import '../styles/auth.scss'

export function Home() {

  const history = useHistory();

  function navigationToNewRoom(){
    history.push('/room/new');
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
          <button className = "create-room"
          onClick={navigationToNewRoom}
          >
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua sala com Google
          </button>
          <div className = "separator"> ou entre em uma sala</div>
          <form>
            <input type="text" placeholder=" Digite o código da sala" />

            <Button type="submit"> 
                Entrar na sala 
            </Button>

          </form>
        </div>
      </main>
    </div>
  );
}
