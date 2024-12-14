import { useNavigate } from 'react-router-dom';

const ExitButton = ({ variant = 'secondary', size = 'sm', label = 'Quitter', redirectPath = '/' }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={() => navigate(redirectPath)}
    >
      {label}
    </button>
  );
};

export default ExitButton;