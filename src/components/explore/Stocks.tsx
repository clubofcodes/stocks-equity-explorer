import {
  useGetDailyStocksQuery,
  useGetTopStocksQuery
} from '@/services/repo.service';
import { Stock } from './stock';
import Card from '../card/Card';
import SearchBar from '../search-bar/SearchBar';

const Stocks = () => {
  const { data } = useGetTopStocksQuery({
    function: 'TOP_GAINERS_LOSERS'
  });

  const { data: DailyStock } = useGetDailyStocksQuery({
    function: 'TIME_SERIES_DAILY'
  });

  console.log(data, DailyStock);
  return (
    <section className="section-defaults">
      <SearchBar />
      <div className="container mx-auto">
        <h2 className="">Top Gainers</h2>
        <div className="grid grid-cols-4 gap-5 my-5">
          {data?.top_gainers.slice(0, 4).map((stock: Stock, i: number) => (
            <>
              <Card stockData={stock} gainers={true} />
            </>
          ))}
        </div>
        <h2 className="section-title">Top Losers</h2>
        <div className="grid grid-cols-4 gap-5 my-5">
          {data?.top_losers.slice(0, 4).map((stock: Stock, i: number) => (
            <>
              <Card stockData={stock} gainers={false} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stocks;
