import { useParams } from 'react-router-dom';

export default function ProjContent() {
  const { name } = useParams();
  return (
    <div>{name}</div>
  );
}
