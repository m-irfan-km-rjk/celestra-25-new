import React from 'react';
import { Award, Clock, Coins } from 'lucide-react';
import competitions from '@/util/Data/competitions';
import Link from 'next/link';


function Competitions() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">Competitions</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {competitions.map((competition, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={competition.image}
                            alt={competition.title}
                            className="w-full h-72 object-contain "
                        />
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">{competition.title}</h3>

                            </div>
                            <p className="text-gray-400 mb-4 line-clamp-2">{competition.description}</p>
                            <div className="space-y-2">


                            </div>
                            <Link href={`/competitions/${competition.id}`}>
                                <button className="mt-4 cursor-pointer w-full bg-yellow-500 text-gray-900 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors">
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Competitions;