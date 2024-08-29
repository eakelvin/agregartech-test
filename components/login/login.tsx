"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import image from "@/assets/images/clip-message-sent 1.png";
import { Button } from '../ui/button';
import Spinner from '../ui/spinner';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

interface Input {
    email: string;
    password: string;
    client: string;
    // remember: boolean;
};

const Login = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState<Boolean>(false);
    const [form, setForm] = useState<Input>({
        email: "",
        password: "",
        client: "",
        // remember: false
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(
                'http://165.22.70.167:9100/apicore/v1/users/auth',
                form
            );
            console.log('Data:', response.data);
            console.log('Status:', response.status);
            console.log('Text:', response.statusText);
            toast.success("Login Successful");
        } catch (error: any) {
            console.log(error);
            // console.error('Axios error:', error.response?.data || error.message);
            toast.error("Login Unsuccessful, Please try again!");
        } finally {
            setLoading(false);
            setForm({
                email: "",
                password: "",
                client: "",
                // remember: false
            });
        }
    };

    return (
        <div className="flex h-screen">

            <div className="w-full bg-white lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-5">
                    <h1 className="self-start text-[26px] font-bold mb-3 text-[#3751FE]">
                        Artificial Intelligence Driving Results For The Travel Industry
                    </h1>
                    <h1 className="text-sm font-semibold mb-6 text-[#000000]">
                        Welcome back! Please login to your account.
                    </h1>

                    <form onSubmit={onSubmit} className="space-y-4">

                        <div className="">
                            <div className="border p-2 focus-within:border-l-[#3751FE] focus-within:border-l-4">
                                <label htmlFor="email" className="text-sm">
                                    Email Address
                                </label>
                                <div></div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email"
                                    className="mt-1 w-full outline-none overflow-ellipsis overflow-hidden placeholder-[#3751FE] autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-[#3751FE]"
                                />
                            </div>
                            <div className="flex flex-col border p-2 focus-within:border-l-[#3751FE] focus-within:border-l-4">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={form.password}
                                    onChange={handleInputChange}
                                    placeholder="***************"
                                    required
                                    className="mt-1 overflow-hidden outline-none placeholder-[#3751FE] autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-fill-black"
                                />
                            </div>
                            <div className="flex flex-col border p-2 focus-within:border-l-[#3751FE] focus-within:border-l-4">
                                <label htmlFor="client" className="text-sm">
                                    Client
                                </label>
                                <input
                                    type="client"
                                    name="client"
                                    id="client"
                                    value={form.client}
                                    onChange={handleInputChange}
                                    placeholder="Enter Client Id"
                                    className="mt-1 overflow-hidden outline-none placeholder-[#3751FE] autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-[#3751FE]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between w-full">
                            <div className="flex items-start mb-5 ml-5">
                                <div className="flex items-center h-5">
                                    <input
                                        name='remember'
                                        id="remember"
                                        type="checkbox"
                                        // checked={form.remember}
                                        onChange={handleInputChange}
                                        className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm text-[#000000]">
                                    Remember me
                                </label>
                            </div>
                            <label className="text-sm text-[#000000] cursor-pointer">
                                Forgot password?
                            </label>
                        </div>
                        <div className='mt-5 flex items-center gap-6'>
                            <Button
                                type="submit"
                                className="rounded-none h-10 w-28"
                                disabled={Boolean(loading)}
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
                                type="button"
                                className="rounded-none h-10 w-28"
                            >
                                SIGN UP
                            </Button>
                        </div>
                    </form>

                    <div className="mt-12 text-sm flex items-center justify-between">
                        <p className='text-[#000000]'>or with email</p>
                        <p className='text-[#3751FE] font-bold'>Facebook</p>
                        <p className='text-[#3751FE] font-bold'>LinkedIn</p>
                        <p className='text-[#3751FE] font-bold'>Google</p>
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
