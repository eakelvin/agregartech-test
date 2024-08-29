"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import clip from "@/assets/images/clip-message-sent 1.png";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Spinner from '@/components/ui/spinner';

interface IFormInput {
    email: string;
    password: string;
}

const Cd = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState<Boolean>(false);

    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<IFormInput>({ mode: "onChange" });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            setLoading(true);
            console.log(data);
        } catch (error: any) {
            console.error("Login error: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="h-full w-full flex flex-row">
                <main
                    className={`basis-full flex justify-center h-screen items-start sm:items-center min-[1020px]:basis-1/2 px-5 lg:px-10 pb-5`}
                >
                    <div className="w-full sm:w-[500px]">
                        <div className="fixed top-0 pt-4 bg-white w-full left-3 sm:left-5 text-[#3751FE]">
                            <h1 className='px-5 lg:px-10'>Digital</h1>
                        </div>
                        <h3 className="self-start font-semibold text-3xl text-[#3751FE]">
                            Artificial Intelligence Driving Results For The Travel Industry
                        </h3>
                        <h5 className="self-start mb-8 text-[15px] text-[#949494]">
                            Welcome back! Please login to your account.
                        </h5>
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row justify-between w-full">
                                {/* {errors.email && (
                  <p className="text-red-400 self-end text-[12px]" role="alert">
                    {errors.email.message}
                  </p>
                )} */}
                            </div>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="text-base"
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Password is required" }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <Input
                                            type="password"
                                            className="pr-14 text-base"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                            <div className="flex flex-row justify-between w-full">
                                <label htmlFor="password" className="!text-slate-900">
                                    Password
                                </label>
                                {/* {errors.password && (
                  <p className="text-red-400 self-end text-[12px]" role="alert">
                    {errors.password.message}
                  </p>
                )} */}
                                <label className="!text-primary cursor-pointer">
                                    Forgot password?
                                </label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Button
                                    type="submit"
                                    className="rounded-none h-10"
                                    disabled={Boolean(loading) || !isValid}
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
                                    disabled={Boolean(loading) || !isValid}
                                    className="rounded-none h-10 bg-primary text-white"
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

                        {/* <div className=" mt-5 text-center">
              <p className="text-[12px] text-gray-500">
                By proceeding, you agree to CediRates&apos;{" "}
                <Link href="/terms" className="text-primary underline">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link href="privacy" className="text-primary underline">
                  Privacy Policy
                </Link>
              </p>
            </div> */}
                    </div>
                </main>
                <div className="min-[1020px]:flex fixed w-[50vw] right-0 flex-col items-center justify-center hidden h-full min-h-screen basis-1/2 bg-[#E5E5E5]">
                    <Image src={clip} alt="" className="w-[80%] h-auto" />
                </div>
            </div>
        </>
    )
}

export default Cd
