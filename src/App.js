import "./App.css";
import { Row, Col, Input, Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector((state) => state.data);
  console.log("user", user);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // dispatch({
    //   type: "CLR_DATA",
    //   payload: [],
    // });
    setUserData();
    setData(user);
    let item = data.length > 0 ? data[0] : "";
    setSelected(item);
  }, [user, data]);

  const createNewTask = () => {
    setSelected("");
  };
  const SaveTask = () => {
    // console.log("data.length", user.length);
    let date = new Date();
    let day = date.getDate();
    let mon = date.getMonth() + 1;
    let yr = date.getFullYear();
    let hr = date.getHours();
    let min = date.getMinutes();
    let am = hr < 12 ? "AM" : "PM";
    day = day < 10 ? "0" + day : day;
    mon = mon < 10 ? "0" + mon : mon;
    if (hr > 12) {
      hr = hr - 12;
    }
    hr = hr < 10 ? "0" + hr : hr;
    let time = `${day}-${mon}-${yr} ${hr}:${min}:${am}`;
    console.log("time", time);
    // return;
    let payload = {
      id: data.length == 0 ? 1 : data.length + 1,
      title: title,
      description: description,
      time: time,
    };
    let data1 = [...user, payload];
    dispatch({
      type: "ADD_DATA",
      payload: data1,
    });
    setTitle("");
    setDescription("");
  };

  const setUserData = () => {
    setData(user);
  };

  const UpdateTask = (item, index) => {
    let date = new Date();
    let day = date.getDate();
    let mon = date.getMonth() + 1;
    let yr = date.getFullYear();
    let hr = date.getHours();
    let min = date.getMinutes();
    let am = hr < 12 ? "AM" : "PM";
    day = day < 10 ? "0" + day : day;
    mon = mon < 10 ? "0" + mon : mon;
    if (hr > 12) {
      hr = hr - 12;
    }
    hr = hr < 10 ? "0" + hr : hr;
    let time = `${day}-${mon}-${yr} ${hr}:${min}:${am}`;
    console.log("time", time);
    // return;
    // let payload = {
    //   id: data.length == 0 ? 1 : data.length + 1,
    //   title: title,
    //   description: description,
    //   time: time,
    // };
    // let data1 = [...user, payload];
    // dispatch({
    //   type: "ADD_DATA",
    //   payload: data1,
    // });
  };

  const edit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
  };

  const deleteTask = (index) => {
    console.log("action.payload sdsdsd", index);
    data.splice(index, 1);
    // let payload = data;

    console.log("filtered", data);
    dispatch({
      type: "DEL_DATA",
      payload: data,
    });
    setTitle("");
    setDescription("");
    setUserData();
  };

  return (
    <div className="App">
      <Row>
        {/* sidebar */}
        <Col className="bg-light border" xs="3">
          <div className="sideBar">
            <div
              style={{
                height: "5vh",
                margin: 5,
                background: "red",
              }}
            >
              create new Task
            </div>
            <div style={{ height: "93vh", overflowY: "scroll" }}>
              {data.length > 0
                ? data.map((item, index) => {
                    return (
                      <div style={{ padding: 10 }}>
                        <div
                          style={{
                            height: "180px",
                            background: "#ffffff",
                            // marginTop: 5,
                            padding: 3,
                            boxShadow: " 3px 3px #cccccc, -2em 0 .6em #cccccc",
                          }}
                          onClick={() => edit(item)}
                        >
                          <div className="row">
                            <div
                              className="col-10 line-clamp"
                              style={{ textAlign: "left", maxLines: 1 }}
                            >
                              {item.title}
                            </div>
                            <div className="col-2">
                              <div
                                style={{
                                  flex: 1,
                                }}
                              >
                                <Button
                                  onClick={() => deleteTask(index)}
                                  style={{
                                    // flex: 1,
                                    alignItems: "flex-end",
                                    justifyContent: "flex-end",
                                    float: "right",
                                  }}
                                >
                                  X
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                flex: 1,
                              }}
                            >
                              <div
                                style={{
                                  flex: 1,
                                  alignItems: "flex-end",
                                  justifyContent: "flex-end",
                                  float: "right",
                                }}
                              >
                                {item.time}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div
                              style={{ textAlign: "left", maxLines: 2 }}
                              className="line-clamp"
                            >
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </Col>
        {/* body */}
        <Col className="bg-light border side" xs="9">
          <h3>Task Description</h3>
          <div
            style={{
              padding: 30,
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: 500 }}
              id="exampleText"
              name="text"
              placeholder="Enter Title"
              type="text"
            />
          </div>
          <div>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ height: 100 }}
              id="exampleText"
              placeholder="Enter Description"
              name="text"
              type="textarea"
            />
          </div>

          <div
            style={{
              height: "20vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <Button onClick={() => SaveTask()} color="primary">
                Save
              </Button>
            </div>
            <div>
              <Button onClick={() => alert("cancel")} color="danger">
                cancel
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
