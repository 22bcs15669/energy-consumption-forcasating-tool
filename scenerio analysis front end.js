const [hypotheticalData, setHypotheticalData] = useState([]);
const [scenarioInput, setScenarioInput] = useState("");

const performScenarioAnalysis = async () => {
    try {
        const response = await axios.post("/api/scenario-analysis", {
            hypotheticalConsumption: scenarioInput.split(",").map(Number),
        });
        setHypotheticalData(response.data);
    } catch (error) {
        console.error("Error performing scenario analysis:", error);
    }
};

return (
    <div>
        <h2>Scenario Analysis</h2>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                performScenarioAnalysis();
            }}
        >
            <input
                type="text"
                value={scenarioInput}
                onChange={(e) => setScenarioInput(e.target.value)}
                placeholder="Enter consumption values, e.g., 100, 150, 200"
                required
            />
            <button type="submit">Analyze</button>
        </form>
        <h3>Scenario Results</h3>
        <ul>
            {hypotheticalData.map((data, index) => (
                <li key={index}>
                    Predicted Consumption: {data.consumption} kWh, Future Impact: {data.futureImpact} kWh
                </li>
            ))}
        </ul>
    </div>
);
