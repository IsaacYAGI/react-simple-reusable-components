import { style } from 'typestyle';

const buttonStyle = style({
  backgroundColor: "#008cba", /* Green */
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  $nest:{
    '&:disabled':{
        opacity: 0.5,
      }
  }

})

export { buttonStyle };
