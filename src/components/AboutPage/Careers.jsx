import React from "react";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";

const jobs = [
    "Head of Marketing",
    "Telemarketing Executive",
    "Head of Human Resource",
    "Technical Evaluator",
];

const Careers = () => {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-12 py-20">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
                    <div>
                        <p className="text-sm text-[#F21B23] font-semibold mb-3">Career</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-black">
                            Opportunities to <br /> Join Our Team
                        </h2>
                    </div>

                    <p className="text-slate-600 max-w-lg lg:mt-8">
                        We offer a dynamic and supportive work environment that encourages
                        professional growth and development. As part of our team, you'll
                        have the opportunity to work on diverse projects.
                    </p>
                </div>

                {/* JOB LIST */}
                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <JobCard key={index} title={job} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const JobCard = ({ title }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50 rounded-xl px-6 py-5">
        {/* LEFT */}
        <div>
            <h3 className="text-lg font-semibold text-black">{title}</h3>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500 mt-3">
                <span className="flex items-center gap-1">
                    <Clock size={16} /> Full-time
                </span>
                <span className="flex items-center gap-1">
                    <MapPin size={16} /> New Jersey 45463
                </span>
            </div>
        </div>

        {/* ACTION */}
        <button className="self-start sm:self-center w-10 h-10 rounded-full border border-[#F21B23] flex items-center justify-center text-[#F21B23] hover:bg-[#F21B23] hover:text-white transition">
            <ArrowUpRight size={18} />
        </button>
    </div>
);

export default Careers;
