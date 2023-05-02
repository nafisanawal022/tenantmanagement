import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFlat } from '../redux/actions/flatsActions';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

function Update() {
  const { flatNo } = useParams();
  const dispatch = useDispatch();
  const flats = useSelector((state) => state.flatsReducer.flats);
  const [rent, setRent] = useState(null); // added missing state variable
  const [description, setDescription] = useState(null); // added missing state variable
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    const flatToUpdate = flats.find((flat) => flat.flatNo === flatNo);
    setFlat(flatToUpdate);
    setRent(flatToUpdate?.rent || null); // initialize rent state with flat's rent if available
    setDescription(flatToUpdate?.description || null); // initialize description state with flat's description if available
  }, [flats, flatNo]);

  const handleUpdate = () => {
    const updatedFlat = {
      flatNo: flat.flatNo,
      rent: rent, // changed to use the rent state variable
      description: description, // changed to use the description state variable
    };
    dispatch(updateFlat(updatedFlat));
  };
  
  const onFinish = (values) => {
    setRent(values.rent);
    setDescription(values.description);
    handleUpdate();
  };
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #22526A 0%, #395B64 100%)',
      }}
    >
      <div
        style={{
          border: '2px solid #CBE4DE',
          width: '600px',
          padding: '20px',
          borderRadius: '20px',
          background: '#CBE4DE',
        }}
      >
        <h1>Update Flat {flatNo}</h1>
        {flat ? (
          <Form name="update-flat-form" onFinish={onFinish} initialValues={flat}>
            <Form.Item
              label="Flat No."
              name="flatNo"
              rules={[{ required: true, message: 'Please enter the flat number!' }]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Monthly Rent"
              name="rent"
              rules={[{ required: true, message: 'Please enter the monthly rent!' }]}
            >
              <Input value={rent} onChange={(e) => setRent(e.target.value)} /> {/* controlled input */}
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please enter the flat description!' }]}
            >
              <Input.TextArea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} /> {/* controlled input */}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Update;
