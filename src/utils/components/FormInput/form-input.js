import { React } from 'react';

export default function FormInput({data}){
    const  {
        label:{
            text:labelTextValue = ""
        } = {}, //default value if not sent: {}
        input:{
            type:inputTypeValue = "text",
            placeholder: placeHolderValue = "",
            value: inputValue = "",
            onChange: onChangeFunc = (event) => {
                console.log("defalult function executed, event:", event.target.value)
            },
            hasError: hasErrorValue = false

        } = {} //default value if not sent: {}
    } = data;
    return (
        <>
            <label> {labelTextValue} </label>
            <input 
                type={inputTypeValue} 
                placeholder={placeHolderValue} 
                value={inputValue} 
                onChange={onChangeFunc}
            ></input>
        </>
    );
}