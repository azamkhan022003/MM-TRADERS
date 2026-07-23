import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

const [form,setForm]=useState({

name:"",
email:"",
phone:"",
message:"",
gst:"",

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const sendEmail=(e)=>{

e.preventDefault();

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

form,

"YOUR_PUBLIC_KEY"

)

.then(()=>{

alert("Message Sent Successfully");

setForm({

name:"",
email:"",
phone:"",
message:"",
gst:"",

});

})

.catch(()=>{

alert("Something Went Wrong");

});

};

return(

<section className="contact">

<div className="contact-info">

<h2>Contact Us</h2>

<p>📞 +91 8103326129</p>

<p>📧 mmtraders.mp@gmail.com </p>

<p>📍 Gwalior, Madhya Pradesh</p>

<p className="gst-number">
    <strong>GSTIN</strong>23NZQPK1479H1ZQ
</p>

</div>

<div className="map">

<iframe

title="Google Map"

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81000.22617174867!2d78.17117851598113!3d26.205197405257845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42e23bbc785%3A0x948ef8ea18aede95!2sRoshni%20Ghar%20Mohalla%2C%20Lashkar%2C%20Gwalior%2C%20Madhya%20Pradesh%20474009!5e0!3m2!1sen!2sin!4v1783878073281!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"

width="100%"

height="350"

style={{border:0}}

loading="lazy"

></iframe>

</div>

<form
className="contact-form"
onSubmit={sendEmail}
>

<input

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

/>

<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>

<input

name="phone"

placeholder="Mobile Number"

value={form.phone}

onChange={handleChange}

/>

<textarea

name="message"

placeholder="Message"

value={form.message}

onChange={handleChange}

/>

<button>

Send Message

</button>

</form>

</section>

);

}

export default Contact;