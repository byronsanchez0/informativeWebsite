import React, { useState } from "react";
import "../styles/contactstyles.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (formData.name == '') this.setState({
            inputClass: "invalid"
        });
        console.log(formData);
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };




    return (
        <section className="form-container">
            <div></div>
            <form className="form-style" onSubmit={handleSubmit}>
                <h2 className="formTitle">¡COTIZA TUS EXITOS!</h2>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                    </div>
                    <div className="div-input-area">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="mi nombre"
                            className="inputClass"
                            value={formData.name}
                            onChange={handleChange}
                            //onBlur={handleBlur}
                            required

                        />
                    </div>
                </div>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="email">Email:</label>

                    </div>
                    <div className="div-input-area">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="micorreo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="subject">Asunto:</label>
                    </div>
                    <div className="div-input-area">
                        <textarea
                            id="subject"
                            name="subject"
                            placeholder="Evento publicitario"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="input-div-styles">
                    <div>
                        <label htmlFor="message">Mensaje:</label>
                    </div>
                    <div className="div-input-area">
                        <textarea
                        className="message-style"
                            id="message"
                            name="message"
                            placeholder="Mi mensaje aqui"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="btn-form-style">
                <button type="submit">Enviar</button>
                </div>
                
            </form>
            <div className = "maps-styles">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3793743038445!2d-89.20882992402996!3d13.695457986690617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330f700b2270f%3A0x41384fce5621d896!2sGrupo%20Asesores!5e0!3m2!1sen!2ssv!4v1709071880778!5m2!1sen!2ssv" width="100%" height="400" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </section>
    );
}

export default Contact;