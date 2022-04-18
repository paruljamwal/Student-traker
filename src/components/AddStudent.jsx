import { useState } from "react";
import "./show.css"
export const AddStudent = () => {

  const [form,setForm]=useState([]);

  const handelchange=(e)=>{
   
    const {name,value}=e.target
    setForm({
      ...form,
      [name]:value
    })   

  }

  const handelSubmit=(e)=>{
 
      fetch("http://localhost:8080/students",{
        method:"POST",
        body:JSON.stringify(form),
        headers:{"Content-Type":"application/json"}
      }
        )
  }
 
  return (
    <form className="addstudent" onSubmit={handelSubmit}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          required
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handelchange}
        /><br></br>
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handelchange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handelchange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handelchange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handelchange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handelchange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handelchange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handelchange}
        />{" "}
      </div>
      <div>
        <select onChange={handelchange}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
