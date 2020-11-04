import React from "react";
import { Avatars } from "./ClientTherapistAvatar";
import { Avatar } from "@material-ui/core";

interface Iprops {
  client: string;
  therapist: string;
  size: string;
}
const ClientTherapistAvatar = ({ client, therapist, size }: Iprops) => {
  return (
    <Avatars>
      <Avatar
        src={therapist}
        className="img-rounded"
        style={{ width: size + "px", height: size + "px" }}
      />
      <p className="icon">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M11.4678 11.0835C12.7169 9.91561 14.6815 9.98155 15.8494 11.2306L18.5814 14.1523L19.9692 12.8546L17.2372 9.93292C15.3522 7.91693 12.1861 7.81065 10.1701 9.69569C8.15415 11.5807 8.04788 14.7468 9.93292 16.7628L12.6649 19.6845L14.0527 18.3868L11.3207 15.4651C10.1528 14.2161 10.2188 12.2514 11.4678 11.0835ZM13.5376 14.7613L19.0015 20.6047L20.4624 19.2387L14.9985 13.3953L13.5376 14.7613ZM24.0671 17.2372L21.3351 14.3155L19.9473 15.6132L22.6793 18.5349C23.8472 19.7839 23.7812 21.7486 22.5322 22.9165C21.2832 24.0844 19.3185 24.0185 18.1506 22.7694L15.4187 19.8477L14.0308 21.1454L16.7628 24.0671C18.6478 26.0831 21.8139 26.1894 23.8299 24.3043C25.8459 22.4193 25.9521 19.2532 24.0671 17.2372Z"
              fill="#B8B8B8"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(17.5693 0.0390625) rotate(46.9225)"
              />
            </clipPath>
          </defs>
        </svg>
      </p>
      <Avatar
        src={client}
        className="img-rounded"
        style={{ width: size + "px", height: size + "px" }}
      />
    </Avatars>
  );
};

export default ClientTherapistAvatar;
