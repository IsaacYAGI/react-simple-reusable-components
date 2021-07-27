import { React, useState } from 'react';
import FormInput from '../../utils/components/FormInput/form-input';

export default function Login(){
    
    const [inputValue, setInputValue] = useState("");

    const inputConfig = {
        label:{
            text: "Email"
        },
        input:{
            type: "text",
            placeholder: "Please insert your email...",
            value:  inputValue,
            onChange: (event) => setInputValue(event.target.value)

        }
    }
    return (
        <>
            <div>Hello from login </div>
            <FormInput
                data={inputConfig}
            ></FormInput>
        </>
    );
}