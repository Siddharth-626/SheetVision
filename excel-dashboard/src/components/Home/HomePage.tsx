import { useNavigate } from "react-router-dom";
import { FaTable, FaChartLine, FaEdit, FaTachometerAlt } from "react-icons/fa";

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/dashboard");
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
            {/* Hero Section */}
            <section className="min-h-screen bg-slate-200 dark:bg-slate-900 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-5xl font-extrabold text-blue-600 mb-4 drop-shadow-lg">SheetVision</h1>
                <p className="text-black font-sans dark:text-white text-lg max-w-xl mb-8">
                    Turn Excel spreadsheets into beautiful, interactive dashboards and insights—without any hassle.
                </p>
                <button
                    onClick={handleClick}
                    className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-600 hover:text-white transition"
                >
                    🚀 Launch Dashboard
                </button>
            </section>

            {/* Upload Invitation */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Upload Your Excel File</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Visualize your spreadsheet data as interactive tables, forms, and charts in just a few clicks.
                </p>
                <button
                    onClick={handleClick}
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition text-lg"
                >
                    Get Started
                </button>
            </section>

            {/* Features */}
            <section className="bg-white dark:bg-slate-900 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<FaTable className="text-green-500 text-4xl mb-4" />}
                            title="Dynamic Tables"
                            description="Display, search, and sort your Excel data as beautiful responsive tables."
                        />
                        <FeatureCard
                            icon={<FaEdit className="text-yellow-500 text-4xl mb-4" />}
                            title="Editable Forms"
                            description="Turn Excel rows into dynamic forms for quick data entry and editing."
                        />
                        <FeatureCard
                            icon={<FaChartLine className="text-blue-500 text-4xl mb-4" />}
                            title="Bar & Line Charts"
                            description="Visualize data trends clearly using interactive bar and line charts."
                        />
                        <FeatureCard
                            icon={<FaTachometerAlt className="text-purple-500 text-4xl mb-4" />}
                            title="Unified Dashboard"
                            description="Manage all your visualizations inside a clean and responsive dashboard."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
                © 2025 SheetVision. this is just a basic Version.
            </footer>
        </div>
    );
};

const FeatureCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
                {icon}
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
            </div>
        </div>
    );
};
