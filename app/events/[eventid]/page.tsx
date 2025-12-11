"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Users, MapPin } from "lucide-react";
import events from "@/util/Data/Event";

interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    time: string;
    venue: string;
    capacity: number;
    amount: number[];
    Coordinator: string[][];
    is_open: boolean;
    link: string;
}

const EventDetails: React.FC = () => {
    const params = useParams();
    const id = params?.eventid as string;
    const event = events[parseInt(id || "0")] as Event;
    const [registrationCount, setRegistrationCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [availableSpots, setAvailableSpots] = useState<number>(0);

    useEffect(() => {
        const fetchRegistrationCount = async () => {
            if (!event?.link) return;

            try {
                const response = await fetch(`/api/registerdetail?eventname=${event.link}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch registration count');
                }

                const data = await response.json();
                const count = data.count || 0;
                setRegistrationCount(count);


                const spots = event.capacity - count;
                setAvailableSpots(Math.max(0, spots));
            } catch (error) {
                console.error('Error fetching registration count:', error);
                setRegistrationCount(0);
                setAvailableSpots(event.capacity);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRegistrationCount();
    }, [event?.link, availableSpots, registrationCount]);

    if (!event) {
        return <h2 className="text-center text-red-500 text-2xl mt-20">Event not found</h2>;
    }

    const renderRegistrationButton = () => {
        if (isLoading) {
            return (
                <button className="mt-4 w-full bg-gray-500 text-gray-900 py-2 rounded-md font-bold">
                    Loading...
                </button>
            );
        }

        if (!event.is_open || availableSpots <= 0) {
            return (
                <button className="mt-4 w-full bg-red-500 text-gray-900 py-2 rounded-md font-bold">
                    Registration Closed
                </button>
            );
        }

        return (
            <Link href={`/Register/${event.link}?type=event`}>
                <button className="mt-4 w-full bg-yellow-500 text-gray-900 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors">
                    Register
                </button>
            </Link>
        );
    };

    return (
        <div className="relative min-h-screen bg-gray-900 text-gray-300">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${event.image})` }}
            />

            <div className="relative z-10 max-w-4xl mx-auto py-24 px-6">
                <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-lg">
                    <div className="flex justify-center items-center">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-56 h-64 object-fill rounded-xl mb-8"
                        />
                    </div>

                    <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">{event.title}</h1>
                    <p className="text-lg leading-relaxed mb-6 whitespace-pre-line">{event.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center space-x-4">
                            <Calendar className="h-10 w-10 text-yellow-400" />
                            <div>
                                <h3 className="text-xl font-semibold">Date & Time</h3>
                                <p className="text-gray-400">{event.time}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <MapPin className="h-10 w-10 text-yellow-400" />
                            <div>
                                <h3 className="text-xl font-semibold">Venue</h3>
                                <p className="text-gray-400">{event.venue}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Users className="h-10 w-10 text-yellow-400" />
                            <div>
                                <h3 className="text-xl font-semibold">Capacity</h3>
                                <p className="text-gray-400">
                                    {event.capacity} Participants
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold">Registration Fee</h3>
                        <ul className="text-gray-400 pl-10">
                            <li>IEI Members (TKMCE & Non-TKMCE): Rs{event.amount[2]}</li>
                            <li>Non-IEI Members (TKMCE): Rs{event.amount[1]}</li>
                            <li>Non-TKMCE Participants (Non-TKMCE): Rs{event.amount[0]}</li>
                        </ul>
                    </div>

                    <h2 className="font-bold text-xl mt-5">Coordinator</h2>
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col">
                            <h3>{event.Coordinator[0][0]}</h3>
                            <h3>{event.Coordinator[0][1]}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3>{event.Coordinator[1][0]}</h3>
                            <h3>{event.Coordinator[1][1]}</h3>
                        </div>
                    </div>

                    {renderRegistrationButton()}

                    <div className="mt-8 text-center">
                        <Link
                            href="/events"
                            className="inline-block px-8 py-4 rounded-lg font-bold border-2 border-gray-700 hover:border-yellow-400/50 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                        >
                            Back to Events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;