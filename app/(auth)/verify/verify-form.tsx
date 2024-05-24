"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from "@/components/ui/use-toast"
import { OtpInput, OtpInputType } from "@/validations/auth.validate"
import { useRouter } from "next/navigation"


export function VerifyForm() {
    const router = useRouter()
  const form = useForm<OtpInputType>({
    resolver: zodResolver(OtpInput),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: OtpInputType) {
    console.log('data: ',data);
    
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data.pin, null, 2)}</code>
        </pre>
      ),
    })

    router.push('/login')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ml-10 lg:ml-0">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel className="text-3xl font-semibold mb-8">Email Verification</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="justify-between">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="w-2/3">
              Enter the 6-digit verification code that was sent to your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-sm text-slate-500 mt-4">{`Didn't receive code? `}<a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>

        <Button variant={'indigo'} className="w-2/3 " type="submit">Submit</Button>
      </form>
    </Form>
  )
}
