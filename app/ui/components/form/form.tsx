import React from 'react';
import style from './form.module.css';

export function Form() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Form submitted');
    }  

    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <h1>Form</h1>
            <div className={style.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="file">File:</label>
                <input type="file" id="file" name="file" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}