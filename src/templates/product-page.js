import React from 'react';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

import Layout from '../layouts';
export const ProductPage = ({ image, title, heading, description, intro, main, testimonials, full_image, pricing }) => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="full-width-image-container margin-top-0" style={{ backgroundImage: `url(${image})` }}>
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                      backgroundColor: '#f40',
                      color: 'white',
                      padding: '1rem'
                    }}
                  >
                    {title}
                  </h2>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <img style={{ borderRadius: '5px' }} src={main.image1.image} alt={main.image1.alt} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img style={{ borderRadius: '5px' }} src={main.image2.image} alt={main.image2.alt} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img style={{ borderRadius: '5px' }} src={main.image3.image} alt={main.image3.alt} />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div className="full-width-image-container" style={{ backgroundImage: `url(${full_image})` }} />
                <h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductPage;
