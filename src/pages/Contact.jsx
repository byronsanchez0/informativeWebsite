import React, { useState, useRef, useEffect } from "react";
import "../styles/contactstyles.css";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value

        }));
    };

    const namePattern = /^[a-z A-Z ]{3,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSubmit = (e) => {
        e.preventDefault();



        const errors = {};


        if (!formData.name.trim()) {
            errors.name = 'Este campo es obligatorio';
        } else if (!namePattern.test(formData.name)) {
            errors.name = 'El nombre debe contener solo letras y por lo menos 3 caracteres.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Este campo es obligatorio';
        } else if (!emailPattern.test(formData.email)) {
            errors.email = 'Formato de email inválido';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Asunto vacío, por favor rellene este campo.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Mensaje vacío, por favor rellene este campo.';
        }
        setFormErrors(errors);

        //sending the form if 
        if (Object.keys(errors).length === 0) {
            emailjs
                .sendForm('service_lkco6o7', 'template_vgb30do', form.current, {
                    publicKey: 'jzVHJ8JChg0wsd_VK',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        console.log('message send!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }

        console.log(formData);
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };
    /* const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
 */


    return (
        //<body   className={`section ${isVisible ? 'visible' : 'hidden'}`}>
        <section className="form-container">
            <div></div>

            <motion.form className="form-style" onSubmit={handleSubmit} ref={form} style={{ marginBottom: formErrors.email && '70px' }}>
                <h2 className="formTitle">¡COTIZA TUS EXITOS!</h2>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                    </div>
                    <div className="div-input-area">
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="mi nombre"
                            className="inputClass"
                            value={formData.name}
                            onChange={handleChange}

                            style={{ borderColor: formErrors.name && 'red' }}
                            //onBlur={handleBlur}
                            //required
                            initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}
                        />
                        {formErrors.name && <p>{formErrors.name}</p>}
                    </div>
                </div>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="email">Email:</label>

                    </div>
                    <div className="div-input-area">
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="micorreo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            //required
                            style={{ borderColor: formErrors.email && 'red' }}
                            initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}
                        />
                        {formErrors.email && <p>{formErrors.email}</p>}
                    </div>
                </div>
                <div className="input-div-styles">
                    <div>
                        <label htmlFor="subject">Asunto:</label>
                    </div>
                    <div className="div-input-area">
                        <motion.textarea
                            id="subject"
                            name="subject"
                            placeholder="Evento publicitario"
                            value={formData.subject}
                            onChange={handleChange}
                            style={{ borderColor: formErrors.subject && 'red' }}
                            initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}
                        //required
                        />
                        {formErrors.subject && <p>{formErrors.subject}</p>}
                    </div>
                </div>

                <div className="input-div-styles">
                    <div>
                        <label htmlFor="message">Mensaje:</label>
                    </div>
                    <div className="div-input-area">
                        <motion.textarea
                            className="message-style"
                            id="message"
                            name="message"
                            placeholder="Mi mensaje aqui"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ borderColor: formErrors.message && 'red' }}
                            //required
                            initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}
                        />
                        {formErrors.message && <p>{formErrors.message}</p>}
                    </div>
                </div>
                <div className="btn-form-style">
                    <motion.button type="submit" initial={{ width: 0 }} animate={{ width: "60px" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}>Enviar</motion.button>
                </div>

            </motion.form>
            <div className="maps-styles" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3793743038445!2d-89.20882992402996!3d13.695457986690617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330f700b2270f%3A0x41384fce5621d896!2sGrupo%20Asesores!5e0!3m2!1sen!2ssv!4v1709071880778!5m2!1sen!2ssv" width="100%" height="400" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        // </body>

    );
}

export default Contact;