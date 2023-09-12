import React from "react";
import styles from "./BrowseCategory.module.css";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera, FiHeadphones } from "react-icons/fi";
import { TbDeviceGamepad } from "react-icons/tb";

const mapedIcon = {
  CiMobile4: CiMobile4,
  HiOutlineDesktopComputer: HiOutlineDesktopComputer,
  BsSmartwatch: BsSmartwatch,
  FiCamera: FiCamera,
  FiHeadphones: FiHeadphones,
  TbDeviceGamepad: TbDeviceGamepad,
};

const BrowseCategory = ({ category }) => {
  const { img, textp } = category;
  const IconComp = mapedIcon[img];
  return (
    <div className={styles.category_container}>
      <div className={styles.box}>
        <div className={styles.imgs}>
          <IconComp />
        </div>
        <div className={styles.text}>
          <p>{textp}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
