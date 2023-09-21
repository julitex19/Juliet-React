
import React, { useContext } from "react";
import styles from "./Home.module.css";
import PictureSlide from "../PictureSlide/PictureSlide";
import { BsApple, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomeUl from "../HomeUl/HomeUl";
import Moment from "../Moment/Moment";
import AboutDelivery from "../AboutDelivery/AboutDelivery";
import { AbtDeliv } from "../AboutDelivery/Data4";
import Categories from "../Categories/Categories";
import NewArrival from "../NewArrival/NewArrival";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import { CategoryBox } from "../BrowseCategory/Datas";
import { GlobalContext } from "../../context";
import Box from "../Box/box";

const Home = () => {
  const {products} = useContext(GlobalContext);
  return (
    <>
      <div className={styles.container}>
        <HomeUl />

        <div className={styles.black_container}>
          <div className={styles.inner_flexed}>
            <div className={styles.Apple_flexed}>
              <BsApple className={styles.apple} />
              <p>iPhone 14 Series</p>
            </div>
            <div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
            </div>
            <Link to="/Shop">
              <div className={styles.link}>
                <span>Shop Now</span>
                <BsArrowRight className={styles.arrow} />
              </div>
            </Link>
          </div>
          <PictureSlide />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.intro2}>
          <div className={styles.intro2_flex}>
            <button className={styles.btn}></button>
            <h4>Today's</h4>
          </div>
        </div>

        <div className={styles.flash}>
          <div className={styles.inner_flash}>
            <h2>Flash Sales</h2>
            <Moment />
          </div>
          <div className={styles.arrow_flexed}>
            <div className={styles.contain}>
              <BsArrowLeft className={styles.arrow} />
            </div>
            <div className={styles.contain}>
              <BsArrowRight className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.category_container}>
        {CategoryBox &&
          CategoryBox.map((items) => {
            return <BrowseCategory key={items.id} category={items} />;
          })}
      </div>

      <div className={styles.line}></div>
      <Categories />

        <div>
          <div className={styles.central}>
          <div className={styles.intro2}>
          <div className={styles.intro2_flex}>
            <button className={styles.btn}></button>
            <h4>Our products</h4>
          </div>
        </div>
       <div className={styles.our_products}>
       <div className={styles.explore}><h1>Explore our product</h1></div>
        <div className={styles.arrow_flexed}>
            <div className={styles.contain}>
              <BsArrowLeft className={styles.arrow} />
            </div>
            <div className={styles.contain}>
              <BsArrowRight className={styles.arrow} />
            </div>
          </div>
       </div>
          </div>
      <div className={styles.wishlist}>
          {products && products.map((items) => {
              return <Box key={items.id} product={items} />;
            })}
        </div>
        </div>

      <NewArrival />
      <div className={styles.AboutBox_outerD}>
        {AbtDeliv &&
          AbtDeliv.map((items) => {
            return <AboutDelivery key={items.id} icons={items} />;
          })}
      </div>
    </>
  );
};

export default Home;
