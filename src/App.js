
import './App.css';
import React, {useState} from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  })

  const hangleFormData = (e) => {
    const formInputData = {...formData}
    formInputData[e.target.name] = e.target.value
    setFormData(formInputData)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setCurrentPage(currentPage + 1)
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }




  return (
    <div className="App">
      <h1>Multi Step Form</h1>
      <form onSubmit={handleFormSubmit}>

        { currentPage === 1 ? 
        <div>
        <label id="name">Enter Name:</label>
        <input type="text" onChange={hangleFormData} htmlFor="name" name="name"/>
        <button type="submit" onClick={handleNext}>Next</button>
        </div>
        :
        null
        }

        { currentPage === 2 ? 
        <div>
        <label id="age">Enter age:</label>
        <input type="text" onChange={hangleFormData} htmlFor="age" name="age"/>
        <button type="submit" onClick={handlePrev}>Go Back</button>
        <button type="submit" onClick={handleNext}>Next</button>
        </div>
        :
        null
        }

        { currentPage === 3 ? 
        <div>
        <label id="email">Enter email:</label>
        <input type="text" onChange={hangleFormData} htmlFor="email" name="email"/>
        <button type="submit" onClick={handlePrev}>Go Back</button>
        <input type="submit" value="Submit"/>
        </div>
        :
        null
        }

        { currentPage === 4 ? 
        <div>
          <h3>Results: </h3>
          <p>name: {formData.name}</p>
          <p>age: {formData.age}</p>
          <p>email: {formData.email}</p>
          <button onClick={() => {setCurrentPage(1)}}>Try again</button>
        </div>
        :
        null
        }


 

      </form>
    </div>
  );
}

export default App;
