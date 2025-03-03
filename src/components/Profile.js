import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { IoLogoGithub, IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import { Card } from "./component";

const Profile = (
    {
        name = '',
        profileImg = undefined, 
        githubAccountId = '', 
        email = undefined, 
        phone = undefined, 
        description = "", 
        github = ""
    }) => {
        return (
            <Card className="profile">
                <Fragment>
                    <div className="banner">
                        <div className="image-container">
                            {
                                profileImg ? <img src={profileImg} alt="프로필 사진"/>
                                : <IoLogoGithub/>
                            }
                            
                        </div>
                        <span className="nickname">{name}</span>
                        <div>
                            
                        </div>
                        <div className="contact">
                            <ul>
                                {github && <li><a href={`https://github.com/${githubAccountId}`}><IoLogoGithub />{github} </a></li>}
                                {email && <li><IoIosMail />{email} </li>}
                                {phone && <li><IoIosPhonePortrait /> {phone} </li>}
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        {Object.prototype.toString.call(description) === '[object String]' && description}
                    </div>
                </Fragment>
            </Card>
        );
}

Profile.propTypes = {
    name: PropTypes.string,
    profileImg: PropTypes.string,
    githubAccountId: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    description: PropTypes.string,
}

export default Profile;