import React from 'react';
import { useEffect, useState } from 'react';
import GiftView from 'Components/GiftView';
import Loading from 'Components/Loading';
import getUsers from '../../api/users';
import './index.scss';
import getCarts from '../../api/carts';

const Gift = () => {
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getUsers();
        const usersResponseData = usersResponse.data;
        setUsers(usersResponseData);

        const cartsResponse = await getCarts();
        const cartsResponseData = cartsResponse.data;
        const filteredUsers = cartsResponseData.map((item) => {
          const newUser = usersResponseData.find(
            (user) => user.id === item.id,
          );

          if (newUser) {
            return {
              ...newUser,
              firstname: item.firstname,
              lastname: item.lastname,
            };
          }
          return null;
        });

        setCarts(filteredUsers.filter(Boolean));
        setLoading(false);
      } catch (error) {
        console.log('Error retrieving data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gift">
      {loading ? (
        <Loading />
      ) : (
        <div className="gift__container">
          <h1 className="gift__title">Send a Gift to a friend!</h1>
          {carts.map((user) => (
            <GiftView
              key={user.id}
              firstname={user.name.firstname}
              lastname={user.name.lastname}
              id={user.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gift;
