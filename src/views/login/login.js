import { React, useState } from 'react';
import FormInput from '@utils/components/FormInput/form-input';

export default function Login(){
    
    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");

    const inputEmailConfig = {
        label:{
            text: "Email"
        },
        input:{
            type: "text",
            placeholder: "Please insert your email...",
            value: inputValue,
            onChange: (event) => setInputValue(event.target.value)
        }
    }

    const inputPasswordConfig = {
        label:{
            text: "Password"
        },
        input:{
            type: "password",
            placeholder: "Please insert your password...",
            value: password,
            onChange: (event) => setPassword(event.target.value)
        }
    }
    return (
        <>
            <div>Hello from login </div>
            <FormInput
                data={inputEmailConfig}
            ></FormInput>
            <FormInput
                data={inputPasswordConfig}
            ></FormInput>
        </>
    );
}