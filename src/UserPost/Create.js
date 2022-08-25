import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import LoadingCard from "./LoadingCard";
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import {createPost} from "../redux/features/postSlice"


const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading, post} = useSelector((state) => ({...state.app}))

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({values}))
    setValues({ title: "", body: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter title"
            type="text"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            type="text"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
            <Button onClick={() => navigate("/")}>Go Back</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
       {post.length > 0 && (
        <div className="site-card-border-less-wrapper">
        <Card type="inner" title={post[0].title} >
        <p>User Id: {post[0].id}</p>
         <span>{post[0].body}</span>
        </Card>
      </div>
       )} 
      </>
      )}
    </>
  );
};

export default CreatePost;