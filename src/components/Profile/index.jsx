import React, { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getUser from '../../api/user';
import './index.scss';
import Error from 'Components/Error';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error retrieving user data', error);
        setLoading(false);
      });
  }, []);

  if (!userData) {
    return <Error />;
  }

  return (
    <div className="profile">
      {loading ? (
        <div className="profile__loading-container">
          <span className="profile__loading-title">Loading...</span>
          <Circles
            className="profile__loading"
            height="80"
            width="80"
            color="#000000"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            marginTop="20px"
          />
        </div>
      ) : (
        <div className="profile__container">
          <h1 className="profile__title">User Profile</h1>
          <div className="profile__info">
            <div className="profile__data1">
              <span className="profile__data">
                First Name:{' '}
                {userData.name ? userData.name.firstname : ''}
              </span>
              <span className="profile__data">
                Email: {userData.email}
              </span>
              <span className="profile__data">
                Street:{' '}
                {userData.address ? userData.address.street : ''}
              </span>
              <span className="profile__data">
                City: {userData.address ? userData.address.city : ''}
              </span>
            </div>
            <div className="profile__data2">
              <span className="profile__data">
                Last Name:{' '}
                {userData.name ? userData.name.lastname : ''}
              </span>
              <span className="profile__data">
                Phone: {userData.phone}
              </span>
              <span className="profile__data">
                Number:{' '}
                {userData.address ? userData.address.number : ''}
              </span>
              <span className="profile__data">
                Zip code:{' '}
                {userData.address ? userData.address.zipcode : ''}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
