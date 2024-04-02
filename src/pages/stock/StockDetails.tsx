import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStockDetailsQuery } from '@/services/repo.service';
import { AreaChart } from '@mantine/charts';
import { transformData } from '@/utils/functions';

const StockDetails: FC = () => {
  const { id } = useParams();
  const { data } = useGetStockDetailsQuery(
    {
      symbol: id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );
  console.log(data);
  const dataT = [
    {
      date: 'Mar 22',
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452
    },
    {
      date: 'Mar 23',
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402
    },
    {
      date: 'Mar 24',
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821
    },
    {
      date: 'Mar 25',
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809
    },
    {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290
    }
  ];
  return (
    <div className="p-10">
      StockDetails:{id}
      <AreaChart
        h={300}
        data={transformData(data)}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        curveType="linear"
      />
    </div>
  );
};

export default StockDetails;
