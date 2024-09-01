import React from 'react';

const IndustryIssueOverview = () => {
    return (
        <section className="py-16" style={{ minHeight: "fit-content" }}>
            <div className="relative w-full h-screen min-h-fit text-white overflow-hidden" style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            
            <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-light mb-12">How is 401k plan management broken?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</span>
                    <h3 className="text-2xl font-light">Late reports.</h3>
                </div>
                <p className="text-gray-300">
                    The industry standard is a 15-21 day close, which means you won't get
                    this month's numbers until next month is already half over. That's useless.
                </p>
                <p className="text-gray-300">
                    With Digits, you'll get your reports by the 5th of
                    the month—2-3X faster than any competing firm.
                </p>
                </div>
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</span>
                    <h3 className="text-2xl font-light">TLDR; please?</h3>
                </div>
                <p className="text-gray-300">
                    Financials delivered as Excel models or black & white PDFs take far too
                    long to understand, with the key takeaways lost in a sea of numbers.
                </p>
                <p className="text-gray-300">
                    Digits Reports are live, visual, and intuitive—designed
                    to help you understand your business in seconds.
                </p>
                </div>
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</span>
                    <h3 className="text-2xl font-light">Late reports.</h3>
                </div>
                <p className="text-gray-300">
                    The industry standard is a 15-21 day close, which means you won't get
                    this month's numbers until next month is already half over. That's useless.
                </p>
                <p className="text-gray-300">
                    With Digits, you'll get your reports by the 5th of
                    the month—2-3X faster than any competing firm.
                </p>
                </div>
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</span>
                    <h3 className="text-2xl font-light">TLDR; please?</h3>
                </div>
                <p className="text-gray-300">
                    Financials delivered as Excel models or black & white PDFs take far too
                    long to understand, with the key takeaways lost in a sea of numbers.
                </p>
                <p className="text-gray-300">
                    Digits Reports are live, visual, and intuitive—designed
                    to help you understand your business in seconds.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };
export default IndustryIssueOverview;