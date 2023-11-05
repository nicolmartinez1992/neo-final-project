import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from 'Components/Error';
import Loading from 'Components/Loading';
import getUser from '../../api/user';
import './index.scss';

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
        <Loading />
      ) : (
        <div className="profile__container">
          <h1 className="profile__title">USER PROFILE</h1>
          <div className="profile__info">
            <div className="profile__data1">
              <span className="profile__data">
                First Name:{' '}
                {userData.name
                  ? userData.name.firstname.charAt(0).toUpperCase() +
                    userData.name.firstname.slice(1)
                  : ''}
              </span>
              <span className="profile__data">
                Email: {userData.email}
              </span>
              <span className="profile__data">
                Street:{' '}
                {userData.address
                  ? userData.address.street.charAt(0).toUpperCase() +
                    userData.address.street.slice(1)
                  : ''}
              </span>
              <span className="profile__data">
                City:{' '}
                {userData.address
                  ? userData.address.city.charAt(0).toUpperCase() +
                    userData.address.city.slice(1)
                  : ''}
              </span>
            </div>
            <div className="profile__data2">
              <span className="profile__data">
                Last Name:{' '}
                {userData.name
                  ? userData.name.lastname.charAt(0).toUpperCase() +
                    userData.name.lastname.slice(1)
                  : ''}
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
