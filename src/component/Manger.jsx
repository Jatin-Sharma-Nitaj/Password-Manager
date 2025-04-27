import { Copy, EyeIcon, EyeOffIcon, LucidePlusSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Edit, Delete } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const savePassword = () => {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        console.log([...passwordArray, form]);
        setform({ site: "", username: "", password: "" });
    };
    const deletePassword = (id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };
    const editPassword = (id) => {
        console.log("Editing password with id ", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    };

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
        // {...form} → Copy everything currently inside form.
        // [e.target.name] → Find the correct key (site, username, or password).
        // = e.target.value → Update that key's value.
    };
    const copyText = (text) => {
        toast('🦄 Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className=" h-full min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] inset-0 flex flex-col items-center justify-start px-5 py-24">
                {/* Form Section */}
                <div className="mx-auto max-w-md bg-[#0a0a0a] rounded-3xl shadow-2xl p-8 z-30">
                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-4 tracking-tight">
                        <span className="text-purple-400">&lt;</span>
                        Pass
                        <span className="text-purple-400">Guard/&gt;</span>
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-lg md:text-xl font-medium text-center text-gray-400 mb-10">
                        Manage & Secure your passwords
                    </h2>

                    {/* Form */}
                    <div className="flex flex-col gap-6">
                        {/* Website Field */}
                        <input value={form.site} onChange={handlechange} name='site'
                            className="bg-[#1a1a1a] border border-purple-500 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                            type="text"
                            placeholder="Website (e.g., google.com)"
                        />

                        {/* Credentials Fields */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <input value={form.username} onChange={handlechange} name='username'
                                className="flex-1 bg-[#1a1a1a] border border-purple-500 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                type="text"
                                placeholder="Username"
                            />

                            <div className="flex-1 relative">
                                <input value={form.password} onChange={handlechange} name='password'
                                    className="w-full bg-[#1a1a1a] border border-purple-500 rounded-full px-6 py-4 pr-14 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                />
                                {/* Eye Icon */}
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                                >
                                    {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeOffIcon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Save Password Button */}
                        <button onClick={savePassword}
                            className="bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-3 text-white font-semibold rounded-full px-6 py-4 transition-all duration-300 w-auto active:scale-95 shadow-lg"
                        >
                            <LucidePlusSquare className="w-5 h-5" />
                            Save Password
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="mx-auto container px-4 md:px-12 lg:px-20 mt-10 w-full overflow-x-auto">
                    <h2 className="text-2xl text-white mb-6 text-center">Your Saved Passwords</h2>
                    {passwordArray.length === 0 && <h2 className="text-white">No Password saved yet</h2>}
                    <div className="mx-auto container overflow-x-auto">
                        <table className="min-w-full text-white bg-[#1a1a1a] rounded-lg shadow-md">
                            <thead className="bg-[#333333]">
                                <tr className="bg-purple-500 text-white text-lg font-bold">
                                    <th className="py-3 px-2 text-center">Website</th>
                                    <th className="py-3 px-2 text-center">Username</th>
                                    <th className="py-3 px-2 text-center">Password</th>
                                    <th className="py-3 px-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-700">
                                        <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.site}
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <Copy className="w-4 h-4 cursor-pointer" onClick={() => copyText(item.site)} />
                                                {item.site}
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">
                                            <div className="flex items-center justify-center gap-2">
                                                <Copy className="w-4 h-4 cursor-pointer" onClick={() => copyText(item.username)} />
                                                {item.username}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">
                                            <div className="flex items-center justify-center gap-2">
                                                <Copy className="w-4 h-4 cursor-pointer" onClick={() => copyText(item.password)} />
                                                {item.password}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-semibold">
                                            <div className="flex items-center justify-center gap-4">
                                                <Edit className="cursor-pointer" onClick={() => (editPassword(item.id))} />
                                                <Delete className="cursor-pointer" onClick={() => (deletePassword(item.id))} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Manager;
