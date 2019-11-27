import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profile_bio_wrapper}>
      <div className={s.avatar}>
        <img
          src="https://sun9-19.userapi.com/c635107/v635107377/1d954/0lgMknWgaTs.jpg"
          alt="ava"
        />
      </div>
      <div className={s.bio}>
        <div className={s.item}>
          <span> Name: Ulikov Leonid</span>
        </div>
        <div className={s.item}>City: Saint-Petersburg</div>
        <div className={s.item}>Age: 32</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
