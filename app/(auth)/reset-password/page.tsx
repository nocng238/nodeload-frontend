'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
export default function ResetPasswordPage(){
    const form = useForm<{email:string}>({
        resolver: zodResolver(z.object({
            email:z.string().email()
        }).strict()),
        defaultValues: {
          email: "",
        },
    })
    const onSubmit = (data:{email:string})=>{

    }
    return <div className="w-full">
<h1 className='text-3xl font-semibold text-center mb-8'>Reset Password</h1>
<div >
    <Form {...form}>
    <form
        className="space-y-5 max-w-[600px] flex-shrink-0 w-full"
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
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none"
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"indigo"}
          className=" w-full"
        >   
          Reset Password
        </Button>
        <p className="text-center">Not registered yet? <Link href="/register" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></Link></p>
        </form>
    </Form>
</div>
    </div>
}