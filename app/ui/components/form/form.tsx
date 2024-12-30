import React, { useState } from 'react';
import style from './form.module.css';

export function Form() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        message: string;
        file: File | null;
    }>({
        name: '',
        email: '',
        message: '',
        file: null,
      });
      const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors: any = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({ ...formData, file });
    };
      
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
        }
    }  

    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <h1>Form</h1>
            <div className={style.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
        {formData.file && <span>{formData.file.name}</span>}
      </div>
            <button type="submit">Submit</button>
        </form>
    )
}