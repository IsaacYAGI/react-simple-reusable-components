import { React } from 'react';
import './button.styles.css';


export default function Button({data}){
    const  { 
        buttonTextValue, 
        typeValue = "button",
        buttonOnClickFunc = () => console.log("default function onclick button executed"), 
        showLoading = false, 
        disabledValue = false
    } = data;


    return (
        <button 
            onClick={buttonOnClickFunc}
            disabled={disabledValue}
            type={typeValue}
        >
            { buttonTextValue }
            { showLoading && (
                <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginLeft: "5px" }}
                />
            )}
        </button>
    );
}