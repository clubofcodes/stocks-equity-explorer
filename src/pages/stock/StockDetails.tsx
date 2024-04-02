import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStockDetailsQuery } from '@/services/repo.service';
import { AreaChart } from '@mantine/charts';
import { transformData } from '@/utils/customFunctions';

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
