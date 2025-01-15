const [threshold, setThreshold] = useState("");
const [alerts, setAlerts] = useState([]);

const fetchAlerts = async () => {
    try {
        const response = await axios.post("/api/alerts", { threshold });
        setAlerts(response.data);
    } catch (error) {
        console.error("Error fetching alerts:", error);
    }
};

return (
    <div>
        <h2>Set Alert Threshold</h2>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                fetchAlerts();
            }}
        >
            <input
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                placeholder="Threshold (kWh)"
                required
            />
            <button type="submit">Set Alert</button>
        </form>
        <h3>Alerts</h3>
        <ul>
            {alerts.map((data) => (
                <li key={data._id}>
                    {new Date(data.date).toLocaleDateString()} - {data.consumption} kWh
                </li>
            ))}
        </ul>
    </div>
);
