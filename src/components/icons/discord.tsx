import { FC } from "react";

type Props = {
  size?: 'S' | 'M' | 'L';
  theme?: 'LIGHT' | 'DARK';
  color?: string;
}

export const Discord: FC<Props> = ({ color = 'white', theme = 'LIGHT', size = "S" }) => {
  return (
    <>
      {size === "S" && 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
          viewBox="0 0 17 17"
          >
            {theme === 'LIGHT' && <path fill="var(--light-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M13.9257 3.19638L14.1426 3.52028C15.7691 5.94929 16.5921 8.72793 16.2916 11.9099L16.2332 12.5278L15.7361 12.8995C14.4803 13.8385 13.2508 14.4144 12.0464 14.7893L11.0897 15.0871L10.4992 14.2776C10.3307 14.0466 10.1732 13.808 10.0268 13.5629C9.0149 13.7403 7.98651 13.739 6.97207 13.5599C6.82493 13.806 6.66732 14.0443 6.50007 14.2745L5.90978 15.0869L4.95102 14.7882C3.74753 14.4132 2.51953 13.8373 1.26438 12.9L0.765916 12.5278L0.70812 11.9083C0.452346 9.16706 0.973688 6.36093 2.84792 3.52871L3.0649 3.20083L3.42086 3.03385C4.36779 2.58964 5.38162 2.26642 6.44127 2.08309L7.41895 1.91393L7.84517 2.67769C8.27937 2.65225 8.7147 2.65243 9.15088 2.67809L9.57401 1.91309L10.5558 2.08313C11.6136 2.26635 12.6259 2.58824 13.5726 3.03118L13.9257 3.19638ZM5.23552 11.5502C5.55554 11.6999 5.87973 11.827 6.20675 11.9315C6.68579 12.0847 7.17091 12.1895 7.65787 12.2459C8.21818 12.3107 8.78093 12.3115 9.33968 12.2482C9.82827 12.1928 10.3138 12.0884 10.792 11.935C11.12 11.8298 11.4446 11.7015 11.7643 11.5502C11.849 11.6207 11.9355 11.6894 12.023 11.7552C12.0267 11.7581 12.0305 11.7609 12.0343 11.7638C11.9906 11.7901 11.9465 11.816 11.9022 11.8414C11.8397 11.8772 11.7767 11.912 11.713 11.9458C11.5606 12.0269 11.4048 12.1024 11.246 12.172C11.2418 12.1738 11.2376 12.1756 11.2334 12.1775C11.1337 12.2209 11.0329 12.2621 10.931 12.3008C10.9568 12.3525 10.9832 12.404 11.01 12.4551C11.0789 12.5861 11.1512 12.7151 11.2268 12.8418C11.2976 12.9604 11.3713 13.0771 11.448 13.1916C11.507 13.2799 11.5678 13.3669 11.6303 13.4526C11.8484 13.3847 12.0673 13.3095 12.2871 13.2256C13.1412 12.8996 14.0089 12.4429 14.8978 11.7783C15.1657 8.94072 14.44 6.48054 12.9793 4.29925C12.1439 3.90839 11.2507 3.62434 10.3169 3.46259C10.2022 3.66994 10.0682 3.94884 9.97579 4.17069C8.98308 4.0214 7.9995 4.0214 7.02505 4.17069C6.93269 3.94884 6.79566 3.66994 6.67994 3.46259C5.74508 3.62434 4.85082 3.90944 4.01543 4.30132C2.33045 6.84755 1.87368 9.33053 2.10207 11.7783C2.99073 12.4419 3.85758 12.8984 4.71076 13.2244C4.93053 13.3083 5.14938 13.3836 5.36747 13.4516C5.43028 13.3651 5.49146 13.2774 5.55096 13.1884C5.62585 13.0764 5.69808 12.9623 5.76755 12.8463C5.84582 12.7156 5.92058 12.5824 5.99167 12.4468C6.0172 12.3981 6.04226 12.3491 6.06684 12.2997C5.96497 12.261 5.86425 12.2199 5.76474 12.1765C5.76421 12.1763 5.76369 12.1761 5.76316 12.1758C5.60046 12.1048 5.44102 12.0276 5.28514 11.9447C5.22251 11.9114 5.16046 11.8772 5.099 11.842C5.05419 11.8164 5.00969 11.7903 4.96553 11.7638C4.96896 11.7612 4.9724 11.7587 4.97583 11.7561C5.06461 11.69 5.15148 11.621 5.23552 11.5502ZM7.51634 8.95316C7.5275 8.22744 7.00476 7.63236 6.35613 7.63236C5.70752 7.63236 5.19593 8.22848 5.19593 8.95316C5.19593 9.67784 5.71869 10.2729 6.35613 10.2729C7.00476 10.2729 7.51734 9.67784 7.51634 8.95316ZM6.13791 8.95102C6.13861 8.95172 6.13933 8.95243 6.14008 8.95316C6.14073 8.95379 6.1414 8.95442 6.14209 8.95507C6.17452 8.9855 6.24738 9.03236 6.35613 9.03236C6.41219 9.03236 6.4661 9.01874 6.51003 8.99752C6.54012 8.98299 6.56116 8.96715 6.57491 8.95447C6.57539 8.95403 6.57586 8.95359 6.57632 8.95316C6.57719 8.95234 6.57803 8.95153 6.57885 8.95074C6.57484 8.94703 6.57 8.94289 6.56434 8.93851C6.52833 8.91067 6.45889 8.87293 6.35613 8.87293C6.30052 8.87293 6.24702 8.88642 6.20337 8.90746C6.18652 8.91557 6.1725 8.92412 6.161 8.93231C6.15172 8.93892 6.14407 8.94529 6.13791 8.95102ZM10.4253 8.95087C10.4261 8.95162 10.4268 8.95238 10.4276 8.95316C10.459 8.98348 10.5326 9.03236 10.6437 9.03236C10.6997 9.03236 10.7537 9.01874 10.7976 8.99752C10.8287 8.98249 10.8502 8.96605 10.8639 8.95316C10.8648 8.95233 10.8656 8.95153 10.8664 8.95073C10.8624 8.94703 10.8576 8.94289 10.8519 8.93851C10.8159 8.91067 10.7465 8.87293 10.6437 8.87293C10.588 8.87293 10.5344 8.88644 10.4905 8.90759C10.4738 8.91567 10.4598 8.92416 10.4483 8.93231C10.4391 8.93885 10.4315 8.94517 10.4253 8.95087ZM9.4835 8.95316C9.4835 9.67784 10.0063 10.2729 10.6437 10.2729C11.2923 10.2729 11.8039 9.67784 11.8039 8.95316C11.8151 8.22744 11.2923 7.63236 10.6437 7.63236C9.99508 7.63236 9.4835 8.22848 9.4835 8.95316Z"/>}
            {theme === 'DARK' && <path fill="var(--dark-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M13.9257 3.19638L14.1426 3.52028C15.7691 5.94929 16.5921 8.72793 16.2916 11.9099L16.2332 12.5278L15.7361 12.8995C14.4803 13.8385 13.2508 14.4144 12.0464 14.7893L11.0897 15.0871L10.4992 14.2776C10.3307 14.0466 10.1732 13.808 10.0268 13.5629C9.0149 13.7403 7.98651 13.739 6.97207 13.5599C6.82493 13.806 6.66732 14.0443 6.50007 14.2745L5.90978 15.0869L4.95102 14.7882C3.74753 14.4132 2.51953 13.8373 1.26438 12.9L0.765916 12.5278L0.70812 11.9083C0.452346 9.16706 0.973688 6.36093 2.84792 3.52871L3.0649 3.20083L3.42086 3.03385C4.36779 2.58964 5.38162 2.26642 6.44127 2.08309L7.41895 1.91393L7.84517 2.67769C8.27937 2.65225 8.7147 2.65243 9.15088 2.67809L9.57401 1.91309L10.5558 2.08313C11.6136 2.26635 12.6259 2.58824 13.5726 3.03118L13.9257 3.19638ZM5.23552 11.5502C5.55554 11.6999 5.87973 11.827 6.20675 11.9315C6.68579 12.0847 7.17091 12.1895 7.65787 12.2459C8.21818 12.3107 8.78093 12.3115 9.33968 12.2482C9.82827 12.1928 10.3138 12.0884 10.792 11.935C11.12 11.8298 11.4446 11.7015 11.7643 11.5502C11.849 11.6207 11.9355 11.6894 12.023 11.7552C12.0267 11.7581 12.0305 11.7609 12.0343 11.7638C11.9906 11.7901 11.9465 11.816 11.9022 11.8414C11.8397 11.8772 11.7767 11.912 11.713 11.9458C11.5606 12.0269 11.4048 12.1024 11.246 12.172C11.2418 12.1738 11.2376 12.1756 11.2334 12.1775C11.1337 12.2209 11.0329 12.2621 10.931 12.3008C10.9568 12.3525 10.9832 12.404 11.01 12.4551C11.0789 12.5861 11.1512 12.7151 11.2268 12.8418C11.2976 12.9604 11.3713 13.0771 11.448 13.1916C11.507 13.2799 11.5678 13.3669 11.6303 13.4526C11.8484 13.3847 12.0673 13.3095 12.2871 13.2256C13.1412 12.8996 14.0089 12.4429 14.8978 11.7783C15.1657 8.94072 14.44 6.48054 12.9793 4.29925C12.1439 3.90839 11.2507 3.62434 10.3169 3.46259C10.2022 3.66994 10.0682 3.94884 9.97579 4.17069C8.98308 4.0214 7.9995 4.0214 7.02505 4.17069C6.93269 3.94884 6.79566 3.66994 6.67994 3.46259C5.74508 3.62434 4.85082 3.90944 4.01543 4.30132C2.33045 6.84755 1.87368 9.33053 2.10207 11.7783C2.99073 12.4419 3.85758 12.8984 4.71076 13.2244C4.93053 13.3083 5.14938 13.3836 5.36747 13.4516C5.43028 13.3651 5.49146 13.2774 5.55096 13.1884C5.62585 13.0764 5.69808 12.9623 5.76755 12.8463C5.84582 12.7156 5.92058 12.5824 5.99167 12.4468C6.0172 12.3981 6.04226 12.3491 6.06684 12.2997C5.96497 12.261 5.86425 12.2199 5.76474 12.1765C5.76421 12.1763 5.76369 12.1761 5.76316 12.1758C5.60046 12.1048 5.44102 12.0276 5.28514 11.9447C5.22251 11.9114 5.16046 11.8772 5.099 11.842C5.05419 11.8164 5.00969 11.7903 4.96553 11.7638C4.96896 11.7612 4.9724 11.7587 4.97583 11.7561C5.06461 11.69 5.15148 11.621 5.23552 11.5502ZM7.51634 8.95316C7.5275 8.22744 7.00476 7.63236 6.35613 7.63236C5.70752 7.63236 5.19593 8.22848 5.19593 8.95316C5.19593 9.67784 5.71869 10.2729 6.35613 10.2729C7.00476 10.2729 7.51734 9.67784 7.51634 8.95316ZM6.13791 8.95102C6.13861 8.95172 6.13933 8.95243 6.14008 8.95316C6.14073 8.95379 6.1414 8.95442 6.14209 8.95507C6.17452 8.9855 6.24738 9.03236 6.35613 9.03236C6.41219 9.03236 6.4661 9.01874 6.51003 8.99752C6.54012 8.98299 6.56116 8.96715 6.57491 8.95447C6.57539 8.95403 6.57586 8.95359 6.57632 8.95316C6.57719 8.95234 6.57803 8.95153 6.57885 8.95074C6.57484 8.94703 6.57 8.94289 6.56434 8.93851C6.52833 8.91067 6.45889 8.87293 6.35613 8.87293C6.30052 8.87293 6.24702 8.88642 6.20337 8.90746C6.18652 8.91557 6.1725 8.92412 6.161 8.93231C6.15172 8.93892 6.14407 8.94529 6.13791 8.95102ZM10.4253 8.95087C10.4261 8.95162 10.4268 8.95238 10.4276 8.95316C10.459 8.98348 10.5326 9.03236 10.6437 9.03236C10.6997 9.03236 10.7537 9.01874 10.7976 8.99752C10.8287 8.98249 10.8502 8.96605 10.8639 8.95316C10.8648 8.95233 10.8656 8.95153 10.8664 8.95073C10.8624 8.94703 10.8576 8.94289 10.8519 8.93851C10.8159 8.91067 10.7465 8.87293 10.6437 8.87293C10.588 8.87293 10.5344 8.88644 10.4905 8.90759C10.4738 8.91567 10.4598 8.92416 10.4483 8.93231C10.4391 8.93885 10.4315 8.94517 10.4253 8.95087ZM9.4835 8.95316C9.4835 9.67784 10.0063 10.2729 10.6437 10.2729C11.2923 10.2729 11.8039 9.67784 11.8039 8.95316C11.8151 8.22744 11.2923 7.63236 10.6437 7.63236C9.99508 7.63236 9.4835 8.22848 9.4835 8.95316Z"/>}
        </svg>
      }
      {size === "M" && 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="none"
        viewBox="0 0 19 19"
        >
          {theme === 'LIGHT' && <path fill="var(--light-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M16.0659 3.1029L16.3112 3.46922C18.2909 6.42557 19.2912 9.80408 18.9257 13.675L18.8597 14.3738L18.2975 14.7941C16.77 15.9362 15.2755 16.6363 13.8111 17.0921L12.7292 17.4289L12.0614 16.5134C11.8388 16.2083 11.6321 15.8923 11.4413 15.567C10.1555 15.8038 8.84679 15.8022 7.55747 15.5631C7.36562 15.89 7.15859 16.2057 6.93769 16.5097L6.27009 17.4285L5.18578 17.0907C3.72254 16.6348 2.22983 15.9348 0.703106 14.7947L0.139362 14.3737L0.0739977 13.6732C-0.237181 10.3381 0.396253 6.92632 2.67757 3.47895L2.92296 3.10813L3.32553 2.91928C4.47661 2.37931 5.709 1.98641 6.99708 1.76355L8.1028 1.57225L8.62053 2.49998C9.20376 2.46214 9.78873 2.46239 10.375 2.50051L10.889 1.57129L11.9993 1.7636C13.2852 1.98633 14.5158 2.37762 15.6666 2.91607L16.0659 3.1029ZM5.49488 13.2462C5.8875 13.4299 6.28525 13.5859 6.68646 13.7141C7.22783 13.8872 7.77552 14.01 8.32548 14.0823C9.10688 14.1851 9.89285 14.1861 10.6718 14.0854C11.2234 14.0141 11.7715 13.8918 12.312 13.7184C12.7145 13.5893 13.1127 13.4319 13.505 13.2462C13.6088 13.3328 13.715 13.4171 13.8223 13.4978C13.8269 13.5013 13.8316 13.5048 13.8362 13.5083C13.7826 13.5406 13.7285 13.5724 13.6741 13.6035C13.414 13.7525 13.1452 13.8881 12.8691 14.0091C12.7418 14.0649 12.6129 14.1176 12.4825 14.1672C12.5142 14.2306 12.5466 14.2937 12.5796 14.3565C12.6358 14.4634 12.6939 14.5692 12.7537 14.6739C12.8451 14.8336 12.9408 14.9905 13.0406 15.1444C13.128 15.279 13.2185 15.4114 13.3122 15.5412C13.3216 15.5543 13.3311 15.5673 13.3406 15.5803C14.6482 15.1733 15.9782 14.5513 17.3493 13.5261C17.6781 10.0447 16.7877 7.02639 14.9956 4.3502C13.9707 3.87066 12.8748 3.52215 11.7291 3.32371C11.5884 3.57811 11.424 3.92028 11.3106 4.19247C10.0927 4.00931 8.88597 4.00931 7.69042 4.19247C7.57711 3.92028 7.40898 3.57811 7.26702 3.32371C6.12005 3.52215 5.02289 3.87194 3.99797 4.35274C1.93069 7.47667 1.37029 10.523 1.65049 13.5261C3.02162 14.55 4.35041 15.172 5.65677 15.579C5.66623 15.566 5.67566 15.553 5.68506 15.5399C5.77913 15.4091 5.87018 15.2759 5.95809 15.1404C6.0559 14.9896 6.14982 14.836 6.23968 14.6795C6.30266 14.5698 6.36365 14.4587 6.42258 14.3463C6.45391 14.2865 6.48465 14.2264 6.51481 14.1659C6.38917 14.1181 6.26495 14.0674 6.14223 14.0139C5.86242 13.8917 5.59043 13.7547 5.32739 13.6043C5.27241 13.5729 5.21781 13.5409 5.16362 13.5083C5.16784 13.5052 5.17206 13.502 5.17627 13.4989C5.28519 13.4178 5.39177 13.3332 5.49488 13.2462ZM8.29318 10.06C8.30687 9.16963 7.66553 8.43954 6.86974 8.43954C6.07397 8.43954 5.4463 9.17091 5.4463 10.06C5.4463 10.9491 6.08767 11.6792 6.86974 11.6792C7.66553 11.6792 8.29441 10.9491 8.29318 10.06ZM10.7067 10.06C10.7067 10.9491 11.348 11.6792 12.1301 11.6792C12.9259 11.6792 13.5535 10.9491 13.5535 10.06C13.5672 9.16963 12.9259 8.43954 12.1301 8.43954C11.3343 8.43954 10.7067 9.17091 10.7067 10.06Z" />}
          {theme === 'DARK' && <path fill="var(--dark-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M16.0659 3.1029L16.3112 3.46922C18.2909 6.42557 19.2912 9.80408 18.9257 13.675L18.8597 14.3738L18.2975 14.7941C16.77 15.9362 15.2755 16.6363 13.8111 17.0921L12.7292 17.4289L12.0614 16.5134C11.8388 16.2083 11.6321 15.8923 11.4413 15.567C10.1555 15.8038 8.84679 15.8022 7.55747 15.5631C7.36562 15.89 7.15859 16.2057 6.93769 16.5097L6.27009 17.4285L5.18578 17.0907C3.72254 16.6348 2.22983 15.9348 0.703106 14.7947L0.139362 14.3737L0.0739977 13.6732C-0.237181 10.3381 0.396253 6.92632 2.67757 3.47895L2.92296 3.10813L3.32553 2.91928C4.47661 2.37931 5.709 1.98641 6.99708 1.76355L8.1028 1.57225L8.62053 2.49998C9.20376 2.46214 9.78873 2.46239 10.375 2.50051L10.889 1.57129L11.9993 1.7636C13.2852 1.98633 14.5158 2.37762 15.6666 2.91607L16.0659 3.1029ZM5.49488 13.2462C5.8875 13.4299 6.28525 13.5859 6.68646 13.7141C7.22783 13.8872 7.77552 14.01 8.32548 14.0823C9.10688 14.1851 9.89285 14.1861 10.6718 14.0854C11.2234 14.0141 11.7715 13.8918 12.312 13.7184C12.7145 13.5893 13.1127 13.4319 13.505 13.2462C13.6088 13.3328 13.715 13.4171 13.8223 13.4978C13.8269 13.5013 13.8316 13.5048 13.8362 13.5083C13.7826 13.5406 13.7285 13.5724 13.6741 13.6035C13.414 13.7525 13.1452 13.8881 12.8691 14.0091C12.7418 14.0649 12.6129 14.1176 12.4825 14.1672C12.5142 14.2306 12.5466 14.2937 12.5796 14.3565C12.6358 14.4634 12.6939 14.5692 12.7537 14.6739C12.8451 14.8336 12.9408 14.9905 13.0406 15.1444C13.128 15.279 13.2185 15.4114 13.3122 15.5412C13.3216 15.5543 13.3311 15.5673 13.3406 15.5803C14.6482 15.1733 15.9782 14.5513 17.3493 13.5261C17.6781 10.0447 16.7877 7.02639 14.9956 4.3502C13.9707 3.87066 12.8748 3.52215 11.7291 3.32371C11.5884 3.57811 11.424 3.92028 11.3106 4.19247C10.0927 4.00931 8.88597 4.00931 7.69042 4.19247C7.57711 3.92028 7.40898 3.57811 7.26702 3.32371C6.12005 3.52215 5.02289 3.87194 3.99797 4.35274C1.93069 7.47667 1.37029 10.523 1.65049 13.5261C3.02162 14.55 4.35041 15.172 5.65677 15.579C5.66623 15.566 5.67566 15.553 5.68506 15.5399C5.77913 15.4091 5.87018 15.2759 5.95809 15.1404C6.0559 14.9896 6.14982 14.836 6.23968 14.6795C6.30266 14.5698 6.36365 14.4587 6.42258 14.3463C6.45391 14.2865 6.48465 14.2264 6.51481 14.1659C6.38917 14.1181 6.26495 14.0674 6.14223 14.0139C5.86242 13.8917 5.59043 13.7547 5.32739 13.6043C5.27241 13.5729 5.21781 13.5409 5.16362 13.5083C5.16784 13.5052 5.17206 13.502 5.17627 13.4989C5.28519 13.4178 5.39177 13.3332 5.49488 13.2462ZM8.29318 10.06C8.30687 9.16963 7.66553 8.43954 6.86974 8.43954C6.07397 8.43954 5.4463 9.17091 5.4463 10.06C5.4463 10.9491 6.08767 11.6792 6.86974 11.6792C7.66553 11.6792 8.29441 10.9491 8.29318 10.06ZM10.7067 10.06C10.7067 10.9491 11.348 11.6792 12.1301 11.6792C12.9259 11.6792 13.5535 10.9491 13.5535 10.06C13.5672 9.16963 12.9259 8.43954 12.1301 8.43954C11.3343 8.43954 10.7067 9.17091 10.7067 10.06Z" />}
      </svg>
      }
      {size === "L" && 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 25 25"
        >
          {theme === 'LIGHT' &&
            <>
              <path fill="var(--light-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M20.9455 4.31677L21.2244 4.73322C23.7949 8.57186 25.091 12.9515 24.6167 17.9735L24.5417 18.768L23.9026 19.2459C21.9213 20.7273 19.9849 21.6341 18.0867 22.225L16.8567 22.6078L16.0975 21.567C15.7713 21.1198 15.4713 20.6542 15.1978 20.1734C13.4129 20.5286 11.5914 20.5264 9.80087 20.1681C9.5257 20.6516 9.22494 21.1169 8.90102 21.5627L8.14207 22.6072L6.90939 22.2232C5.01271 21.6322 3.07853 20.7254 1.09812 19.2465L0.457239 18.7679L0.38293 17.9715C-0.0208505 13.644 0.799299 9.2215 3.76183 4.74474L4.0408 4.32317L4.49846 4.10848C5.99002 3.40879 7.58689 2.89969 9.256 2.61091L10.513 2.39342L11.1347 3.50739C11.1507 3.53615 11.167 3.56558 11.1833 3.59559C12.0565 3.52994 12.9328 3.53032 13.8116 3.59635C13.8268 3.56819 13.8419 3.54049 13.8569 3.51334L14.477 2.39233L15.7393 2.61096C17.4057 2.89959 19.0003 3.40664 20.4915 4.10437L20.9455 4.31677ZM7.23188 17.4362C7.74832 17.6778 8.27149 17.8829 8.79923 18.0517C9.41459 18.2484 10.0361 18.3957 10.6605 18.4935C11.8838 18.685 13.1177 18.6866 14.3363 18.4981C14.9624 18.4013 15.5844 18.2544 16.1988 18.0573C16.7282 17.8875 17.252 17.6805 17.768 17.4362C17.9105 17.555 18.0563 17.6704 18.2037 17.7809C18.1521 17.8119 18.1003 17.8426 18.0483 17.8728C18.029 17.884 18.0098 17.8951 17.9904 17.9062C17.6483 18.1022 17.2947 18.2804 16.9316 18.4396C16.7641 18.513 16.5945 18.5824 16.4231 18.6475C16.601 19.0036 16.794 19.3507 17.0018 19.6874C17.1128 19.8673 17.2281 20.0442 17.3475 20.2179C17.4143 20.315 17.4824 20.4112 17.5517 20.5063C19.2717 19.9709 21.0212 19.1528 22.8247 17.8043C23.2571 13.2251 22.0859 9.25489 19.7287 5.73475C18.3806 5.10399 16.9391 4.64558 15.4321 4.38455C15.247 4.71918 15.0308 5.16925 14.8817 5.52728C13.2796 5.28636 11.6924 5.28636 10.1198 5.52728C9.97074 5.16925 9.7496 4.71918 9.56287 4.38455C8.0542 4.64558 6.61105 5.10567 5.26291 5.73809C2.54371 9.84716 1.80658 13.8542 2.17515 17.8043C3.97867 19.1511 5.72649 19.9693 7.44482 20.5046C7.51401 20.4094 7.58197 20.3132 7.64869 20.2161C7.76876 20.0412 7.88479 19.8632 7.99661 19.6822C8.20367 19.347 8.3963 19.0014 8.57345 18.6458C8.40819 18.5831 8.24479 18.5163 8.08338 18.4459C7.71532 18.2852 7.35756 18.1051 7.01157 17.9072C6.99049 17.8952 6.96946 17.8831 6.94847 17.8709C6.89744 17.8413 6.84667 17.8113 6.79616 17.7809C6.94522 17.6704 7.09102 17.555 7.23188 17.4362Z"/>
              <path fill="var(--light-1000)" d="M7.16793 13.393C7.16793 14.5625 8.01155 15.5229 9.04025 15.5229C10.087 15.5229 10.9142 14.5625 10.9126 13.393C10.9306 12.2219 10.087 11.2616 9.04025 11.2616C7.99353 11.2616 7.16793 12.2236 7.16793 13.393Z"/>
              <path fill="var(--light-1000)" d="M14.0872 13.393C14.0872 14.5625 14.9308 15.5229 15.9595 15.5229C17.0062 15.5229 17.8318 14.5625 17.8318 13.393C17.8498 12.2219 17.0062 11.2616 15.9595 11.2616C14.9127 11.2616 14.0872 12.2236 14.0872 13.393Z"/>
            </>
          }
          {theme === 'DARK' &&
            <>
              <path fill="var(--dark-1000)" fill-rule="evenodd" clip-rule="evenodd" d="M20.9455 4.31677L21.2244 4.73322C23.7949 8.57186 25.091 12.9515 24.6167 17.9735L24.5417 18.768L23.9026 19.2459C21.9213 20.7273 19.9849 21.6341 18.0867 22.225L16.8567 22.6078L16.0975 21.567C15.7713 21.1198 15.4713 20.6542 15.1978 20.1734C13.4129 20.5286 11.5914 20.5264 9.80087 20.1681C9.5257 20.6516 9.22494 21.1169 8.90102 21.5627L8.14207 22.6072L6.90939 22.2232C5.01271 21.6322 3.07853 20.7254 1.09812 19.2465L0.457239 18.7679L0.38293 17.9715C-0.0208505 13.644 0.799299 9.2215 3.76183 4.74474L4.0408 4.32317L4.49846 4.10848C5.99002 3.40879 7.58689 2.89969 9.256 2.61091L10.513 2.39342L11.1347 3.50739C11.1507 3.53615 11.167 3.56558 11.1833 3.59559C12.0565 3.52994 12.9328 3.53032 13.8116 3.59635C13.8268 3.56819 13.8419 3.54049 13.8569 3.51334L14.477 2.39233L15.7393 2.61096C17.4057 2.89959 19.0003 3.40664 20.4915 4.10437L20.9455 4.31677ZM7.23188 17.4362C7.74832 17.6778 8.27149 17.8829 8.79923 18.0517C9.41459 18.2484 10.0361 18.3957 10.6605 18.4935C11.8838 18.685 13.1177 18.6866 14.3363 18.4981C14.9624 18.4013 15.5844 18.2544 16.1988 18.0573C16.7282 17.8875 17.252 17.6805 17.768 17.4362C17.9105 17.555 18.0563 17.6704 18.2037 17.7809C18.1521 17.8119 18.1003 17.8426 18.0483 17.8728C18.029 17.884 18.0098 17.8951 17.9904 17.9062C17.6483 18.1022 17.2947 18.2804 16.9316 18.4396C16.7641 18.513 16.5945 18.5824 16.4231 18.6475C16.601 19.0036 16.794 19.3507 17.0018 19.6874C17.1128 19.8673 17.2281 20.0442 17.3475 20.2179C17.4143 20.315 17.4824 20.4112 17.5517 20.5063C19.2717 19.9709 21.0212 19.1528 22.8247 17.8043C23.2571 13.2251 22.0859 9.25489 19.7287 5.73475C18.3806 5.10399 16.9391 4.64558 15.4321 4.38455C15.247 4.71918 15.0308 5.16925 14.8817 5.52728C13.2796 5.28636 11.6924 5.28636 10.1198 5.52728C9.97074 5.16925 9.7496 4.71918 9.56287 4.38455C8.0542 4.64558 6.61105 5.10567 5.26291 5.73809C2.54371 9.84716 1.80658 13.8542 2.17515 17.8043C3.97867 19.1511 5.72649 19.9693 7.44482 20.5046C7.51401 20.4094 7.58197 20.3132 7.64869 20.2161C7.76876 20.0412 7.88479 19.8632 7.99661 19.6822C8.20367 19.347 8.3963 19.0014 8.57345 18.6458C8.40819 18.5831 8.24479 18.5163 8.08338 18.4459C7.71532 18.2852 7.35756 18.1051 7.01157 17.9072C6.99049 17.8952 6.96946 17.8831 6.94847 17.8709C6.89744 17.8413 6.84667 17.8113 6.79616 17.7809C6.94522 17.6704 7.09102 17.555 7.23188 17.4362Z"/>
              <path fill="var(--dark-1000)" d="M7.16793 13.393C7.16793 14.5625 8.01155 15.5229 9.04025 15.5229C10.087 15.5229 10.9142 14.5625 10.9126 13.393C10.9306 12.2219 10.087 11.2616 9.04025 11.2616C7.99353 11.2616 7.16793 12.2236 7.16793 13.393Z"/>
              <path fill="var(--dark-1000)" d="M14.0872 13.393C14.0872 14.5625 14.9308 15.5229 15.9595 15.5229C17.0062 15.5229 17.8318 14.5625 17.8318 13.393C17.8498 12.2219 17.0062 11.2616 15.9595 11.2616C14.9127 11.2616 14.0872 12.2236 14.0872 13.393Z"/>
            </>
          }
      </svg>
      }
    </>
  );
}

export default Discord;

