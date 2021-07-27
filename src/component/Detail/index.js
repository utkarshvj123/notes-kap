import { Card, Button } from "react-bootstrap";

const Detail = ({ data, buttonName, detailClick }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.imgUrl} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description} </Card.Text>
          <Button variant="primary" onClick={() => detailClick()}>
            {buttonName}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
