import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./Modal";
import "./index.css";

const UserCard = ({
  id,
  name,
  users,
  email,
  phone,
  website,
  username,
  setUsers,
}) => {
  const url = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
  const handleDelete = () => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const filterUser = users.filter((user) => user.id === id);
    setUser(filterUser);
  }, [users, id]);
  const handleEdit = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="user">
      {open && (
        <Modal
          user={user}
          open={open}
          users={users}
          setUsers={setUsers}
          close={close}
          setOpen={setOpen}
          title="Basic Modal"
        />
      )}
      <img
        src={url}
        alt={username}
        style={{ background: "lightgray", width: "100%" }}
      />
      <div className="user-name ml20">
        <b>{name}</b>
      </div>
      <div className="user-align ml20 mb10">
        <MailOutlineIcon className="icon icon-spacing" /> {email}
      </div>
      <div className="user-align ml20 mb10">
        <PhoneEnabledIcon className="icon icon-spacing" /> {phone}
      </div>
      <div className="user-align ml20 mb10">
        <LanguageIcon className="icon icon-spacing" />
        {website}
      </div>
      <div className="user-footer">
        <div>
          {liked ? (
            <FavoriteIcon className={`red icon`} onClick={toggleLiked} />
          ) : (
            <FavoriteBorderIcon className={`red icon`} onClick={toggleLiked} />
          )}
        </div>
        <div>
          <EditIcon className="icon edit" onClick={handleEdit} />
        </div>
        <div>
          <DeleteIcon className="icon delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
