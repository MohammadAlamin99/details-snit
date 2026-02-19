

const CallOrderBar = () => {
    return (
        <div className="w-full flex items-center justify-between rounded-xl bg-[#F4F5F7] px-5 py-3">
            {/* Left Icon */}
            <div className="flex items-center gap-3">
                <div className="text-[#1E90FF]">
                    {/* Phone Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                    </svg>
                </div>

                {/* Gradient Text */}
                <p
                    className="text-[18px] font-semibold"
                    style={{
                        background: "linear-gradient(90deg, #38BDF8 0%, #1E90FF 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    কল অর্ডার : 01410-050041
                </p>
            </div>

            {/* Right Share Button */}
            <button className="flex items-center justify-center rounded-lg bg-white p-2 shadow-sm hover:bg-gray-100 transition">
                {/* Share Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                    <path d="M16 6l-4-4-4 4" />
                    <path d="M12 2v14" />
                </svg>
            </button>
        </div>
    );
};

export default CallOrderBar;
