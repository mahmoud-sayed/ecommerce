import React from 'react';
import { Link } from 'react-router-dom';


import { Row, Col } from 'react-bootstrap';
import categories from './../../categories';
import './home.scss';
import { LinkContainer } from 'react-router-bootstrap';



const Home = () => {
  return (
    <header>
      <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" alt="home panner image" />
      <section className='featured-products-container container mt-4'>
        <h2>Last Products</h2>
        <div className='see-more'>
          <Link to='/category/all'> See More {'>>'}</Link>
        </div>
      </section>
      <section className="sale_banner--container mt-4">
        <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt="sale banner" />
      </section>
      <section className="recent-products-container container mt-4">
        <h2>categories</h2>
        <Row>
          {categories.map((item) => (
            <Link key={item.name} to={`/category/${item.name.toLocaleLowerCase()}`} >
              <Col md={4}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`, gap: "10px" }} className="category-tile">
                  {item.name}
                </div>
              </Col>
            </Link>
          ))}
        </Row>
      </section>
    </header >
  );
};

export default Home;