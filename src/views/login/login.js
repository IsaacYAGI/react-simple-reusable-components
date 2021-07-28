import { React, useState, useEffect } from 'react';
import FormInput from '@utils/components/FormInput/form-input';
import Button from '@utils/components/Button/button';

export default function Login(){
    
    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [pristineValue, setPristineValue] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false)

    useEffect(()=>{
        if (emailValue === "" || password === "") setFormValid(false); else setFormValid(true)
        setPristineValue(false)
        console.log("pristine status changed",pristineValue);
        console.log("validity status changed",formValid);
    },[emailValue,password])


    const inputEmailConfig = {
        label:{
            text: "Email"
        },
        input:{
            type: "text",
            placeholder: "Please insert your email...",
            value: emailValue,
            onChange: (event) => setEmailValue(event.target.value),
            hasError: !formValid && !pristineValue
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
        disabledValue: buttonLoading || !formValid
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