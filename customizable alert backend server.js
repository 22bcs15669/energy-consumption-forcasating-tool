// Add alert route in server.js
app.post('/api/alerts', async (req, res) => {
    const { threshold } = req.body;
    try {
        const highConsumptionData = await EnergyData.find({ consumption: { $gte: threshold } });
        res.json(highConsumptionData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching alerts', error });
    }
});
