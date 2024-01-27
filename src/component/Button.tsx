// type colors = "red"|"green"|"yellow"
// type ButtonProps = {
//     style:{
//         backgroundColor:string,
//         fontSize:number,
//         padding:number;
//     };
// }
type ButtonProps = {
    onClick: (test:string)=>number
}
const Button = ({onClick}:ButtonProps) => {
  return (
      <>
        <button onClick={onClick("asma")}>Click Me</button>
      </>
    )
}

export default Button