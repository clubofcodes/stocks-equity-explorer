import {
  useGetDailyStocksQuery,
  useGetTopStocksQuery
} from '@/services/repo.service';
import { Stock } from './stock';

const Stocks = () => {
  const { data } = useGetTopStocksQuery({
    function: 'TOP_GAINERS_LOSERS'
  });

  const { data: DailyStock } = useGetDailyStocksQuery({
    function: 'TIME_SERIES_DAILY'
  });

  console.log(data, DailyStock);
  return (
    <section className="p-10">
      <h2 className="section-title">Top Gainers</h2>
      <div className="grid grid-cols-4 gap-5 my-5">
        {data?.top_gainers.map((stock: Stock, i: number) => (
          <div key={i} className="card border border-gray-200">
            <p>Symbol : {stock.ticker}</p>
            <p>Change Amount: {stock.change_amount}</p>
            <p>Change Percentage : {stock.change_percentage}</p>
            <p>Price : {stock.price}</p>
            <p>Volume : {stock.volume}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title">Top Losers</h2>
      <div className="grid grid-cols-4 gap-5 my-5">
        {data?.top_losers.map((stock: Stock, i: number) => (
          <div key={i} className="card border border-gray-200">
            <p>Symbol : {stock.ticker}</p>
            <p>Change Amount: {stock.change_amount}</p>
            <p>Change Percentage : {stock.change_percentage}</p>
            <p>Price : {stock.price}</p>
            <p>Volume : {stock.volume}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stocks;
