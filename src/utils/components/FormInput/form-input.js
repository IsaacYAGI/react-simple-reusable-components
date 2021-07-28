import { React } from 'react';
import { formInputStyle } from './form-input.styles'

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
        <div className={formInputStyle}>
            <div>

            <label> {labelTextValue} </label>
            </div>
            <div>

            <input 
                type={inputTypeValue} 
                placeholder={placeHolderValue} 
                value={inputValue} 
                onChange={onChangeFunc}
            ></input>
            </div>
            <div>
                { hasErrorValue && <span>Please check the value</span>}
            </div>
        </div>
    );
}