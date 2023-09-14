
export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { daily_demand, supply_history } = req.body;

    // Calculating daily deficits
    const daily_deficits = supply_history.map(supply => daily_demand - supply);
    
    // Calculating cumulative deficits
    const cumulative_deficits = daily_deficits.map((val, idx, arr) => {
        return arr.slice(0, idx + 1).reduce((acc, curr) => acc + curr, 0);
    });

    // Determining the maximum cumulative deficit for 100% service level
    const max_cumulative_deficit = Math.max(...cumulative_deficits);

    // Responding with the result
    res.json({
        safety_stock: max_cumulative_deficit,
        date: new Date().toISOString()
    });
}
