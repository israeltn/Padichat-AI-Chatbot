import Logo from "@/components/ui/logo"
const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-[800px] block">
                <div className="w-full"><Logo /></div>
                <div className="pt-32">
                    <h1 className="text-4xl font-bold">Welcome back! Log into <br /> your PadiChat account</h1>
                </div>

            </div>
        </div>
    )
}
export default Login