import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getUser from '../../api/user';
import './index.scss';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log('Error retrieving user data', error);
      });
  }, []);

  return (
    <div className="profile">
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
              Street: {userData.adress ? userData.adress.street : ''}
            </span>
            <span className="profile__data">
              City: {userData.adress ? userData.adress.city : ''}
            </span>
          </div>
          <div className="profile__data2">
            <span className="profile__data">
              Last Name: {userData.name ? userData.name.lastname : ''}
            </span>
            <span className="profile__data">
              Phone: {userData.phone}
            </span>
            <span className="profile__data">
              Number: {userData.adress ? userData.adress.number : ''}
            </span>
            <span className="profile__data">
              Zip code:{' '}
              {userData.adress ? userData.adress.zipcode : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
