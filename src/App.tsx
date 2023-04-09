import React, {useEffect, useState} from 'react';
import {HttpClient} from "./modules/api/HttpClient";
import {User} from "./modules/models/User";

function App() {
    const [httpClient]: [HttpClient, React.Dispatch<React.SetStateAction<HttpClient>>] = useState(new HttpClient());
    const [user, setUser]:
        [User, React.Dispatch<React.SetStateAction<User>>] |
        [null, React.Dispatch<React.SetStateAction<null>>] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await httpClient.get("http://127.0.0.1:8080/api/v1/auth/me", {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBemFtYXQiLCJpYXQiOjE2ODEwMjU4MzEsImV4cCI6MTY4MTAyNzI3MX0.CnwKfuyoJMlWhRfC0wabj34wnU1gREUibaXiYasZ0zc"});
                setUser(response.data);
            } catch (e) {
                console.log("Error: " + e);
                return;
            }
        }
        fetchData();
    }, [httpClient])

    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user])


    return (
        <div className="App">
            <p>Hello world!!</p>
        </div>
    );
}

export default App;
