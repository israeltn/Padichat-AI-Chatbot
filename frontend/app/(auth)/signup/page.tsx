"use client"
import Logo from "@/components/ui/logo"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Divider from "@/components/custom-components/divider"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const SignUpSchema = z.object({
  fullname: z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})


const SignUp = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>(
    {
      resolver: zodResolver(SignUpSchema),
      defaultValues: { fullname: "", email: "", password: "" }
    }
  )
  function handleSignupSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[700px] w-full block">
        <div className="w-full"><Logo /></div>
        <div className="pt-10">
          <h1 className="text-xl font-medium">Join PadiChat. – Your Safe Space <br />for Support</h1>
        </div>
        <div className="mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignupSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                    <FormControl>
                      <Input placeholder="Enter your Email Address" {...field} />
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
                    <FormControl>
                      <Input placeholder="Create a password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center w-full">
                <Button className="w-full py-5 rounded-[6px] text-white" type="submit">Save and continue</Button>
              </div>
              <Divider>or</Divider>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp