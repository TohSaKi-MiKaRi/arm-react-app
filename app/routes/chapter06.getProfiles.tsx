import { useState, useEffect } from "react";

export default function GetProfiles() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/getProfiles');
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    console.log('Network response was not ok.');
                }
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="m-5 p-5">Loading....</p>;
    }

    if (!data) {
        return <p className="m-5 p-5">No data found.</p>;
    }

    return (
        <div className="m-5 p-5">
             <h1 className="text-2xl font-bold">Hi User Profile</h1>
            <img
                src={data.image}
                alt={`${data.fname} ${data.lname}`}
                className="w-48 h-48 object-cover mb-5"
            />
            <h2 className="text-2xl font-bold mb-2">{`${data.fname} ${data.lname}`}</h2>
            <p className="text-gray-700 mb-2"><strong>Major:</strong> {data.major}</p>
            <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${data.email}`} className="text-blue-500">{data.email}</a></p>
        </div>
    );
}