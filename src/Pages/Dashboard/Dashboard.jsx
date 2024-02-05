import { Account, Client } from 'appwrite';
import { useEffect, useState } from 'react';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getEmailSession();
  }, []);
  const getEmailSession = async () => {
    await authService
      .getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        navigate('/');
      });
  };

  if (!user) return <h1>Loading dashboard...</h1>;

  return <h1>This is a dashboard. Hello {user.name}</h1>;
}

export default Dashboard;
