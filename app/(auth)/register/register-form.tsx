export default function RegisterForm(){
    return <Form {...form}>
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
}