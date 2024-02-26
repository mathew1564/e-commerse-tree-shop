import React, { useState, useEffect } from "react";

import "./Review.scss";
function Review() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonialItems = [
    {
      rate: "5.0",
      content:
        "Your plant selection is outstanding! You offer such a wide variety of healthy and beautiful plants.",
      imgSrc:
        "https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
      name: "Mathieu Johet",
    },
    {
      rate: "5.0",
      content:
        "Your knowledge about plants is impressive. You provide valuable information and guidance to your customers.",
      imgSrc:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
      name: "James",
    },
    {
      rate: "5.0",
      content:
        "Your shop is a treasure trove for plant lovers...",
      imgSrc:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80",
      name: "Robert",
    },
    {
      rate: "5.0",
      content: "Attentive, Love shop 😍",
      imgSrc:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80",
      name: "Richard",
    },
    {
      rate: "5.0",
      content:
        "Your shop is a treasure trove for plant lovers. You consistently stock rare and unique plants that are hard to find elsewhere.",
      imgSrc:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80",
      name: "Robert",
    },
    {
      rate: "5.0",
      content: "Attentive, enthusiastic staff. Beautiful view, the evening...",
      imgSrc:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80",
      name: "Richard",
    },
    {
      rate: "5.0",
      content:
        "Your shop is a treasure trove for plant lovers. You consistently stock rare and unique plants that are hard to find elsewhere.",
      imgSrc:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80",
      name: "Robert",
    },
    {
      rate: "5.0",
      content: "Very good product 🥰",
      imgSrc:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80",
      name: "Richard",
    },

    // Thêm nhiều mục khác nếu cần
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % testimonialItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="fui-testimonial-1">
      <div className="testimonialWrap">
        <ul className="testimonialBodyList" style={{ listStyle: "none" }}>
          {testimonialItems.map((item, index) => {
            const rating = parseFloat(item.rate); // Chuyển chuỗi thành số

            return (
              <li
                key={index}
                className={`testimonialBodyItem ${
                  index === activeTab ? "active" : ""
                }`}
                data-tab={index}
              >
                <div className="testimonialRate">
                  <span>{item.rate}</span>
                  <div className="testimonialRateIconList">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill={i < Math.floor(rating) ? "#EAC248" : "none"} // Sử dụng rating thay vì item.rate
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                          fill="#EAC248"
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="testimonialContent">{item.content}</p>
                <div className="testimonialBodyPersonal">
                  <div className="testimonialBodyPersonalImg">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                  <h4 className="testimonialBodyPersonalName">{item.name}</h4>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="testimoniaPersonalList" style={{ listStyle: "none" }}>
          {testimonialItems.map((item, index) => {
            return (
              <li className="testimoniaPersonalItem active" data-tab={index}>
                <div className="testimoniaPersonalImage">
                  <img src={item.imgSrc} alt={item.name} />
                </div>
              </li>
            );
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default Review;
