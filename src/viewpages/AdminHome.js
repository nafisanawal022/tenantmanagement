import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../viewcomponents/DefaultLayout';
import flatImage from '../viewimg/flat.png';
import userImage from '../viewimg/users.png';
import { deleteFlat, getAllFlats } from '../redux/actions/flatsActions';
import { getAllUsers } from '../redux/actions/userActions';
import { Row, Col, Popconfirm, Space, Table } from 'antd';
import Spinner from '../viewcomponents/Spinner';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';
import '../viewcomponents/style.css'
const { Column } = Table;


function AdminHome() {
  const { users } = useSelector((state) => state.usersReducer);
  const { flats } = useSelector(state => state.flatsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFlats());
    dispatch(getAllUsers());
  }, [dispatch]);

  const [showFlats, setShowFlats] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const handleFlatImageClick = () => {
    setShowFlats(true);
    setShowUsers(false);
  }

  const handleUserImageClick = () => {
    setShowFlats(false);
    setShowUsers(true);
  }

  return (
    <DefaultLayout>
      <div className="admin-home-container">
        {loading === true && (<Spinner />)}
        <h1>Home</h1>
 
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="navlink">
            <ul>
              <li><a href='/addFlat'>Add Flat</a></li>
              <li><a href='/adminregister'>New Admin</a></li>
              <li><a href='/register'>New Tenant</a></li>
            </ul>
          </div>
        </div>
<br></br>
<br></br>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={flatImage} alt="Flats" onClick={handleFlatImageClick} style={{ cursor: 'pointer', marginRight: '20px' }} />
          <img src={userImage} alt="Users" onClick={handleUserImageClick} style={{ cursor: 'pointer' }} />
        </div>

        {showFlats && (
          <Row justify='center' gutter={16} className='mt-5'>
            {flats.map(flat => {
              return (
                <div key={flat.id}
                  style={{
                    backgroundColor: '#CBE4DE',
                    padding: '20px',
                    borderRadius: '10px',
                  }}>
                  <p style={{ fontWeight: 'bold', padding: '0 50px', backgroundColor: "#159895" }}>Flat Details</p>
                  <divided></divided>
                  <p style={{ fontWeight: 'bold' }}>Flat No.</p>
                  <p style={{ fontSize: '20px' }}>{flat.flatNo}</p>
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
        )}
        {showUsers && (
          <Table dataSource={users} className='mt-5'>
            <Column title="Flat No." dataIndex="flatNo" key="flatNo" />
            <Column title="National ID No." dataIndex="nidNo" key="nidNo" />
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Email Address" dataIndex="email" key="email" />
            <Column title="Contact No." dataIndex="contactNumber" key="contactNumber" />
            <Column title="Alternate Contact No." dataIndex="altContactNumber" key="altContactNumber" />
            <Column title="Rent" dataIndex="rent" key="rent" />
          </Table>
        )}
      </div>
    </DefaultLayout>

  )
}

export default AdminHome
