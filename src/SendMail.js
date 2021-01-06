import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';

function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm(); 
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" type="text" placeholder="To" ref={register({required:true})}></input>
                {errors.to && <p className="sendMail__error">To is Required!</p>}
                <input name="subject" type="text" placeholder="Subject" ref={register({required:true})}></input>
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                <input type="text" name="message" placeholder="Message..." className="sendMail__message" ref={register({required:true})}></input>
                {errors.message && <p className="sendMail__error">Message is Required!</p>}
                <div className="sendMail__options">
                    <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
