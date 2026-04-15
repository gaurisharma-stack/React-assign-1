import React, { useState } from 'react'
import students from '../students';
import '../App.css'
const Reportcard = () => {

  const [studentData, setStudentData] = useState(students)

  console.log(students)
  // let name = 'pratik'
  // let marks = 90
  let isLogin= false
  let passed = studentData.filter((item) => {
    return item.marks >= 50
  })
  let failed = studentData.filter((item) => {
    return item.marks < 50
  })
  let average = studentData.reduce((total, item) => {
    return total + item.marks
  }, 0) / studentData.length

  let studentObj = {
    name: '',
    marks: ''
  }

  function submitHandler(event) {
    event.preventDefault()

    studentObj.name = event.target.name.value
    studentObj.marks = event.target.marks.value

    console.log(studentObj)
    setStudentData((preData) => {
      return [...preData, studentObj]
    })

  }
  

  return (
    <div>
      <h1>Report Card</h1>
      <p>Total Students : {studentData.length}</p>
      <p>Passed : {passed.length}</p>
      <p>Failed : {failed.length}</p>
      <p>Average : {average}</p>
      <br />
      <p></p>
      <form onSubmit={submitHandler}>
        <input placeholder='Name' name='name' />
        <input placeholder='Marks' name='marks' />
        <button type='submit'>Add</button>
      </form>
      <div id='reportcard'>
      {
        studentData.map((item, index) => {
          return <div key={index}>
            <p>Name : {item.name}</p>
            <p>Marks : {item.marks}</p>
            <hr />
      
          </div>
        })

      }
      </div>
      {
        isLogin ? <button>Logout</button> : <button>Login</button>
      }

     
    </div>
  )
}

export default Reportcard