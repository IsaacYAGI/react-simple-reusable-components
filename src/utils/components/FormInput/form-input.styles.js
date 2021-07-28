import { style } from 'typestyle';

const formInputStyle = style({
    $nest:{
        '&>div>span':{
            color: "red"
        }
    }
})

export { formInputStyle };
