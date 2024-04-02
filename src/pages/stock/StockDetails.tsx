import { useGetStockDetailsQuery } from '@/services/repo.service';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

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
  return <div>StockDetails:{id}</div>;
};

export default StockDetails;
