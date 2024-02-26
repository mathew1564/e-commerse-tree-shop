  import React from "react";
  import AliceCarousel from "react-alice-carousel";
  import { Card } from "react-bootstrap";
  import butterfly1 from '../../../../../assets/image/floweringshrubs/1.Butterfly_Bush.png';
  import butterfly2 from '../../../../../assets/image/floweringshrubs/2.Butterfly_Bush.png';
  import './style.scss'


  const handleDragStart = (e) => e.preventDefault();

  const SlideCardImg = ({ items }) => {
    if (!Array.isArray(items)) {
      return null;
    }
  
    const slideProduct = items.slice(0, 3).map((item, index) => (
      <Card className="img-card" key={index}>
        <Card.Img
          src={Object.values(item)[0]} // Lấy giá trị đầu tiên của mỗi object trong mảng items
          onDragStart={handleDragStart}
          className="img-current"
        />
      </Card>
    ));
  
    return <AliceCarousel items={slideProduct} />;
  };
  
  export default SlideCardImg;