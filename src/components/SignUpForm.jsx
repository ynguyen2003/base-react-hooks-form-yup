import React from 'react'
import './signupform.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmedPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").min(4, "Must be 4 characters or mode"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please enter a valid email address"),
            password: Yup.string().required("Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
            confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must match"),
            phone: Yup.string().required("Required").matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Must be a valid phone number")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <section>
                <form className='infoform' onSubmit={formik.handleSubmit}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder='Enter your name'
                    />
                    {formik.errors.name && (
                        <p className='errorMsg'>{formik.errors.name}</p>
                    )}
                    <label>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='Enter your email'
                    />
                    {formik.errors.email && (
                        <p className='errorMsg'>{formik.errors.email}</p>
                    )}
                    <label>Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder='Enter your password'
                    />
                    {formik.errors.password && (
                        <p className='errorMsg'>{formik.errors.password}</p>
                    )}
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        placeholder='Confirm your password'
                    />
                    {formik.errors.confirmedPassword && (
                        <p className='errorMsg'>{formik.errors.confirmedPassword}</p>
                    )}
                    <label>Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder='Enter your phone number'
                    />
                    {formik.errors.phone && (
                        <p className='errorMsg'>{formik.errors.phone}</p>
                    )}
                    <button type='submit'>Continue</button>
                </form>
            </section>
        </>
    )
}

export default SignUpForm
