import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../viewcomponents/DefaultLayout';
import { deleteFlat, getAllFlats } from '../redux/actions/flatsActions';
import { Row, Col, Button } from 'antd';
import Spinner from '../viewcomponents/Spinner';
import { Link } from 'react-router-dom';
import '../viewcomponents/style.css'

function Rent() {
  const { flats } = useSelector(state => state.flatsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFlats());
  }, [dispatch]);

  return (
    <DefaultLayout style={{ backgroundColor: '#159895' }}>
      {loading === true && <Spinner />}
      <h5>Click on your Flat No. to view the invoice</h5>
      <div className='home-container'>
      <Row justify="center" gutter={16} className="mt-5">
        {flats.map(flat => {
          return (
            <div key={flat._id} className="circle">
              <Link to={`/rentview/${flat.flatNo}`}>
                <Button type="primary" style={{ cursor: 'pointer' }}>
                  {flat.flatNo}
                </Button>
              </Link>
            </div>
          );
        })}
      </Row>
      </div>
    </DefaultLayout>
  );
}

export default Rent;
