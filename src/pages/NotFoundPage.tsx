import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <section>
      <h1>Not Found Page</h1>
      <button type="button" onClick={handlePreviousPage}>
        Previous
      </button>
    </section>
  );
}
