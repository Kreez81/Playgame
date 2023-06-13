import React, { useRef } from 'react'
import Navbar from '../Widgets/Navbar'
import emailjs from "@emailjs/browser";
import Botbar from '../Widgets/Botbar';

function Help() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  //   var Params = {
  //     full_name: document.getElementById("full_name").value,
  //     email_id: document.getElementById("email_id").value
  // };

    emailjs.sendForm('service_9iratng', 'template_c0s2qop', form.current, 'slqbPA4Z8ny6DVV6H')
      .then((result) => {
          console.log(result.text);
          alert("Message sent")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong")
      });
      form.current.reset();
  };

  return (
    <>
    <Navbar />
    <div style={{backgroundColor:"#19758c", fontSize:"3vh", display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <form style={{display:"flex", flexDirection:"column"}} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id='full_name' name="full_name" />
      <label>Email</label>
      <input type="email" id='email_id' name="email_id" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    <Botbar />
    </>
  )
}

export default Help