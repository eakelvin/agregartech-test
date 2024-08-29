"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import image from "@/assets/images/clip-message-sent 1.png";
import { Button } from '../ui/button';
import Spinner from '../ui/spinner';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

interface Input {
    email: string;
    password: string;
};

const Login = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState<Boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Input>()

    const onSubmit: SubmitHandler<Input> = async (data) => {
        try {
            console.log(data)
            toast.success("Success")
        } catch (error) {
            console.log(error)
            toast.error("Didn't work")
        }
    };

    return (
        <div className="flex h-screen">

            <div className="w-full bg-white lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-5">
                    <h1 className="self-start text-3xl font-semibold mb-3 text-[#3751FE]">
                        Artificial Intelligence Driving Results For The Travel Industry
                    </h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500">
                        Welcome back! Please login to your account.
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="text"
                                required
                                {...register("email")}
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                required
                                {...register("password")}
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <label htmlFor="password" className="!text-slate-900">
                                Password
                            </label>
                            <label className="!text-primary cursor-pointer">
                                Forgot password?
                            </label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Button
                                type="submit"
                                className="rounded-none h-10"
                            // disabled={Boolean(loading) || !isValid}
                            >
                                {loading ? (
                                    <>
                                        <Spinner />
                                        <p>Loading</p>
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </Button>
                            <Button
                                variant={"outline"}
                                type="submit"
                                // disabled={Boolean(loading) || !isValid}
                                className="rounded-none h-10"
                            >
                                {loading ? (
                                    <>
                                        <Spinner />
                                        <p>Loading</p>
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-4 text-sm flex items-center justify-between">
                        <p className='text-gray-600'>or with email</p>
                        <p className='text-[#3751FE]'>Facebook</p>
                        <p className='text-[#3751FE]'>LinkedIn</p>
                        <p className='text-[#3751FE]'>Google</p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-center flex-1 bg-[#E5E5E5]">
                <Image
                    src={image}
                    alt=''
                    height={500}
                    width={500}
                    className='w-full'
                />
            </div>

        </div>
    )
}

export default Login
