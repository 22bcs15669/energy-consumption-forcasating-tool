app.post('/api/scenario-analysis', async (req, res) => {
    const { hypotheticalConsumption } = req.body;
    try {
        const predictedData = hypotheticalConsumption.map((consumption) => ({
            consumption,
            futureImpact: consumption * 1.2, // Example logic for impact
        }));
        res.json(predictedData);
    } catch (error) {
        res.status(500).json({ message: 'Error performing scenario analysis', error });
    }
});
