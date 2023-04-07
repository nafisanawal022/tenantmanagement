import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../viewcomponents/DefaultLayout';
import { deleteFlat, getAllFlats } from '../redux/actions/flatsActions';
import { Row, Col, Popconfirm, Divider } from 'antd';
import Spinner from '../viewcomponents/Spinner';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';
import '../viewcomponents/style.css'

function AdminHome() {
  const { flats } = useSelector(state => state.flatsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFlats());
  }, [dispatch]);

  return (
    <DefaultLayout>
      {loading === true && (<Spinner />)}
      <h1>Home</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <div className="navlink">
    <ul>
      <li><a href='/'>View</a></li>
      <li><a href='/addFlat'>Add Flat</a></li>
      <li><a href='/adminregister'>New Admin</a></li>
      <li><a href='/register'>New Tenant</a></li>
    </ul>
  </div>
</div>

      <Row justify='center' gutter={16} className='mt-5'>
        {flats.map(flat => {
          return (
            <div key={flat.id}
            style={{
              backgroundColor: '#CBE4DE',
              padding: '20px',
              borderRadius: '10px',
            }}>
                <p style={{ fontWeight: 'bold', padding:'0 50px', backgroundColor:"#159895" }}>Flat Details</p>
                <divided></divided>
              <p style={{ fontWeight: 'bold' }}>Flat No.</p>
                <p style={{ fontSize: '20px'}}>{flat.flatNo}</p>
                <p style={{ fontWeight: 'bold' }}>Monthly Rent</p>
                <p style={{ fontSize: '20px' }}>{flat.rent}</p>
                <p style={{ fontWeight: 'bold' }}>Description</p>
                <p style={{ fontSize: '20px' }}>{flat.description}</p>
              <div style={{ display: 'flex' }}>
                <Link to={`/update/${flat.flatNo}`}>
                  <EditOutlined style={{ color: 'red', cursor: 'pointer' }} />
                </Link>
                <Popconfirm
                  title="Are you sure to delete this?"
                  onConfirm={() => { dispatch(deleteFlat({ flatNo: flat.flatNo })) }}
                  okText="Yes"
                  cancelText='No'
                >
                  <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
                </Popconfirm>
              </div>
            </div>
          )
        })}
      </Row>
    </DefaultLayout>
  )
}

export default AdminHome
