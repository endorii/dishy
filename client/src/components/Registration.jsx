import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { registration } from '../modules/auth/user';
import { Link } from 'react-router-dom';
import Logo from "../assets/brand/logo.png";

export const Registration = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("+380")
    const [company, setCompany] = useState('')
    const [password, setPassword] = useState('')

    const [emailTouched, setEmailTouched] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [companyTouched, setCompanyTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)

    const [emailError, setEmailError] = useState("Email не може бути пустим")
    const [nameError, setNameError] = useState("Ім'я не може бути пустим")
    const [phoneError, setPhoneError] = useState("Телефон не може бути пустим")
    const [companyError, setCompanyError] = useState("Це поле не може бути пустим")
    const [passwordError, setPasswordError] = useState("Пароль не може бути пустим")


    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Невірно веедено email ')
        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value);
        const re = /^[a-zA-Z]+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Невірно веедено ім`я та прізвище ')
        } else {
            setNameError('')
        }
    }

    const phoneHandler = (value) => {
        setPhone(value);
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(String(value).toLowerCase())) {
            setPhoneError('Невірно веедено номер телефону ')
        } else {
            setPhoneError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!re.test(String(e.target.value))) {
            setPasswordError('Пароль повинен бути більше 7 символів, містити одну велику літеру та цифру')
        } else {
            setPasswordError('')
        }
    }

    const companyHandler = (e) => {
        setCompany(e.target.value);
        const re = /^[a-zA-Z ]+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setCompanyError('Невірно введено назву компанії/закладу ')
        } else {
            setCompanyError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailTouched(true);
                break;
            case 'password':
                setPasswordTouched(true);
                break;
            case 'phone':
                setPhoneTouched(true);
                break;
            case 'company':
                setCompanyTouched(true);
                break;
            case 'name':
                setNameTouched(true);
                break;
        }
    }

    return (
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-28 w-auto"
                    src={Logo}
                    alt="Your Company"
                />
                <h2 className="text-center text-3xl font-thin leading-9 tracking-tight text-gray-900">
                    Реєстрація
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block font-medium leading-6 text-gray-900">
                            Електронна адреса (Email)
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={(e) => emailHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-12 text-lg sm:leading-6"
                            />
                        </div>
                        {(emailTouched && emailError) && <div className="text-red-600">{emailError}</div>}
                    </div>

                    <div>
                        <label htmlFor="name" className="block font-medium leading-6 text-gray-900">
                            Ваше ім'я та Прізвище
                        </label>
                        <div className="mt-2">
                            <input
                                value={name}
                                onChange={(e) => nameHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-12 text-lg sm:leading-6"
                            />
                        </div>
                        {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-medium leading-6 text-gray-900">Номер телефону</label>
                        <PhoneInput
                            id="phone"
                            name="phone"
                            country={'UA'}
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(value) => phoneHandler(value)}
                            onBlur={(e) => blurHandler(e)}
                            inputProps={{
                                required: true
                            }}
                            inputStyle={{
                                height: "33px",
                                width: "100%"
                            }} />
                            {(phoneTouched && phoneError) && <div className="text-red-600">{phoneError}</div>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block font-medium leading-6 text-gray-900">
                            Назва закладу
                        </label>
                        <div className="mt-2">
                            <input
                                value={company}
                                onChange={(e) => companyHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                id="company"
                                name="company"
                                type="text"
                                required
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-12 text-lg sm:leading-6"
                            />
                        </div>
                        {(companyTouched && companyError) && <div className="text-red-600">{companyError}</div>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={password}
                                onChange={(e) => passwordHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-12 text-lg sm:leading-6"
                            />
                        </div>
                        {(passwordTouched && passwordError) && <div className="text-red-600">{passwordError}</div>}
                    </div>

                    <div>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                await registration(email, name, phone, company, password);
                            }}
                            type="submit"
                            disabled={passwordError || emailError || phoneError || nameError || companyError}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:hover:bg-indigo-300 disabled:bg-indigo-300 disabled:cursor-not-allowed"
                        >
                            Зареєструватися
                        </button>

                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Маєте акаунт ?{' '}
                    <Link to="/auth/login"  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Увійти
                    </Link>
                </p>
            </div>
        </div>
    )
}