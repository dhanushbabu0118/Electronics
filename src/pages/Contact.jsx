import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill all fields");
            return;
        }

        if (!email.includes("@")) {
            toast.error("Please enter a valid email");
            return;
        }

        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-page">

            <div className="contact-header">
                <p>GET IN TOUCH</p>
                <h1>Contact Us</h1>
                <p>
                    Have a question? Send us a message and we'll get back to you.
                </p>
            </div>

            <div className="contact-container">

                <div className="contact-info">
                    <h2>Let's Talk</h2>

                    <p>
                        We're here to help with your questions about our products
                        and services.
                    </p>

                    <div className="contact-item">
                        <strong>Email</strong>
                        <p>support@boat-demo.com</p>
                    </div>

                    <div className="contact-item">
                        <strong>Phone</strong>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className="contact-item">
                        <strong>Hours</strong>
                        <p>Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                </div>

                <div className="contact-form">

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;