import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Form() {

    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [dob, setDob] = useState("")
    const [alert, setAlert] = useState(null);
    const [ans, setAns] = useState("");
    const [num1, setNum1] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    

    let today = new Date();
    const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();


    const handleChange1 = (e) => {
        setName(e.target.name = e.target.value)
    }

    const handleChange2 = (e) => {
        setEmail(e.target.name = e.target.value)
    }

    const handleChange3 = (e) => {
        setComment(e.target.name = e.target.value)
    }

    const handleChange4 = (e) => {
        setAns(e.target.name = e.target.value)
    }

    const handleChange6 = (e) => {
        setName2(e.target.name = e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();        

        const response = await fetch("http://localhost:8000/api/auth/fetchUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                comment: comment,
                date: date,
                a: num1,
                b: num2,
                ans: ans,
                dob: dob
            })
        })
        const data = await response.json();

        console.log(data);

        if(data.success){
            setAlert({msg:"Form submitted success", type:"primary"});
            setName("");
            setEmail("");
            setComment("");
            setAns("");
            setNum1(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
            setNum2(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
            setDob("")
        }
        else{
            setAlert({msg: data.errors[0].msg, type:"danger"});
        }

        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const handleChange5=(e)=>{
        setDob(e.target.name = e.target.value)
    }

    return (
        <div>
            {alert && <div class={`alert alert-${alert.type}`} style={{display:"fixed"}} id="alertId" role="alert">
                {alert.msg}
            </div>}

            <Navbar />

            <div className="container" style={{ paddingTop: "100px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName1" className="form-label">Name</label> */}
                        <input type="text" placeholder='Name' value={name} onChange={handleChange1} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" placeholder='Email' value={email} onChange={handleChange2} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputComment1" className="form-label">Comment</label> */}
                        <textarea type="text" placeholder='Comment' value={comment} onChange={handleChange3} style={{ height: "100px" }} className="form-control" id="exampleInputComment1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDate1" className="form-label">Date</label>
                        <input readOnly type="text" className='dateClass' value={date} id="exampleInputDate1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDob1" className="form-label" style={{marginRight:"10px"}}>Date of Birth</label>
                        <input type="date" className='dobClass' value={dob} onChange={handleChange5} id="exampleInputDob1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDate1" className="form-label">Captcha</label>
                        <input readOnly type="text" style={{padding:"5px"}} className='captchaClass' value={`${num1} + ${num2}`} id="exampleInputDate1" />
                        <input type="number" placeholder='type your answer here' style={{padding:"5px"}} className='ansClass' autoComplete='off' value={ans} onChange={handleChange4}/>
                    </div>

                    {/* honeypot field */}

                    <div className="mb-3 user-code" aria-hidden="true">
                        <label htmlFor="usercode" className="form-label">Name</label>
                        <input type="text" placeholder='Name' autoComplete='off' value={name2} onChange={handleChange6} className="form-control" id="usercode"  />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
