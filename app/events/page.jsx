import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';
import events from '@/util/Data/Event';
import Link from 'next/link';

function Events() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">Events</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-300">
                                    <Clock className="h-5 w-5 mr-2" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <MapPin className="h-5 w-5 mr-2" />
                                    <span>{event.venue}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Users className="h-5 w-5 mr-2" />
                                    <span>{event.capacity}</span>
                                </div>
                            </div>
                            <Link href={`/events/${event.id}`}>
                                <button className="mt-4 cursor-pointer w-full bg-yellow-500 text-gray-900 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;