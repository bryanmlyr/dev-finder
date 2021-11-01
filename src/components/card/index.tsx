import style from "./style.module.css";
import { GoLocation } from "react-icons/go";
import { FiTwitter, FiLink } from "react-icons/fi";
import { BiBuildings } from "react-icons/bi";

type CardProps = {
    userData?: any | null,
};

const Card = ({ userData }: CardProps) => {
    if (!userData) {
        return null;
    }
    return (
        <div className={style.cardContainer}>
            <div>
                <img src={userData?.avatar_url} />
            </div>
            <div>
                <div className={style.personalInformation}>
                    <div>
                        <h1>{userData?.name}</h1>
                        <span>Joined on {new Date(userData?.created_at).toLocaleDateString()}</span>
                    </div>
                    <h2>@{userData?.login}</h2>
                    <h3>{userData?.bio}</h3>
                </div>
                <div className={style.statContainer}>
                    <div>
                        <h4>Repos</h4>
                        <h4>{userData?.public_repos || 0}</h4>
                    </div>
                    <div>
                        <h4>Followers</h4>
                        <h4>{userData?.followers || 0}</h4>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <h4>{userData?.following || 0}</h4>
                    </div>
                </div>
                <div className={style.infoContainer}>
                    <div>
                        <GoLocation />
                        <h5>{userData?.location || 'No location'}</h5>
                    </div>
                    <div>
                        <FiTwitter />
                        <h5>{userData?.twitter_username || 'No twitter'}</h5>
                    </div>
                    <div>
                        <FiLink />
                        <h5>{userData?.blog || 'No blog'}</h5>
                    </div>
                    <div>
                        <BiBuildings />
                        <h5>{userData?.company || 'No company'}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
