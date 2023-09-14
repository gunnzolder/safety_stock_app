
# Safety Stock App

This is a simple Next.js application to calculate the safety stock based on daily demand and a 30-day supply history.

## Explanation of Calculations

The safety stock is a term used to describe a level of stock that is maintained below the cycle stock to buffer against stock-outs. The safety stock calculation we used is based on the maximum cumulative deficit method. This method identifies the most significant shortage over a given period (in this case, the 30-day supply history) and uses that as the safety stock level. 

The formula for this method is:

\[
	ext{Safety Stock} = \max \left( 	ext{Daily Demand} - 	ext{Daily Supply} 
ight)
\]

For a 100% service level, the maximum cumulative deficit over the 30-day period is taken as the safety stock. 

## Setup

1. First, install the necessary packages:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

Fill in the daily demand and supply history, then click "SUBMIT" to see the calculated safety stock.

## References

- Silver, E. A., Pyke, D. F., & Peterson, R. (1998). Inventory management and production planning and scheduling (3rd ed.). John Wiley & Sons.
