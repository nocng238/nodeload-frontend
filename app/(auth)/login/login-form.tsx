"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/validations/auth.validate";
import { useToast } from "@/components/ui/use-toast";
// import authApiRequest from '@/apiRequests/auth'
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useAppContext } from '@/app/app-provider'

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  //   const { setUser } = useAppContext()
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      //   const result = await authApiRequest.login(values)

      //   await authApiRequest.auth({
      //     sessionToken: result.payload.data.token,
      //     expiresAt: result.payload.data.expiresAt
      //   })
      //   toast({
      //     description: result.payload.message
      //   })
      //   setUser(result.payload.data.account)
      router.push("/");
      router.refresh();
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: form.setError,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      {/* <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 max-w-[600px] flex-shrink-0 w-full'
        noValidate
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className='h-[50px]  bg-[rgba(255,255,255,0.07)] focus:outline-none focus:border-none focus:border-blue-500 ' placeholder='Email' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input id='textInput' className='h-[50px]  bg-[rgba(255,255,255,0.07)]' placeholder='Password' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='!mt-8 w-full'>
          Đăng nhập
        </Button>
      </form> */}
      <form
        className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  id="textInput"
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-right mt-2">
          <Link
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="!mt-8 w-full bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 "
        >
          Log In
        </Button>
      </form>
      
    </Form>
  );
};

export default LoginForm;
