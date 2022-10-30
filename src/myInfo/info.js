function Info(props) {
  return (
    <>
      <img src={process.env.PUBLIC_URL + props.data.photo} />
      <h1>Name: {props.data.getFullName()}</h1>
      <p>Age: {props.data.age}</p>
      <p>Phone: {props.data.phone}</p>
      <p>Email: {props.data.email}</p>
      <p>City: {props.data.city}</p>
    </>
  );
}
export default Info;
