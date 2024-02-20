// import React, { FC } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../services/authApiSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAuth, setToken } from '../../store/authentication/authSlice';
import { FieldValues, useForm } from 'react-hook-form';
import { mainColors } from '../../assets/mainColors';
import CardButton from '../../components/buttons/CardButton';
import './signup.module.css';
import { BallTriangle } from 'react-loader-spinner';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { fetchFingerPrint } from './fingerPrint';

const SignUp = () => {
  // if (isSuccess) {
  // const authResponse: AuthResponse['accessToken'] = data?.accessToken;
  // console.log(authResponse);
  // }

  // if (authResponse) {
  //   localStorage.setItem('token', authResponse);
  // }
  //   const userToken = await signUp({ username, email, password, fingerPrint })
  //   .unwrap()
  //   .then((payload) => console.log('fulfilled', payload))
  //   .catch((error) => console.error('rejected', error));

  // dispatch(setToken(userToken));
  // dispatch(setAuth(true));
  // setUsername('');
  // setEmail('');
  // setPassword('');
  // navigation('/');

  //   const registration = (username: string, email: string, password: string) => {
  //     try {
  //       dispatch(setToken(data?.accessToken));
  //       dispatch(setAuth(true));
  //       // dispatch(setUser(data.user))
  //     } catch (e) {
  //       console.log(error);
  //     }
  //   };

  // useEffect(() => {
  //   if (token) {
  //     dispatch(checkAuth(args, api, extraOptions));
  //   }
  // }, []);

  // useEffect(() => {
  //   setErrorMessage('');
  // }, [username, email, password]);

  // const content = isLoading ? (
  //   <h1>Loading...</h1>
  // ) : (

  // );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const errorRef = useRef<HTMLParagraphElement | null>(null);
  const [signUp, { isLoading }] = useSignUpMutation(); // Destructure the tuple
  // const fingerPrint = 'ajhfjahsfkjaslkjf';
  const dispatch = useAppDispatch();
  // const { token } = useAppSelector((state) => state.auth);
  const {data } = useVisitorData(
    { extendedResult: true },
    { immediate: true },
  );

  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fingerPrint = fetchFingerPrint()
  // console.log(fingerPrint);
  
  const onSubmit = async (data: FieldValues) => {
    console.log('PRESSED');
    const formData = getValues();
    const { username, email, password } = formData;
    
    console.log({ username, email, password, fingerPrint});

    const userToken = await signUp({ username, email, password, fingerPrint})
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error));

    dispatch(setToken(userToken));
    dispatch(setAuth(true));
    reset();
  };
  return isLoading ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Make sure the container takes at least the full height of the viewport
      }}
    >
      <BallTriangle height="80" width="80" color="green" ariaLabel="loading" />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Make sure the container takes at least the full height of the viewport
      }}
    >
      <div
        style={{
          backgroundColor: mainColors.header,
          width: '350px',
          height: '650px',
        }}
        className=" p-5 rounded-lg "
      >
        <div className="flex flex-col  items-center">
          <h1 style={{ fontSize: '20px' }} className=" mb-4 font-bold">
            Create a Typeracer clone account
          </h1>
          <p className="mb-4" style={{ fontSize: '15px' }}>
            Already signed up? Log in
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col    gap-y-3">
            <h1>Username:</h1>
            <input
              {...register('username', {
                required: 'Username is required',
              })}
              type="text"
              className=" rounded-md p-1 "
            />
            {errors.username && (
              <p style={{ color: mainColors.redColor }}>
                {errors.username?.message}
              </p>
            )}
            <h1>Email Address:</h1>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              type="email"
              className=" rounded-md p-1"
            />
            {errors.email && (
              <p style={{ color: mainColors.redColor }}>
                {errors.email.message}
              </p>
            )}
            <h1>Password:</h1>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 10,
                  message: 'Password must be at least 10 characters',
                },
              })}
              type="password"
              className=" rounded-md p-1"
            />

            {errors.password && (
              <p style={{ color: mainColors.redColor }}>
                {errors.password?.message}
              </p>
            )}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: mainColors.purpleButtons,
                  width: '310px',
                }}
                className=" text-white disabled:bg-gray-50 px-10 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-white">OR</p>
            </div>
            {/* <div
              style={{ backgroundColor: mainColors.upgrade }}
              className="flex justify-center mt-4 px-10 py-4 rounded-md"
            > */}
            <CardButton
              buttonColor={mainColors.upgrade}
              buttonText="Sign up with Google"
              onClick={() => navigation('/')}
              h={40}
              withIcon={true}
            />
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
