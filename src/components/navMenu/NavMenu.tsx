import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.sass';

import logo from '@images/logo.svg';

const NavMenu = () => {
    return (
        <div className={styles.nav_menu}>
            <NavLink to='/'>
                <img src={logo} alt="Rate it" />
            </NavLink>

            <nav className={styles.nav}>
                <NavLink to='/project/overview' className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}>
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.3208C22 5.09434 17.05 0 11 0C4.95 0 0 5.09434 0 11.3208C0 12.5943 0.275 13.8679 0.55 15H21.3125C21.725 13.8679 22 12.5943 22 11.3208ZM10.175 2.40566C10.175 1.98113 10.5875 1.5566 11 1.5566C11.4125 1.5566 11.825 1.98113 11.825 2.40566V3.96226C11.825 4.38679 11.4125 4.81132 11 4.81132C10.5875 4.81132 10.175 4.38679 10.175 3.96226V2.40566ZM5.5 8.06604C5.3625 8.49057 4.8125 8.63208 4.5375 8.34906L3.1625 7.5C2.75 7.35849 2.6125 6.79245 2.8875 6.50943C3.1625 6.08491 3.575 5.9434 3.9875 6.22641L5.3625 7.07547C5.6375 7.21698 5.775 7.64151 5.5 8.06604ZM7.8375 5.66038C7.425 5.9434 7.0125 5.80189 6.7375 5.37736L5.9125 3.96226C5.775 3.67924 5.9125 3.11321 6.325 2.9717C6.6 2.68868 7.15 2.83019 7.425 3.25472L8.25 4.66981C8.3875 4.95283 8.25 5.51887 7.8375 5.66038ZM11.1375 13.7264C9.9 13.7264 8.8 12.5943 8.8 11.3208C8.8 10.0472 9.9 8.91509 11.1375 8.91509C11.4125 8.91509 11.825 8.91509 12.1 9.0566L16.775 4.24528C17.05 3.96226 17.6 3.96226 17.875 4.24528C18.15 4.5283 18.15 5.09434 17.875 5.37736L13.2 10.1887C13.475 10.4717 13.475 10.8962 13.475 11.3208C13.475 12.5943 12.5125 13.7264 11.1375 13.7264ZM19.6625 12.1698H18.15C17.7375 12.1698 17.325 11.7453 17.325 11.3208C17.325 10.8962 17.7375 10.4717 18.15 10.4717H19.6625C20.075 10.4717 20.4875 10.8962 20.4875 11.3208C20.4875 11.7453 20.075 12.1698 19.6625 12.1698Z" fill="white" />
                    </svg>
                    <span>
                        Overview
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)} to='/project/insights'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.85714 0C2.09938 0 1.37266 0.301019 0.836838 0.836838C0.301019 1.37266 0 2.09938 0 2.85714V17.1429C0 17.9006 0.301019 18.6273 0.836838 19.1632C1.37266 19.699 2.09938 20 2.85714 20H17.1429C17.9006 20 18.6273 19.699 19.1632 19.1632C19.699 18.6273 20 17.9006 20 17.1429V2.85714C20 2.09938 19.699 1.37266 19.1632 0.836838C18.6273 0.301019 17.9006 0 17.1429 0H2.85714ZM15.7143 5.71429C15.7143 5.33541 15.5638 4.97204 15.2959 4.70413C15.028 4.43622 14.6646 4.28571 14.2857 4.28571C13.9068 4.28571 13.5435 4.43622 13.2756 4.70413C13.0077 4.97204 12.8571 5.33541 12.8571 5.71429V14.2857C12.8571 14.6646 13.0077 15.028 13.2756 15.2959C13.5435 15.5638 13.9068 15.7143 14.2857 15.7143C14.6646 15.7143 15.028 15.5638 15.2959 15.2959C15.5638 15.028 15.7143 14.6646 15.7143 14.2857V5.71429ZM11.4286 8.57143C11.4286 8.19255 11.2781 7.82919 11.0102 7.56128C10.7422 7.29337 10.3789 7.14286 10 7.14286C9.62112 7.14286 9.25776 7.29337 8.98985 7.56128C8.72194 7.82919 8.57143 8.19255 8.57143 8.57143V14.2857C8.57143 14.6646 8.72194 15.028 8.98985 15.2959C9.25776 15.5638 9.62112 15.7143 10 15.7143C10.3789 15.7143 10.7422 15.5638 11.0102 15.2959C11.2781 15.028 11.4286 14.6646 11.4286 14.2857V8.57143ZM7.14286 12.8571C7.14286 12.4783 6.99235 12.1149 6.72444 11.847C6.45653 11.5791 6.09317 11.4286 5.71429 11.4286C5.33541 11.4286 4.97204 11.5791 4.70413 11.847C4.43622 12.1149 4.28571 12.4783 4.28571 12.8571V14.2857C4.28571 14.6646 4.43622 15.028 4.70413 15.2959C4.97204 15.5638 5.33541 15.7143 5.71429 15.7143C6.09317 15.7143 6.45653 15.5638 6.72444 15.2959C6.99235 15.028 7.14286 14.6646 7.14286 14.2857V12.8571Z" fill="#AAB2C8" />
                    </svg>
                    <span>
                        Insights
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)} to='/project/templates'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.42857C0 1.04969 0.15051 0.686328 0.418419 0.418419C0.686328 0.15051 1.04969 0 1.42857 0H18.5714C18.9503 0 19.3137 0.15051 19.5816 0.418419C19.8495 0.686328 20 1.04969 20 1.42857V4.28571C20 4.6646 19.8495 5.02796 19.5816 5.29587C19.3137 5.56378 18.9503 5.71429 18.5714 5.71429H1.42857C1.04969 5.71429 0.686328 5.56378 0.418419 5.29587C0.15051 5.02796 0 4.6646 0 4.28571V1.42857ZM0 10C0 9.62112 0.15051 9.25776 0.418419 8.98985C0.686328 8.72194 1.04969 8.57143 1.42857 8.57143H10C10.3789 8.57143 10.7422 8.72194 11.0102 8.98985C11.2781 9.25776 11.4286 9.62112 11.4286 10V18.5714C11.4286 18.9503 11.2781 19.3137 11.0102 19.5816C10.7422 19.8495 10.3789 20 10 20H1.42857C1.04969 20 0.686328 19.8495 0.418419 19.5816C0.15051 19.3137 0 18.9503 0 18.5714V10ZM15.7143 8.57143C15.3354 8.57143 14.972 8.72194 14.7041 8.98985C14.4362 9.25776 14.2857 9.62112 14.2857 10V18.5714C14.2857 18.9503 14.4362 19.3137 14.7041 19.5816C14.972 19.8495 15.3354 20 15.7143 20H18.5714C18.9503 20 19.3137 19.8495 19.5816 19.5816C19.8495 19.3137 20 18.9503 20 18.5714V10C20 9.62112 19.8495 9.25776 19.5816 8.98985C19.3137 8.72194 18.9503 8.57143 18.5714 8.57143H15.7143Z" fill="#AAB2C8" />
                    </svg>
                    <span>
                        Templates
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)} to='/project/membership'>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C9.66848 0 9.35054 0.131696 9.11612 0.366116C8.8817 0.600537 8.75 0.918479 8.75 1.25V2.5C8.75 2.83152 8.8817 3.14946 9.11612 3.38388C9.35054 3.6183 9.66848 3.75 10 3.75C10.3315 3.75 10.6495 3.6183 10.8839 3.38388C11.1183 3.14946 11.25 2.83152 11.25 2.5V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366116C10.6495 0.131696 10.3315 0 10 0ZM2.5 2.5H6.25C6.25 3.49456 6.64509 4.44839 7.34835 5.15165C8.05161 5.85491 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 5.85491 12.6517 5.15165C13.3549 4.44839 13.75 3.49456 13.75 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V16.25C20 16.913 19.7366 17.5489 19.2678 18.0178C18.7989 18.4866 18.163 18.75 17.5 18.75H2.5C1.83696 18.75 1.20107 18.4866 0.732233 18.0178C0.263392 17.5489 0 16.913 0 16.25V5C0 4.33696 0.263392 3.70107 0.732233 3.23223C1.20107 2.76339 1.83696 2.5 2.5 2.5ZM5.625 11.25C6.12228 11.25 6.59919 11.0525 6.95083 10.7008C7.30246 10.3492 7.5 9.87228 7.5 9.375C7.5 8.87772 7.30246 8.40081 6.95083 8.04917C6.59919 7.69754 6.12228 7.5 5.625 7.5C5.12772 7.5 4.65081 7.69754 4.29917 8.04917C3.94754 8.40081 3.75 8.87772 3.75 9.375C3.75 9.87228 3.94754 10.3492 4.29917 10.7008C4.65081 11.0525 5.12772 11.25 5.625 11.25ZM8.6875 16.25C8.77966 15.7961 8.76979 15.3275 8.6586 14.8779C8.54742 14.4283 8.33769 14.0091 8.0446 13.6505C7.75151 13.2919 7.38239 13.0029 6.96392 12.8045C6.54546 12.6061 6.08813 12.5031 5.625 12.5031C5.16187 12.5031 4.70454 12.6061 4.28608 12.8045C3.86761 13.0029 3.49849 13.2919 3.2054 13.6505C2.91231 14.0091 2.70258 14.4283 2.5914 14.8779C2.48021 15.3275 2.47034 15.7961 2.5625 16.25H8.6875ZM12.5 8.75C12.1685 8.75 11.8505 8.8817 11.6161 9.11612C11.3817 9.35054 11.25 9.66848 11.25 10C11.25 10.3315 11.3817 10.6495 11.6161 10.8839C11.8505 11.1183 12.1685 11.25 12.5 11.25H16.25C16.5815 11.25 16.8995 11.1183 17.1339 10.8839C17.3683 10.6495 17.5 10.3315 17.5 10C17.5 9.66848 17.3683 9.35054 17.1339 9.11612C16.8995 8.8817 16.5815 8.75 16.25 8.75H12.5ZM11.25 13.75C11.25 13.4185 11.3817 13.1005 11.6161 12.8661C11.8505 12.6317 12.1685 12.5 12.5 12.5H15C15.3315 12.5 15.6495 12.6317 15.8839 12.8661C16.1183 13.1005 16.25 13.4185 16.25 13.75C16.25 14.0815 16.1183 14.3995 15.8839 14.6339C15.6495 14.8683 15.3315 15 15 15H12.5C12.1685 15 11.8505 14.8683 11.6161 14.6339C11.3817 14.3995 11.25 14.0815 11.25 13.75Z" fill="#AAB2C8" />
                    </svg>
                    <span>
                        Membership
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)} to='/project/settings'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8626 1.46255C11.3875 -0.487515 8.61246 -0.487515 8.13744 1.46255C8.06652 1.75557 7.92742 2.02772 7.73146 2.25683C7.53549 2.48595 7.2882 2.66556 7.00971 2.78105C6.73122 2.89654 6.4294 2.94465 6.1288 2.92145C5.82821 2.89826 5.53733 2.80443 5.27985 2.64758C3.5648 1.60255 1.60224 3.56511 2.64727 5.28017C3.32229 6.3877 2.72352 7.83274 1.46348 8.139C-0.487828 8.61277 -0.487828 11.3891 1.46348 11.8616C1.75659 11.9326 2.02878 12.0719 2.2579 12.268C2.48701 12.4641 2.66657 12.7115 2.78195 12.9902C2.89733 13.2688 2.94527 13.5708 2.92187 13.8715C2.89846 14.1721 2.80438 14.463 2.64727 14.7205C1.60224 16.4355 3.5648 18.3981 5.27985 17.353C5.53729 17.1959 5.82818 17.1019 6.12886 17.0784C6.42954 17.055 6.73149 17.103 7.01013 17.2184C7.28877 17.3337 7.53623 17.5133 7.73234 17.7424C7.92845 17.9715 8.06768 18.2437 8.13869 18.5368C8.61246 20.4881 11.3888 20.4881 11.8613 18.5368C11.9326 18.2439 12.0719 17.9719 12.2681 17.7429C12.4642 17.514 12.7116 17.3345 12.9902 17.2192C13.2688 17.1038 13.5706 17.0558 13.8712 17.0791C14.1718 17.1024 14.4627 17.1962 14.7201 17.353C16.4352 18.3981 18.3978 16.4355 17.3527 14.7205C17.1959 14.463 17.102 14.1721 17.0788 13.8715C17.0555 13.5709 17.1035 13.2691 17.2189 12.9905C17.3342 12.712 17.5136 12.4645 17.7426 12.2684C17.9716 12.0722 18.2436 11.9329 18.5365 11.8616C20.4878 11.3879 20.4878 8.61152 18.5365 8.139C18.2434 8.068 17.9712 7.92877 17.7421 7.73265C17.513 7.53654 17.3334 7.28909 17.2181 7.01044C17.1027 6.7318 17.0547 6.42985 17.0781 6.12917C17.1015 5.8285 17.1956 5.5376 17.3527 5.28017C18.3978 3.56511 16.4352 1.60255 14.7201 2.64758C14.4627 2.80469 14.1718 2.89877 13.8711 2.92218C13.5705 2.94558 13.2685 2.89764 12.9899 2.78226C12.7112 2.66688 12.4638 2.48732 12.2677 2.25821C12.0715 2.0291 11.9323 1.7569 11.8613 1.4638L11.8626 1.46255ZM10 13.7504C10.9946 13.7504 11.9485 13.3553 12.6517 12.652C13.355 11.9488 13.7501 10.9949 13.7501 10.0003C13.7501 9.00572 13.355 8.05186 12.6517 7.34858C11.9485 6.6453 10.9946 6.2502 10 6.2502C9.00541 6.2502 8.05155 6.6453 7.34827 7.34858C6.64498 8.05186 6.24988 9.00572 6.24988 10.0003C6.24988 10.9949 6.64498 11.9488 7.34827 12.652C8.05155 13.3553 9.00541 13.7504 10 13.7504Z" fill="#AAB2C8" />
                    </svg>
                    <span>
                        Settings
                    </span>
                </NavLink>
            </nav>
        </div>
    );
}

export default NavMenu;