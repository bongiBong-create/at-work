export const Icon = ({ name }) => {
  if (name === "logo") {
    return (
      <svg width="24" height="24">
        <rect width="24" height="24" rx="12" fill="#EF1C31" />
        <path
          d="M14.375 9.06923C14.375 9.9731 13.6521 10.7058 12.7603 10.7058C11.8685 10.7058 11.1455 9.9731 11.1455 9.06923C11.1455 8.16536 11.8685 7.43262 12.7603 7.43262C13.6521 7.43262 14.375 8.16536 14.375 9.06923Z"
          fill="white"
        />
        <path
          d="M8.10129 10.9946C7.55608 10.9075 7.29277 11.6382 7.76824 11.9189L9.95989 13.2126L4.87996 19.9598C4.65789 20.2547 5.06125 20.6124 5.32748 20.3566L12.629 13.341C13.2243 12.769 12.9092 11.7627 12.0939 11.6325L8.10129 10.9946Z"
          fill="white"
        />
        <path
          d="M12.2835 14.804L10.5771 16.4455L11.729 17.9868L9.83715 19.0904C9.53105 19.269 9.73314 19.7374 10.0731 19.6373L13.3695 18.6665C14.0243 18.4736 14.2977 17.6958 13.9076 17.1357L12.2835 14.804Z"
          fill="white"
        />
        <path
          d="M15.0484 4.27958C14.962 4.52582 15.0802 4.79571 15.3129 4.91399C16.124 5.32635 16.8788 5.87492 17.5421 6.56368C17.9206 6.96011 18.249 7.37848 18.5354 7.81049C18.6876 8.04 18.9919 8.1199 19.2295 7.98063L21.4949 6.65256C21.7388 6.50957 21.8165 6.19228 21.6548 5.96038C21.4659 5.68949 21.2609 5.4205 21.0399 5.15699C19.7888 3.6595 18.3928 2.38117 16.5047 1.62633C16.2502 1.52457 15.9672 1.66311 15.8764 1.92176L15.0484 4.27958Z"
          fill="white"
        />
        <path
          d="M3.00662 7.26647C3.20963 7.41969 3.49458 7.39544 3.67787 7.21911C4.70443 6.23158 6.17783 5.1942 7.27379 4.70929C7.31531 4.69129 7.35733 4.67329 7.39975 4.6554C7.67364 4.53988 7.80694 4.21938 7.67928 3.95093L7.05939 2.64744C6.93739 2.39089 6.62573 2.28644 6.38121 2.43104C4.9444 3.28073 3.91312 4.35396 3.17528 5.31672C2.91952 5.65274 2.69043 5.98876 2.48315 6.32726C2.3524 6.54078 2.41086 6.8168 2.6107 6.96763L3.00662 7.26647Z"
          fill="white"
        />
        <path
          d="M15.0755 1.74325C15.1735 1.46515 15.0109 1.16214 14.7213 1.10678C14.1507 0.997699 13.5389 0.930705 12.8805 0.911344C10.9769 0.843092 9.38524 1.13911 8.05706 1.63289C7.791 1.7318 7.67564 2.03905 7.79741 2.29545L8.53731 3.85329C8.63955 4.06854 8.87919 4.18035 9.1126 4.13232C10.5827 3.82977 12.1656 3.86182 13.6605 4.27694C13.924 4.35011 14.2049 4.21443 14.2958 3.95649L15.0755 1.74325Z"
          fill="white"
        />
        <path
          d="M2.80781 8.19261C2.82053 8.17749 2.81362 8.15381 2.79787 8.14188L2.37301 7.81986C2.11933 7.62759 1.7521 7.719 1.63266 8.01405C0.246693 11.4378 0.842422 14.5944 0.941156 15.0551C0.948692 15.0903 0.979384 15.1128 1.01535 15.1128C1.06455 15.1128 1.10204 15.068 1.09439 15.0194C1.00296 14.4386 0.626791 11.245 2.80433 8.19702C2.80556 8.19529 2.80645 8.19424 2.80781 8.19261Z"
          fill="white"
        />
        <path
          d="M19.5854 8.7349C19.3608 8.86664 19.2762 9.14872 19.3791 9.38793C20.2883 11.5015 20.4092 13.612 20.4101 14.5739C20.4103 14.8649 20.6437 15.1128 20.9347 15.1128H23.2209C23.4563 15.1128 23.6581 14.9482 23.6906 14.7151C23.8375 13.6593 24.07 10.655 22.5955 7.57207C22.473 7.316 22.1565 7.22693 21.9117 7.37054L19.5854 8.7349Z"
          fill="white"
        />
      </svg>
    );
  } else if (name === "favorite") {
    return (
      <svg width="14" height="12" fill="none">
        <path
          d="M6.54316 1.85453L6.99998 2.39097L7.45679 1.85453C8.04423 1.16469 8.94805 0.72793 9.87998 0.72793C11.5198 0.72793 12.8 2.0081 12.8 3.64793C12.8 4.66044 12.35 5.62601 11.4355 6.74406C10.5142 7.87052 9.185 9.07731 7.52493 10.5827L7.52407 10.5834L6.99844 11.0619L6.47549 10.5895C6.47527 10.5893 6.47504 10.5891 6.47482 10.5889C4.81493 9.08047 3.48592 7.87227 2.56453 6.74501C1.64992 5.62605 1.19998 4.66045 1.19998 3.64793C1.19998 2.0081 2.48015 0.72793 4.11998 0.72793C5.0519 0.72793 5.95572 1.16469 6.54316 1.85453Z"
          stroke="#595959"
          strokeWidth="1.2"
        />
      </svg>
    );
  } else if (name === "noti") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M5.73936 1.04978C5.84095 0.798689 6.01521 0.583658 6.23981 0.432249C6.4644 0.28084 6.72909 0.199951 6.99995 0.199951C7.27081 0.199951 7.53551 0.28084 7.7601 0.432249C7.98469 0.583658 8.15895 0.798689 8.26054 1.04978C9.26599 1.32629 10.1529 1.92523 10.785 2.75459C11.417 3.58395 11.7594 4.59788 11.7595 5.64066V8.83428L13.0051 10.7027C13.0734 10.8051 13.1126 10.9241 13.1186 11.0471C13.1246 11.17 13.0971 11.2923 13.039 11.4009C12.9809 11.5094 12.8945 11.6001 12.7889 11.6634C12.6833 11.7266 12.5625 11.76 12.4394 11.76H9.35591C9.27404 12.3265 8.99082 12.8445 8.55815 13.2191C8.12546 13.5937 7.57229 13.8 6.99995 13.8C6.42762 13.8 5.87444 13.5937 5.44176 13.2191C5.00908 12.8445 4.72587 12.3265 4.644 11.76H1.56052C1.43743 11.76 1.31664 11.7266 1.21103 11.6634C1.10543 11.6001 1.01898 11.5094 0.960912 11.4009C0.90284 11.2923 0.875322 11.17 0.881294 11.0471C0.887266 10.9241 0.926505 10.8051 0.994823 10.7027L2.24045 8.83428V5.64066C2.24045 3.44857 3.7227 1.60188 5.73936 1.04978ZM5.75693 11.76C5.88679 12.1826 6.0742 12.4409 6.27637 12.584C6.44862 12.7059 6.78928 12.7713 7.00029 12.7713C7.2113 12.7713 7.5765 12.7313 7.8347 12.5486C8.16238 12.3167 8.24851 11.959 8.31873 11.76H5.75693ZM6.99995 1.85273C6.09831 1.85273 4.9363 2.28174 4.29874 2.91929C3.66118 3.55685 3.30301 4.73901 3.30301 5.64066V9.0403C3.30304 9.17461 3.26329 9.30591 3.18878 9.41766L2.24045 10.7027H11.7595L10.8042 9.41766C10.73 9.30584 10.6905 9.17454 10.6907 9.0403V5.64066C10.6907 4.73901 10.3325 3.55685 9.69496 2.91929C9.0574 2.28174 7.90159 1.85273 6.99995 1.85273Z"
          fill="#595959"
        />
      </svg>
    );
  } else if (name === "actions") {
    return (
      <svg width="4" height="16" viewBox="0 0 4 16" fill="none">
        <path
          d="M0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12C0.9 12 0 12.9 0 14ZM0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8Z"
          fill="#161616"
        />
      </svg>
    );
  }
};
