const { spawn } = require('child_process');

app.get('/api/predict', async (req, res) => {
    try {
        const data = await EnergyData.find();
        const python = spawn('python3', ['predict.py', JSON.stringify(data)]);

        let output = '';
        python.stdout.on('data', (chunk) => {
            output += chunk.toString();
        });

        python.on('close', () => {
            res.json(JSON.parse(output));
        });
    } catch (error) {
        res.status(500).json({ message: 'Error predicting data', error });
    }
});
