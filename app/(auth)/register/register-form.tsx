"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterBody, RegisterBodyType } from "@/validations/auth.validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {useForm } from "react-hook-form";

export default function RegisterForm() {
    const router = useRouter()
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (values: RegisterBodyType) => {
    router.push('/verify')
  };
  return (
    <Form {...form}>
      <form
        className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none"
                  placeholder="User Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  id="textInput"
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  id="textInput"
                  className="h-[50px]  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
              focus:bg-white focus:outline-none"
                  placeholder="Confirm Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="!mt-8 w-full bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 "
        >
          Register
        </Button>
        <Button
          type="submit"
          className="!mt-8 w-full bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-300 text-gray-800 "
          onClick={()=>{
            router.push('/login')
            // router.refresh();
          }}
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
