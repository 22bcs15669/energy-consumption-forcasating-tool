const [predictions, setPredictions] = useState([]);

const fetchPredictions = async () => {
    try {
        const response = await axios.get('/api/predict');
        setPredictions(response.data);
    } catch (error) {
        console.error("Error fetching predictions:", error);
    }
};

useEffect(() => {
    fetchPredictions();
}, []);

return (
    <div>
        <h2>Predicted Energy Consumption (Next 30 Days)</h2>
        <ul>
            {predictions.map((value, index) => (
                <li key={index}>Day {index + 1}: {value.toFixed(2)} kWh</li>
            ))}
        </ul>
    </div>
);
