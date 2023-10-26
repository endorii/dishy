import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../../../modules/auth/user";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../../assets/brand/logo.png";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const [emailError, setEmailError] = useState("Email не може бути пустим");
    const [passwordError, setPasswordError] = useState("Пароль не може бути пустим");

    const { isAuth } = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Невірно веедено email ')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!re.test(String(e.target.value))){
            setPasswordError('Пароль повинен бути більше 7 символів, містити одну велику літеру та цифру')
        } else {
            setPasswordError('')
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
        }
    }

    useEffect(() => {
        if (isAuth === true) {
            navigate('/')
        }

    }, [isAuth])

    return (
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-28 w-auto"
                    src={Logo}
                    alt="Your Company"
                />
                <h2 className="text-center text-3xl font-thin leading-9 tracking-tight text-gray-900">
                    Увійти в свій акаунт
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
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="pl-3 block w-full h-12 text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" 
                                onBlur={(e) => blurHandler(e)}
                            />
                        </div>
                        {(emailTouched && emailError) && <div className="text-red-600">{emailError}</div>}
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
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="pl-3 text-normal block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" 
                                onBlur={(e) => blurHandler(e)}
                            />
                        </div>
                        {(passwordTouched && passwordError) && <div className="text-red-600">{passwordError}</div>}
                    </div>

                    <div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(login(email, password))}
                            }
                            disabled={emailError || passwordError}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:hover:bg-indigo-300 disabled:bg-indigo-300 disabled:cursor-not-allowed"
                        >
                            Увійти
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Не маєте акаунту?{' '}
                    <Link to="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Зареєструватися
                    </Link>
                </p>
            </div>
        </div>
    )
}