import { FC } from 'react'

interface ISettingsIconComponentProps {
  color?: string;
}

const SettingsIconComponent:FC<ISettingsIconComponentProps> = ({
  color = '#A4A8BB'
}) => {
  return (
    <svg
      style={ { transition: '0.3s ease' } }
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0C15.5427 0 16.8056 1.19766 16.9097 2.71388C17.5844 2.90035 18.1006 3.06739 18.4642 3.21809C18.8333 3.37106 19.3175 3.61858 19.9226 3.96236C21.0684 2.96351 22.8085 3.00955 23.8995 4.1005C24.9906 5.19157 25.0365 6.932 24.0373 8.07775C24.391 8.70179 24.6449 9.20094 24.8006 9.58124C24.9456 9.93513 25.1066 10.4363 25.2866 11.0903C26.8026 11.1947 28 12.4575 28 14C28 15.5424 26.8027 16.8052 25.2868 16.9097C25.1099 17.5538 24.9517 18.0477 24.8095 18.397C24.6525 18.7826 24.3956 19.289 24.0372 19.9221C25.0365 21.0678 24.9906 22.8084 23.8995 23.8995C22.8087 24.9903 21.0687 25.0365 19.923 24.038C19.3369 24.3717 18.8678 24.6127 18.51 24.7628C18.1367 24.9194 17.6053 25.0926 16.9098 25.2856C16.8059 26.8021 15.5428 28 14 28C12.4574 28 11.1946 26.8025 11.0903 25.2864C10.428 25.1038 9.92072 24.9404 9.56292 24.7931C9.18717 24.6385 8.69405 24.3872 8.0776 24.0375C6.93184 25.0365 5.19152 24.9905 4.10051 23.8995C3.00979 22.8088 2.96353 21.0691 3.9617 19.9234C3.63901 19.3581 3.40509 18.9054 3.25828 18.56C3.09512 18.1761 2.91515 17.6281 2.71494 16.9098C1.19821 16.8062 0 15.543 0 14C0 12.4573 1.1977 11.1944 2.71396 11.0903C2.90131 10.4128 3.06919 9.89443 3.2207 9.5295C3.37327 9.16201 3.61991 8.67988 3.96232 8.07734C2.96351 6.93158 3.00957 5.19144 4.10051 4.1005C5.19124 3.00977 6.93093 2.96352 8.07669 3.96176C8.64504 3.63744 9.10013 3.40247 9.44736 3.25517C9.82971 3.09298 10.3753 2.914 11.0902 2.71486C11.1939 1.19817 12.457 0 14 0ZM12.25 2.91667C12.25 3.32454 11.9769 3.68193 11.5834 3.78913C10.8226 3.99636 10.2598 4.17782 9.90298 4.32919C9.5746 4.46849 9.10193 4.7157 8.49211 5.06862C8.13777 5.27369 7.68983 5.21496 7.40034 4.92546C6.71692 4.24205 5.60888 4.24205 4.92546 4.92546C4.24205 5.60888 4.24205 6.71692 4.92546 7.40034C5.21471 7.68958 5.2738 8.13696 5.06956 8.4914C4.69963 9.13336 4.44177 9.63102 4.29819 9.97685C4.15615 10.319 3.98507 10.8566 3.78897 11.5822C3.68246 11.9763 3.32492 12.25 2.91667 12.25C1.95017 12.25 1.16667 13.0335 1.16667 14C1.16667 14.9665 1.95017 15.75 2.91667 15.75C3.32454 15.75 3.68194 16.023 3.78915 16.4165C3.99738 17.1805 4.17977 17.7455 4.33199 18.1036C4.4709 18.4304 4.71714 18.9009 5.06854 19.5078C5.27368 19.8622 5.21498 20.3101 4.92546 20.5997C4.24205 21.2831 4.24205 22.3911 4.92546 23.0745C5.60888 23.758 6.71692 23.758 7.40034 23.0745C7.68949 22.7854 8.13666 22.7262 8.49112 22.9301C9.14614 23.3069 9.65397 23.569 10.0069 23.7142C10.343 23.8525 10.8704 24.0195 11.5817 24.2111C11.976 24.3173 12.25 24.6749 12.25 25.0833C12.25 26.0498 13.0335 26.8333 14 26.8333C14.9665 26.8333 15.75 26.0498 15.75 25.0833C15.75 24.6753 16.0234 24.3178 16.4173 24.211C17.1598 24.0095 17.7095 23.8335 18.0587 23.687C18.3961 23.5454 18.8818 23.2927 19.5083 22.9309C19.8626 22.7263 20.3103 22.7852 20.5997 23.0745C21.2831 23.758 22.3911 23.758 23.0745 23.0745C23.758 22.3911 23.758 21.2831 23.0745 20.5997C22.7855 20.3106 22.7261 19.8637 22.9296 19.5092C23.3146 18.8385 23.5818 18.3185 23.729 17.957C23.8629 17.6282 24.0249 17.1131 24.2112 16.4189C24.3171 16.0243 24.6748 15.75 25.0833 15.75C26.0498 15.75 26.8333 14.9665 26.8333 14C26.8333 13.0335 26.0498 12.25 25.0833 12.25C24.6749 12.25 24.3173 11.9759 24.2111 11.5814C24.0219 10.8779 23.8573 10.3562 23.721 10.0234C23.5749 9.66653 23.3104 9.15312 22.9298 8.49098C22.7261 8.13649 22.7854 7.68944 23.0745 7.40034C23.758 6.71692 23.758 5.60888 23.0745 4.92546C22.3911 4.24205 21.2831 4.24205 20.5997 4.92546C20.3104 5.21468 19.8631 5.2738 19.5087 5.06964C18.8642 4.69841 18.3647 4.43974 18.0175 4.29585C17.6765 4.15452 17.1409 3.98422 16.4179 3.78894C16.0238 3.68248 15.75 3.32494 15.75 2.91667C15.75 1.95017 14.9665 1.16667 14 1.16667C13.0335 1.16667 12.25 1.95017 12.25 2.91667ZM14 21C10.134 21 7 17.866 7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14C21 17.866 17.866 21 14 21ZM14 19.8333C17.2217 19.8333 19.8333 17.2217 19.8333 14C19.8333 10.7783 17.2217 8.16667 14 8.16667C10.7783 8.16667 8.16667 10.7783 8.16667 14C8.16667 17.2217 10.7783 19.8333 14 19.8333Z"
        fill={ color }
      />
    </svg>
  )
}

export default SettingsIconComponent