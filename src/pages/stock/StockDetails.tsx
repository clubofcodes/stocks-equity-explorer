import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStockDetailsQuery } from '@/services/stocks.service';
import { isEmpty } from '@/utils/customFunctions';

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
    <div className="p-10">{!isEmpty(data) ? <>StockDetails:{id}</> : null}</div>
  );
};

export default StockDetails;
