import {
  useGetDailyStocksQuery,
  useGetTopStocksQuery
} from '@/services/repo.service';
import { Stock } from './stock';
import Card from '../card/Card';
import SearchBar from '../search-bar/SearchBar';
import { Fragment } from 'react/jsx-runtime';
import { isEmpty } from '@/utils/customFunctions';

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
      {!isEmpty(data) ? (
        <div className="container mx-auto">
          <h2 className="">Top Gainers</h2>
          <div className="grid grid-cols-4 gap-5 my-2">
            {data?.top_gainers
              .slice(0, 4)
              .map((stock: Stock, stock_index: number) => (
                <Fragment key={stock_index}>
                  <Card stockData={stock} gainers={true} />
                </Fragment>
              ))}
          </div>
          <h2 className="">Top Losers</h2>
          <div className="grid grid-cols-4 gap-5 my-2">
            {data?.top_losers
              .slice(0, 4)
              .map((stock: Stock, stock_index: number) => (
                <Fragment key={stock_index}>
                  <Card stockData={stock} gainers={false} />
                </Fragment>
              ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Stocks;
