import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import StripeCheckout from 'react-stripe-checkout';

function Update() {
    const { flatNo } = useParams();
    const dispatch = useDispatch();
    const flats = useSelector((state) => state.flatsReducer.flats);
    const [rent, setRent] = useState(null);
    const [description, setDescription] = useState(null);
    const [flat, setFlat] = useState(null);

    useEffect(() => {
        const flatToUpdate = flats.find((flat) => flat.flatNo === flatNo);
        setFlat(flatToUpdate);
        setRent(flatToUpdate?.rent || null);
        setDescription(flatToUpdate?.description || null);
    }, [flats, flatNo]);

    const onFinish = (values) => {
        setRent(values.rent);
        setDescription(values.description);
    };

    const onToken = (token) => {
        console.log(token);
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
                <h1>Invoice {flatNo}</h1>
                {flat ? (
                    <Form name="update-flat-form" onFinish={onFinish} initialValues={flat}>
                        <Form.Item
                            label={<b>Flat No.</b>}
                            name="flatNo"
                            rules={[{ required: true, message: 'Please enter the flat number!' }]}
                        >
                            <Input disabled style={{ fontWeight: 'bold', color: 'black' }} />

                        </Form.Item>
                        <Form.Item
                            label={<b>Monthly Rent</b>}
                            name="rent"
                            rules={[{ required: true, message: 'Please enter the monthly rent!' }]}
                        >
                            <Input disabled style={{ fontWeight: 'bold', color: 'black' }} />

                        </Form.Item>

                        <StripeCheckout
                            token={onToken}
                            stripeKey="pk_test_51MtzvlLClDlhWWVVz2cz2AnGaVqSbhE0ccN1MGmSLWRELbu2kDyVr4MjKi1ukmbQd5vXtlrm81iygSWOhUZnuENm00fvFCoEOb"
                            amount={rent * 100}
                            name={`Payment for Flat ${flatNo}`}
                            description={`Monthly Rent: ${rent}`}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="btn btn-primary btn-block mb-4"
                                style={{ backgroundColor: '#22526A' }}
                            >
                                Pay Now (${rent})
                            </Button>
                        </StripeCheckout>

                    </Form>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Update;
