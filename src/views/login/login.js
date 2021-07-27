import { React, useState } from 'react';
import FormInput from '@utils/components/FormInput/form-input';
import Button from '@utils/components/Button/button';

export default function Login(){
    
    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false)

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

    const fetchApi = () => {
        setButtonLoading(true);
        setTimeout( 
            () => setButtonLoading(false),
            3000
        )
    }

    const buttonSubmitConfig = {
        buttonTextValue: "Submit", 
        typeValue: "button",
        buttonOnClickFunc: fetchApi, 
        showLoading: buttonLoading, 
        disabledValue: buttonLoading
    }
    return (
        <>
            <div>Hello from login </div>
                
            <form>
                <div>

                <FormInput
                    data={inputEmailConfig}
                ></FormInput>
                </div>
                <div>

                <FormInput
                    data={inputPasswordConfig}
                ></FormInput>
                </div>
                <div>
                    <Button
                        data={buttonSubmitConfig}
                    >

                    </Button>
                </div>
            </form>
        </>
    );
}