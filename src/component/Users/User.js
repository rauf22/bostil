import React from 'react';
import './User.scss'


const User = (props) => {
  return (
    <div className="userbox">
      <div className="user">
        <img src={props.attributes.photo} alt={props.attributes.name} />
        {/* <img src="" alt="" className="image"/> */}
        <p className="name">{props.attributes.name}</p>
        <p className="job">{props.attributes.position}</p>

        {props.attributes.email.length < 22 ? (
          <p className="email">{props.attributes.email}</p>
        ) : (
          <p className="email">{props.attributes.email.substring(0, 22) + '...'}</p>
        )}  
        <p className="phone">{props.attributes.phone}</p>
      </div>  
    </div>
    





    // <Card>
    //   <UserLogo>
    //     <img src={props.attributes.image_url} alt={props.attributes.name} />
    //   </UserLogo>
    //   <UserName>{props.attributes.name}</UserName>
    //   <UserName>{props.attributes.job}</UserName>
    //   {props.attributes.email.length < 22 ? (
    //     <UserName>{props.attributes.email}</UserName>
    //   ) : (
    //     <UserName>{props.attributes.email.substring(0, 22) + '...'}</UserName>
    //   )}
    //   <UserName>{props.attributes.phone}</UserName>
    //   <UserName>{props.attributes.created_at}</UserName>
    // </Card>
  );
};

export default User;
