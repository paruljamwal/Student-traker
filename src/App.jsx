import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
function App() {
  const [state,setState]=useState("show");
  function handelchange(){
    if(state==="Add"){
      setState("show")
    }

    else if(state==="show"){
      setState("Add")
    }
  }
  return (
    <div className="App">

       <h1 id="system">Tracking System</h1>
      <button className="togglebtn" onClick={handelchange}>

      {state==="show" ? "Add" : "show"}
      {state==="show" ? <ShowStudents></ShowStudents> : <AddStudent></AddStudent>}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
     
   
    </div>
  );
}

export default App;
