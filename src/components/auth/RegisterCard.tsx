import {useState} from "react";
import "./register-card.css";
import LabelledInput from "../../ui/input/LabelledInput";

const RegisterCard = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onRegisterButton = (): void => {
        console.log(username, password)
    }

    return (
        <div className={"register-card"}>
            <div className={"register-form"}>
                <h3>Registration</h3>

                <LabelledInput
                    id={"username"}
                    labelContent={"Username"}
                    inputContent={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <LabelledInput
                    id={"password"}
                    labelContent={"Password"}
                    inputContent={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={onRegisterButton}>Register</button>
            </div>

        </div>
    )
}

export default RegisterCard;