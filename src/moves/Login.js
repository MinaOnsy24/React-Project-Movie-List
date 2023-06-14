import { Formik } from "formik";
import { useState } from "react"


export default function Login() {
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     userName: '',
    //     Password: ''
    // });
    // const [errors, setErrors] = useState({
    //     nameError: null,
    //     emailError: null,
    //     userNameError: null,
    //     PasswordError: null
    // });

    // const changeForm = (e) => {
    //     console.log(e.target.name, e.target.value)
    //     switch (e.target.name) {
    //         case 'name':
    //             setForm({ ...form, name: e.target.value })
    //             if(e.target.value.lenght === 0 ){
    //                 setErrors({...errors ,nameError: 'this field is required' })
    //             }else if(e.target.value.lenght < 3 ){
    //                 setErrors({...errors ,nameError: 'at lest 3 letters' })
    //             }else{
    //                 setErrors({...errors ,nameError: null })
    //             }
    //             // setErrors({ ...errors,
    //             //     nameError: e.target.value.lenght === 0 
    //             //     ? 'this field is required' 
    //             //     : e.target.value.lenght < 3 
    //             //     ? 'at lest 3 letters' 
    //             //     : null, 
    //             // })
    //             break;
    //         case 'email':
    //             setForm({ ...form, email: e.target.value })

    //             break;
    //         case 'userName':
    //             setForm({ ...form, userName: e.target.value })
    //             break;
    //         case 'Password':
    //             setForm({ ...form, Password: e.target.value })
    //             break;
    //         default:
    //             break;

    //     }
    //     console.log(errors)
    //     console.log(form)
    // }

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     console.log(errors)
    //     console.log(form)
    // }

    return (
        <div className="bg-light">
            {/* <form onSubmit={submitForm} className="bg-light col-11 col-md-9 col-lg-7 mx-auto rounded-3 mt-5 p-5 border border-dark">
                <div className="row mb-2">
                    <label className="form-label fw-bold fs-5" htmlFor="Name">Name</label>
                    <input type="text" name="name" value={form.name} placeholder="Name" id="Name"
                        className="form-control col-6 border-dark rounded-1" onChange={changeForm} />
                    <small className="text-danger">{errors.nameError}</small>
                </div>
                <div className="row mb-2">
                    <label className="form-label fw-bold fs-5" htmlFor="email">email</label>
                    <input type="email" name="email" value={form.email} placeholder="email" id="email"
                        className="form-control col-6 border-dark rounded-1" onChange={changeForm} />
                    <small>{errors.emailError}</small>
                </div>
                <div className="row mb-2 ">
                    <label className="form-label fw-bold fs-5" htmlFor="userName">User Name</label>
                    <input type="text" name="userName" value={form.userName} placeholder="User Name" id="userName"
                        className="form-control col-6 border-dark rounded-1" onChange={changeForm} />
                    <small>{errors.userNameError}</small>
                </div>
                <div className="row mb-2 ">
                    <label className="form-label fw-bold fs-5" htmlFor="password">Password</label>
                    <input type="password" name="Password" value={form.Password} placeholder="Enter your Password" id="password"
                        className="form-control col-6 border-dark rounded-1" onChange={changeForm} />
                    <small>{errors.PasswordError}</small>
                </div>
                <div className="row mb-2 ">
                    <label className="form-label fw-bold fs-5" htmlFor="repassword">Re-Enter Password</label>
                    <input type="password" placeholder="Re-Enter your Password" id="repassword"
                        className="form-control col-6 border-dark rounded-1" />
                </div>
                <input type="submit" className=" col-11 col-md-9 col-lg-5 mt-3 btn btn-primary " />
            </form> */}
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </div>
    )
}