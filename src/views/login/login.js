import { React, useState, useEffect } from 'react';
import FormInput from '@utils/components/FormInput/form-input';
import Button from '@utils/components/Button/button';
import { spaceBetween } from './login.styles'


export default function Login(){
    
    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [pristineEmailValue, setPristineEmailValue] = useState(true);
    const [pristinePasswordValue, setPristinePasswordValue] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false)

    useEffect(()=>{
        if (emailValue === "") setEmailValid(false); else setEmailValid(true)
        if (password === "") setPasswordValid(false); else setPasswordValid(true)
        console.log("pristine status changed",pristineEmailValue);
        console.log("validity status changed",emailValid);
    },[emailValue,password])


    const inputEmailConfig = {
        label:{
            text: "Email"
        },
        input:{
            type: "text",
            placeholder: "Please insert your email...",
            value: emailValue,
            onChange: (event) => {
                setPristineEmailValue(false)
                setEmailValue(event.target.value)
            },
            hasError: !emailValid && !pristineEmailValue
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
            onChange: (event) => {
                setPristinePasswordValue(false)
                setPassword(event.target.value)
            },
            hasError: !passwordValid && !pristinePasswordValue
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
        disabledValue: buttonLoading || !emailValid || !passwordValid
    }
    return (
        <>
                
            <form>
                <div 
                    className={spaceBetween}
                    >

                <FormInput
                    data={inputEmailConfig}
                ></FormInput>
                </div>
                <div
                    className={spaceBetween}
                >

                <FormInput
                    data={inputPasswordConfig}
                ></FormInput>
                </div>
                <div
                    className={spaceBetween}
                
                >
                    <Button
                        data={buttonSubmitConfig}
                    >

                    </Button>
                </div>
            </form>
        </>
    );
}