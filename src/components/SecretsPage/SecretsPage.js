import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import axios from 'axios';

function SecretsPage() {

  const dispatch = useDispatch();
  const store = useReduxStore();

  useEffect(() => {
    dispatch({ type: 'FETCH_SECRETS' });
  }, [dispatch]);

  /*const getUser = () => {
    axios.get('/api/user')
    .then(res => {
      setUser(res.data);
    })
    .catch(error => {
      setUser(null);
    })
  }
  const onLogin = (event) =>
    event.preventDefault();
    console.log('onLogin', {username, password});

    axios.post('/api/user/login', {
      username,
      password
    })
      .then(res => {
        console.log('user logged in!');
      })
      .catch(error => {
        console.error('user login failed', error);
      })

      setUserName('');
      setPassword('');
    }

    const onRegister = (evt) => {
      evt.preventDefault();
      console.log('onRegister', {username, password});
  
      axios.post('/api/user/register', {
        username,
        password
      })
        .then(res => {
          console.log('registered!')
        })
        .catch(err => {
          console.error('registration failed', err);
        });
  
      // Clear the form fields
      setUsername('');
      setPassword('');
      setUser(null);
    }*/
  

  return (
    <div className="container">
      <h2 className="titleBase">Secure Secrets</h2>

      <div className="grid">
        <div className="grid-col grid-col_3">
          <div className="panel">
            <div className="profImg">
              <span>profile image for {store.user.username}</span>
            </div>
            <p>
              Currently logged in as <b>{store.user.username}</b>
            </p>
            <p>
              Clearance level: <b>{store.user.clearance_level}</b>
            </p>
          </div>
        </div>
        <div className="grid-col grid-col_9">
          <div className="panel">
            <h3 className="titleBase_inner">List of Secrets</h3>
            <table className="simpleTable">
              <thead>
                <tr>
                  <th>Clearance</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {store.secrets.map((secret, index) => (
                  <tr key={index}>
                    <td>{secret.secrecy_level}</td>
                    <td>{secret.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretsPage;
