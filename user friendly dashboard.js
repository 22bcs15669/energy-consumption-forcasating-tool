import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

return (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
            Energy Consumption Dashboard
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Energy Data</Typography>
                        <ul>
                            {energyData.map((data) => (
                                <li key={data._id}>
                                    {new Date(data.date).toLocaleDateString()} - {data.consumption} kWh
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Predictions</Typography>
                        <ul>
                            {predictions.map((value, index) => (
                                <li key={index}>Day {index + 1}: {value.toFixed(2)} kWh</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Set Alerts</Typography>
                        {/* Add Alert Form */}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Scenario Analysis</Typography>
                        {/* Add Scenario Analysis Form */}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
);
