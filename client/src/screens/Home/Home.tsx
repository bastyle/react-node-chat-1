import React, { useEffect } from 'react';
import { Account } from "../../screens/Account"
import { News } from "../../screens/News";
import "./style.css";
import { useUser } from '../../components/User/UserContext';

export const Home = (): JSX.Element => {
  // In your Home component
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, [setUser]);

  return (
    <div className="home">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="intercom">
            <News />
          </div>
          <div className="intercom-widget-wrapper">
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};
