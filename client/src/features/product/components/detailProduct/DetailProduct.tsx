import { useParams } from 'react-router-dom';

export const DetailProduct = () => {
  const { prodId } = useParams();
  return <div>DetailProduct {prodId}</div>;
};
