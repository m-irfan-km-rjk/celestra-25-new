"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import events from '@/util/Data/Event';
import competitions from '@/util/Data/competitions';

interface Event {
    link: string;
    isteamevent?: boolean;
    teammebercount?: number;
    qrcode: string[];
    amount: number[]
}

interface Competition {
    link: string;
    isteamevent?: boolean;
    teammebercount?: number;
    qrcode: string[];
    amount: number[]
}
const RegisterContent = () => {
    const params = useParams();
    const eventname = params?.eventname as string;
    const searchParams = useSearchParams();
    const eventType = searchParams.get('type');
    const [uploading, setUploading] = useState(false);
    const [amount, setamount] = useState(0.0)
    const [isLoading, setIsLoading] = useState(false);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'gautham');

            setUploading(true);
            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/di8nopqny/image/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (data.secure_url) {
                    setFormData((prev) => ({ ...prev, img_url: data.secure_url }));
                    console.log('Uploaded image URL:', data.secure_url);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            } finally {
                setUploading(false);
            }
        }
    };

    const [eventfound, seteventfound] = useState<Event | Competition | null>(null);
    const [formData, setFormData] = useState({
        member_0: '',
        email_0: '',
        phone_number_0: '',
        college_0: '',
        year_0: '',
        branch_0: '',
        batch_0: '',

        eventname: eventname,
        isIEIMember: false,
        img_url: '',
        transactionid: '',
        ieimembershipid: '',
        tkm: false,
        amount: 0,
        member_1: '',
        email_1: '',
        phone_number_1: '',
        college_1: '',
        year_1: '',
        branch_1: '',
        batch_1: '',

        member_2: '',
        email_2: '',
        phone_number_2: '',
        college_2: '',
        year_2: '',
        branch_2: '',
        batch_2: '',

        member_3: '',
        email_3: '',
        phone_number_3: '',
        college_3: '',
        year_3: '',
        branch_3: '',
        batch_3: '',

        member_4: '',
        email_4: '',
        phone_number_4: '',
        college_4: '',
        year_4: '',
        branch_4: '',
        batch_4: '',

        member_5: '',
        email_5: '',
        phone_number_5: '',
        college_5: '',
        year_5: '',
        branch_5: '',
        batch_5: '',

        member_6: '',
        email_6: '',
        phone_number_6: '',
        college_6: '',
        year_6: '',
        branch_6: '',
        batch_6: '',
        referal_id: ''
    });

    useEffect(() => {
        if (!eventfound) return;
        let calculatedAmount = eventfound.amount[0];
        if (formData.isIEIMember) {
            calculatedAmount = eventfound.amount[2];
        } else if (formData.tkm) {
            calculatedAmount = eventfound.amount[1];
        }
        setamount(calculatedAmount);
        setFormData((prev) => ({ ...prev, amount: calculatedAmount }));
    }, [formData.isIEIMember, formData.tkm, eventfound]);


    useEffect(() => {
        console.log(eventname)
        console.log(eventType)
        console.log("Event Type Query Param:", searchParams.get('type'));
        window.scrollTo(0, 0);
        let foundevent;
        if (eventType == "event") {
            console.log("helo")
            foundevent = events.find((e) => e.link.toLowerCase() === eventname?.toLowerCase());
        } else if (eventType == "competition") {
            foundevent = competitions.find((e) => e.link.toLowerCase() == eventname?.toLowerCase())
        }
        console.log("Found Event:", foundevent?.link);
        if (foundevent) {
            seteventfound(foundevent);
        }

    }, [])
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            setFormData((prev) => ({
                ...prev,
                [name]: target.checked,
                ...(name === 'isIEIMember' && !target.checked ? { ieimembershipid: '' } : {}),
            }));
        } else {
            setFormData((prev) => {
                let updatedFormData = { ...prev, [name]: value };

                if (name === 'email_0' && value.endsWith('@tkmce.ac.in')) {
                    updatedFormData.tkm = true;
                } else if (name === 'email_0' && !value.endsWith('@tkmce.ac.in')) {
                    updatedFormData.tkm = false;
                }

                return updatedFormData;
            });
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Registration Successful:', result);
                setIsSubmitted(true);
            } else if (response.status === 409) {
                const errorData = await response.json();
                alert(errorData.error);
            } else {
                console.error('Registration Failed:', await response.text());
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 flex justify-center items-center p-6">
            <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-lg">
                {isLoading ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                ) : isSubmitted ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400">Registration Successful!</h2>
                        <p className="mt-4">Thank you for registering for <span className="text-yellow-400 font-bold">{eventname}</span>.</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">Register for {eventname}</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    name="member_0"
                                    value={formData.member_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Email(if tkm provide tkm id for offer)</label>
                                <input
                                    type="email"
                                    name="email_0"
                                    value={formData.email_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-400">Are you a student of TKM ?</label>
                                <input
                                    type="checkbox"
                                    name="tkm"
                                    checked={formData.tkm}
                                    onChange={handleChange}
                                    className="w-6 h-6 rounded focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">College</label>
                                <input
                                    type="text"
                                    name="college_0"
                                    value={formData.college_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Phone Number</label>
                                <input
                                    type="number"
                                    name="phone_number_0"
                                    value={formData.phone_number_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Year</label>
                                <select
                                    name="year_0"
                                    value={formData.year_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                >
                                    <option value="">Select Year</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Branch</label>
                                <select
                                    name="branch_0"
                                    value={formData.branch_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                >
                                    <option value="">Select Branch</option>
                                    <option value={"ece"}>ECE (T)</option>
                                    <option value={"mech"}>Mech (M)</option>
                                    <option value={"civil"}>Civil (C)</option>
                                    <option value={"cs"}>CS (R)</option>
                                    <option value={"eee"}>EEE (E)</option>
                                    <option value={"chem"}>Chem(H)</option>
                                    <option value={"arch"}>Arch(A)</option>
                                    <option value={"Cs Ai"}>Cs Ai</option>
                                    <option value={"electrical&computer"}>ERE</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Batch</label>
                                <input
                                    type="text"
                                    name="batch_0"
                                    value={formData.batch_0}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            {eventfound?.isteamevent &&
                                Array.from({ length: eventfound?.teammebercount ?? 0 }).map((_, index) => (
                                    <div key={index} className="mt-5 border p-4 rounded-md bg-gray-700">
                                        <p className="font-mono uppercase font-bold p-2 text-gray-300">Enter the detail of member {index + 2}</p>
                                        <input
                                            type="text"
                                            name={`member_${index + 1}`}
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"

                                        />
                                        <input
                                            type="email"
                                            name={`email_${index + 1}`}
                                            placeholder="Email"
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"

                                        />
                                        <input
                                            type="number"
                                            name={`phone_number_${index + 1}`}
                                            placeholder="Phone Number"
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"

                                        />
                                        <input
                                            type="text"
                                            name={`college_${index + 1}`}
                                            placeholder="College"
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"

                                        />
                                        <select
                                            name={`year_${index + 1}`}
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        >
                                            <option value="">Choose Year</option>
                                            <option value="1">1st Year</option>
                                            <option value="2">2nd Year</option>
                                            <option value="3">3rd Year</option>
                                            <option value="4">4th Year</option>
                                        </select>
                                        <select
                                            name={`branch_${index + 1}`}
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        >
                                            <option value="">Choose Branch</option>
                                            <option value={"ece"}>ECE (T)</option>
                                            <option value={"mech"}>Mech (M)</option>
                                            <option value={"civil"}>Civil (C)</option>
                                            <option value={"cs"}>CS (R)</option>
                                            <option value={"eee"}>EEE (E)</option>
                                            <option value={"chem"}>Chem(H)</option>
                                            <option value={"arch"}>Arch(A)</option>
                                            <option value={"Cs Ai"}>Cs Ai</option>
                                            <option value={"electrical&computer"}>ERE</option>
                                        </select>
                                        <select
                                            name={`batch_${index + 1}`}
                                            onChange={handleChange}
                                            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        >
                                            <option value="">Choose Batch</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                ))}
                            {
                                eventType !== "competition" ? <>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-gray-400">Are you an IEI Member?</label>
                                        <input
                                            type="checkbox"
                                            name="isIEIMember"
                                            checked={formData.isIEIMember}
                                            onChange={handleChange}
                                            className="w-6 h-6 rounded focus:ring-2 focus:ring-yellow-400"
                                        />
                                    </div>
                                </> : <></>
                            }


                            {formData.isIEIMember && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-400">Membership ID</label>
                                    <input
                                        type="text"
                                        name="ieimembershipid"
                                        value={formData.ieimembershipid}
                                        onChange={handleChange}
                                        className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required={formData.isIEIMember}
                                    />
                                </div>
                            )}
                            <div>
                                <h1 className="text-xl font-bold mb-4">Payment</h1>

                                {eventfound?.qrcode && eventfound.qrcode.length > 0 && (
                                    <>
                                        {formData.isIEIMember ? (
                                            <div className='w-full flex flex-col justify-center items-center gap-5'>
                                                <div>Amount:{amount}</div>
                                                <img src={eventfound.qrcode[2]} alt="QR Code" className="w-80 h-96 mb-2" />
                                            </div>
                                        ) : formData.tkm ? (
                                            <div className='w-full flex flex-col justify-center items-center'>
                                                <div>Amount:{amount}</div>
                                                <img src={eventfound.qrcode[1]} alt="QR Code" className="w-80 h-96 mb-2" />

                                            </div>
                                        ) : (
                                            <div className='w-full flex flex-col justify-center items-center'>
                                                <div className='text-xl font-bold mb-4'>Amount:{amount}</div>
                                                <img src={eventfound.qrcode[0]} alt="QR Code" className="w-80 h-96" />
                                            </div>
                                        )}
                                    </>
                                )}
                                <div>
                                    <h1 className="text-xl font-bold mb-4 mt-4">Upload your screenshot</h1>

                                </div>
                                <input
                                    type="file"
                                    name="transactionScreenshot"
                                    onChange={handleFileUpload}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-gray-900 hover:file:bg-yellow-300"
                                    required
                                />
                                <div className='mt-4'>
                                    <label className="block text-sm font-medium text-gray-400">Transaction ID</label>
                                    <input
                                        type="text"
                                        name="transactionid"
                                        value={formData.transactionid}
                                        onChange={handleChange}
                                        className="mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required
                                    />
                                </div>
                                {uploading && <p className="text-yellow-400">Uploading image...</p>}
                            </div>
                            <h1 className="text-xl font-bold mb-4 mt-4">Referal id?</h1>
                            <input
                                type="text"
                                name="referal_id"
                                value={formData.referal_id}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <div>
                                <h3 className='text-sm text-red-500'>*Accommodation is available for non-TKM participants attending the event. If required, an additional fee  will be apply . The form will be shared later.</h3>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

const Register = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-900 text-gray-300 flex justify-center items-center p-6">
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            </div>
        }>
            <RegisterContent />
        </Suspense>
    );
};

export default Register;