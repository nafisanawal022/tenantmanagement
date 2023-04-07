import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../viewcomponents/DefaultLayout';
import { getAllFlats } from '../redux/actions/flatsActions';
import { Layout, Row, Col, Button } from 'antd';
import Spinner from '../viewcomponents/Spinner';
import '../viewcomponents/style.css';
import { Link } from "react-router-dom";


function Home() {
  const { flats } = useSelector((state) => state.flatsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFlats());
  }, []);

  return (
    <DefaultLayout>
      {loading === true && <Spinner />}
      
      <div className='home-container'>
      <Link to="/login">
  <button>Sign In</button>
</Link>
<br></br>
<br></br>
<br></br>
        <h1>To-Let</h1>
        <Row justify='center' gutter={16} className='mt-5'>
          {flats.map((flat) => {
            return (
              
              <div

                key={flat.id}
                style={{
                  backgroundColor: '#CBE4DE',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <p style={{ fontWeight: 'bold', padding:'0 50px', backgroundColor:"#159895" }}>Flat Details</p>
                <divided></divided>
                <p style={{ fontWeight: 'bold' }}>Flat No.</p>
                <p style={{ fontSize: '20px' }}>{flat.flatNo}</p>
                <p style={{ fontWeight: 'bold' }}>Monthly Rent</p>
                <p style={{ fontSize: '20px' }}>{flat.rent}</p>
                <p style={{ fontWeight: 'bold' }}>Description</p>
                <p style={{ fontSize: '20px' }}>{flat.description}</p>
                <div>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='btn btn-primary btn-block mb-4'
                    href='/contact'
                    style={{ backgroundColor: '#22526A' }}
                  >
                    For more details, click here
                  </Button>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default Home;
