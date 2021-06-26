import { useParams } from "react-router-dom";

import { Button } from "../components/Button";
import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import { RoomCode } from "../components/RoomCode";

import "../styles/room.scss";
//import { useAuth } from "../hooks/useAuth";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";


type RoomParams = {
    id: string;
};

export function AdminRoom() {
   // const { user } = useAuth();
    const params = useParams<RoomParams>();
   // const [newQuestion, setNewQuestion] = useState("");
    const roomId = params.id;

    const { title, questions} = useRoom(roomId);

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')){
          await database().ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

           return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined > Encerrar sala </Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1> Sala {title}</h1>
                    {questions.length > 0 && <span> {questions.length} perguntas </span>}
                </div>

                <div className="question-list">
                    {questions.map((question) => {
                        return (
                            <Question
                                key= {question.id}
                                content={question.content} 
                                author={question.author}
                                 >
                                <button
                                    type = "button"
                                    onClick={()=> handleDeleteQuestion(question.id)} 
                                >
                                    <img src={deleteImg} alt="remover pergunta" />    
                                </button>          
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
