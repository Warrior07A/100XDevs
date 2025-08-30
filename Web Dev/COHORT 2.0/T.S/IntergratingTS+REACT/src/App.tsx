function App(){
  return (
    <>

    <div>
      
      </div>
    </>
  )
}


function Todo(prop:TodoProp){
  return<div>
<h1>{prop.title}</h1>

<h4>{prop.description}</h4>

</div>
}
interface TodoProp{
  title:string,
  description:string,
  age:number
}