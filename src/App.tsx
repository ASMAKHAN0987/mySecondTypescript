import Button from "./component/Button"

const App = () => {
  const onClick  = (test:string)=>{
    return 5
  }
  return (
    <>
      <Button onClick={(test)=>onClick(test)}></Button>
    </>
  )
}

export default App