import { FC } from 'react'

interface ISearchIconComponentProps {
  color?: string;
}

const SearchIconComponent:FC<ISearchIconComponentProps> = ({
  color = 'black'
}) => {
  return (
    <svg
      style={ { transition: '0.3s ease' } }
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5696 14.8263L21.8571 21.116C22.3511 21.6102 21.6099 22.3512 21.1159 21.857L14.8286 15.5675C13.2549 16.9676 11.1815 17.8181 8.90903 17.8181C3.98837 17.8181 0 13.83 0 8.90903C0 3.98837 3.98803 0 8.90903 0C13.8297 0 17.8181 3.98803 17.8181 8.90903C17.8181 11.1802 16.9685 13.2528 15.5696 14.8263ZM1.04812 8.90903C1.04812 13.2511 4.56721 16.7699 8.90903 16.7699C13.2512 16.7699 16.7699 13.2509 16.7699 8.90903C16.7699 4.56691 13.2509 1.04812 8.90903 1.04812C4.56691 1.04812 1.04812 4.56721 1.04812 8.90903Z"
        fill={ color }
      />
    </svg>

  )
}

export default SearchIconComponent