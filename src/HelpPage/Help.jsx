import React, { useRef } from 'react'
import Navbar from '../Widgets/Navbar'
import emailjs from "@emailjs/browser";
import Botbar from '../Widgets/Botbar';
import { motion } from 'framer-motion';

function Help() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
    <div className='formdiv' style={{fontSize:"3vh", display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <motion.form initial={{ scale:.9, opacity: 0 }} animate={{ scale:1, opacity: 1 }} transition={{ duration: 1,type:"spring",bounce:.5, delay: .5 }}
    style={{display:"flex", flexDirection:"column"}} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id='full_name' name="full_name" />
      <label>Email</label>
      <input type="email" id='email_id' name="email_id" />
      <label>Message</label>
      <textarea name="message" />
      <input className='sendbutt' type="submit" 
      style={{cursor:"pointer", position:"relative", top:"5vh", width:"30%",paddingLeft:"0", display:"flex", 
      alignSelf:"center", justifyContent:"center", transition:"100ms ease-in-out"}} value="Send" />
    </motion.form>
    </div>
    <Botbar />
    </>
  )
}

export default Help