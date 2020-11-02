import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateInfo(event) {
    const { value, name } = event.target;

    if (name == "fName") {
      setContact((prevValue) => {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      });
    } else if (name == "lName") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      });
    } else if (name == "email") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={updateInfo}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={updateInfo}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={updateInfo}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
