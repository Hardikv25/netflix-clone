'use client'

import Input from "@/components/input";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login') 
    },[])

    const register = useCallback(async()=>{
        try{
            await axios.post('/api/register',{
                email,name,password
            });
        }
        catch(error){
            console.log(error);
        }
    },[email,name,password]);

    return (
        <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="w-full h-full bg-black lg:bg-black/50">
                <nav className="px-12 py-5">
                    <Image src="/images/Logo.png" alt="logo" className="h-12" width={125} height={125}></Image>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full rounded-md">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                            <Input onChange={(ev: any) => { setName(ev.target.value) }} label="Username" id="name" value={name} />
                            )}
                            <Input onChange={(ev: any) => { setEmail(ev.target.value) }} label="Email" id="email" type="email" value={email} />
                            <Input onChange={(ev: any) => { setPassword(ev.target.value) }} label="Password" id="password" type="password" value={password} />
                        </div>
                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
                            {variant === "login" ? 'Login' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            { variant === 'login' ? 'First time using Netflix?' : 'Already have an Account?' }
                            <span onClick={toggleVariant} className="ml-1 text-white hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;