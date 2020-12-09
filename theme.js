import makerTheme from '@makerdao/dai-ui-theme-maker-neue';
import { icons as standardIcons } from '@makerdao/dai-ui-icons';
import { icons as brandIcons } from '@makerdao/dai-ui-icons-branding';

const icons = {
  ...standardIcons,
  ...brandIcons,
  num_1: {
    viewBox: '0 0 30 19',
    path: (
      <path
        d="M0.558516 9.45162C0.558516 11.8326 1.02292 14.0296 2.13798 15.6456C3.27227 17.2895 5.04494 18.2796 7.51452 18.2796V17.2796C5.35209 17.2796 3.89676 16.4338 2.96106 15.0777C2.00611 13.6937 1.55852 11.7266 1.55852 9.45162H0.558516ZM7.51452 18.2796C9.9728 18.2796 11.7448 17.289 12.8817 15.6461C13.9997 14.0305 14.4705 11.8338 14.4705 9.45162H13.4705C13.4705 11.7255 13.0174 13.6927 12.0594 15.0771C11.1202 16.4343 9.66423 17.2796 7.51452 17.2796V18.2796ZM14.4705 9.45162C14.4705 7.0695 13.9997 4.87828 12.8811 3.26833C11.7437 1.63122 9.97152 0.647624 7.51452 0.647624V1.64762C9.66551 1.64762 11.1213 2.48803 12.0599 3.83891C13.0173 5.21697 13.4705 7.17775 13.4705 9.45162H14.4705ZM7.51452 0.647624C5.04623 0.647624 3.2734 1.6307 2.13851 3.26889C1.0229 4.87924 0.558516 7.07065 0.558516 9.45162H1.55852C1.55852 7.1766 2.00613 5.21601 2.96052 3.83836C3.89563 2.48855 5.3508 1.64762 7.51452 1.64762V0.647624ZM4.94252 9.45162C4.94252 7.94095 5.09454 6.68578 5.50338 5.82267C5.70335 5.40051 5.9565 5.09023 6.26819 4.88331C6.57774 4.6778 6.97893 4.55162 7.51452 4.55162V3.55162C6.8141 3.55162 6.21329 3.71944 5.71509 4.05019C5.21903 4.37952 4.85868 4.84774 4.59965 5.39458C4.09049 6.46947 3.94252 7.9143 3.94252 9.45162H4.94252ZM7.51452 4.55162C8.0501 4.55162 8.45129 4.6778 8.76085 4.88331C9.07253 5.09023 9.32568 5.40051 9.52565 5.82267C9.93449 6.68578 10.0865 7.94095 10.0865 9.45162H11.0865C11.0865 7.9143 10.9385 6.46947 10.4294 5.39458C10.1704 4.84774 9.81 4.37952 9.31394 4.05019C8.81574 3.71944 8.21493 3.55162 7.51452 3.55162V4.55162ZM10.0865 9.45162C10.0865 10.9746 9.93443 12.2359 9.52539 13.1021C9.32534 13.5258 9.07214 13.8366 8.76058 14.0437C8.45116 14.2494 8.0501 14.3756 7.51452 14.3756V15.3756C8.21493 15.3756 8.81587 15.2078 9.31421 14.8765C9.81039 14.5466 10.1707 14.0775 10.4296 13.5291C10.9386 12.4513 11.0865 11.0006 11.0865 9.45162H10.0865ZM7.51452 14.3756C6.97893 14.3756 6.57787 14.2494 6.26846 14.0437C5.95689 13.8366 5.7037 13.5258 5.50364 13.1021C5.0946 12.2359 4.94252 10.9746 4.94252 9.45162H3.94252C3.94252 11.0006 4.09043 12.4513 4.59939 13.5291C4.85834 14.0775 5.21864 14.5466 5.71483 14.8765C6.21316 15.2078 6.8141 15.3756 7.51452 15.3756V14.3756ZM16.3123 6.85962H15.8123V7.35962H16.3123V6.85962ZM19.9843 6.85962H20.4843V6.35962H19.9843V6.85962ZM19.9843 17.5156H19.4843V18.0156H19.9843V17.5156ZM23.1043 17.5156V18.0156H23.6043V17.5156H23.1043ZM23.1043 1.21962H23.6043V0.719625H23.1043V1.21962ZM20.3443 1.21962V0.719625H19.8443V1.21962H20.3443ZM16.3123 4.53162V4.03162H15.8123V4.53162H16.3123ZM16.3123 7.35962H19.9843V6.35962H16.3123V7.35962ZM19.4843 6.85962V17.5156H20.4843V6.85962H19.4843ZM19.9843 18.0156H23.1043V17.0156H19.9843V18.0156ZM23.6043 17.5156V1.21962H22.6043V17.5156H23.6043ZM23.1043 0.719625H20.3443V1.71962H23.1043V0.719625ZM19.8443 1.21962C19.8443 2.43684 19.4909 3.08386 18.9651 3.4584C18.3994 3.86145 17.5264 4.03162 16.3123 4.03162V5.03162C17.5701 5.03162 18.7131 4.8658 19.5454 4.27285C20.4177 3.65139 20.8443 2.6424 20.8443 1.21962H19.8443ZM15.8123 4.53162V6.85962H16.8123V4.53162H15.8123Z"
        fill="currentColor"
      />
    ),
  },
  num_2: {
    viewBox: '0 0 30 19',
    path: (
      <path
        d="M0.558516 9.45162C0.558516 11.8326 1.02292 14.0296 2.13798 15.6456C3.27227 17.2895 5.04494 18.2796 7.51452 18.2796V17.2796C5.35209 17.2796 3.89676 16.4338 2.96106 15.0777C2.00611 13.6937 1.55852 11.7266 1.55852 9.45162H0.558516ZM7.51452 18.2796C9.9728 18.2796 11.7448 17.289 12.8817 15.6461C13.9997 14.0305 14.4705 11.8338 14.4705 9.45162H13.4705C13.4705 11.7255 13.0174 13.6927 12.0594 15.0771C11.1202 16.4343 9.66423 17.2796 7.51452 17.2796V18.2796ZM14.4705 9.45162C14.4705 7.0695 13.9997 4.87828 12.8811 3.26833C11.7437 1.63122 9.97152 0.647624 7.51452 0.647624V1.64762C9.66551 1.64762 11.1213 2.48803 12.0599 3.83891C13.0173 5.21697 13.4705 7.17775 13.4705 9.45162H14.4705ZM7.51452 0.647624C5.04623 0.647624 3.2734 1.6307 2.13851 3.26889C1.0229 4.87924 0.558516 7.07065 0.558516 9.45162H1.55852C1.55852 7.1766 2.00613 5.21601 2.96052 3.83836C3.89563 2.48855 5.3508 1.64762 7.51452 1.64762V0.647624ZM4.94252 9.45162C4.94252 7.94095 5.09454 6.68578 5.50338 5.82267C5.70335 5.40051 5.9565 5.09023 6.26819 4.88331C6.57774 4.6778 6.97893 4.55162 7.51452 4.55162V3.55162C6.8141 3.55162 6.21329 3.71944 5.71509 4.05019C5.21903 4.37952 4.85868 4.84774 4.59965 5.39458C4.09049 6.46947 3.94252 7.9143 3.94252 9.45162H4.94252ZM7.51452 4.55162C8.0501 4.55162 8.45129 4.6778 8.76085 4.88331C9.07253 5.09023 9.32568 5.40051 9.52565 5.82267C9.93449 6.68578 10.0865 7.94095 10.0865 9.45162H11.0865C11.0865 7.9143 10.9385 6.46947 10.4294 5.39458C10.1704 4.84774 9.81 4.37952 9.31394 4.05019C8.81574 3.71944 8.21493 3.55162 7.51452 3.55162V4.55162ZM10.0865 9.45162C10.0865 10.9746 9.93443 12.2359 9.52539 13.1021C9.32534 13.5258 9.07214 13.8366 8.76058 14.0437C8.45116 14.2494 8.0501 14.3756 7.51452 14.3756V15.3756C8.21493 15.3756 8.81587 15.2078 9.31421 14.8765C9.81039 14.5466 10.1707 14.0775 10.4296 13.5291C10.9386 12.4513 11.0865 11.0006 11.0865 9.45162H10.0865ZM7.51452 14.3756C6.97893 14.3756 6.57787 14.2494 6.26846 14.0437C5.95689 13.8366 5.7037 13.5258 5.50364 13.1021C5.0946 12.2359 4.94252 10.9746 4.94252 9.45162H3.94252C3.94252 11.0006 4.09043 12.4513 4.59939 13.5291C4.85834 14.0775 5.21864 14.5466 5.71483 14.8765C6.21316 15.2078 6.8141 15.3756 7.51452 15.3756V14.3756ZM16.5523 17.5156H16.0523V18.0156H16.5523V17.5156ZM28.7923 17.5156V18.0156H29.2923V17.5156H28.7923ZM28.7923 14.8516H29.2923V14.3516H28.7923V14.8516ZM20.6563 14.8516L20.2164 14.6138L19.8175 15.3516H20.6563V14.8516ZM16.9843 6.37962H16.4843V6.87962H16.9843V6.37962ZM20.4883 6.37962V6.87962H20.9883V6.37962H20.4883ZM16.5523 18.0156H28.7923V17.0156H16.5523V18.0156ZM29.2923 17.5156V14.8516H28.2923V17.5156H29.2923ZM28.7923 14.3516H20.6563V15.3516H28.7923V14.3516ZM21.0961 15.0895C21.4856 14.369 22.1422 13.7192 22.9586 13.0718C23.7855 12.4159 24.692 11.824 25.6164 11.1483C27.3906 9.85111 29.1723 8.28814 29.1723 5.89962H28.1723C28.1723 7.73511 26.8219 9.02814 25.0262 10.341C24.1655 10.9702 23.1775 11.6218 22.3372 12.2882C21.4863 12.9631 20.7029 13.7142 20.2164 14.6138L21.0961 15.0895ZM29.1723 5.89962C29.1723 3.90555 28.1942 2.56811 26.906 1.75135C25.6413 0.949527 24.0833 0.647624 22.8403 0.647624V1.64762C23.9492 1.64762 25.3072 1.92172 26.3705 2.5959C27.4103 3.25514 28.1723 4.2937 28.1723 5.89962H29.1723ZM22.8403 0.647624C21.597 0.647624 20.0253 0.949716 18.7485 1.82056C17.4456 2.70925 16.4843 4.17002 16.4843 6.37962H17.4843C17.4843 4.50923 18.275 3.354 19.312 2.64669C20.3752 1.92153 21.7316 1.64762 22.8403 1.64762V0.647624ZM16.9843 6.87962H20.4883V5.87962H16.9843V6.87962ZM20.9883 6.37962C20.9883 5.91474 21.1083 5.45714 21.3774 5.12582C21.6317 4.81271 22.0676 4.55162 22.8403 4.55162V3.55162C21.813 3.55162 21.0729 3.91454 20.6011 4.49543C20.1442 5.05811 19.9883 5.76451 19.9883 6.37962H20.9883ZM22.8403 4.55162C23.6552 4.55162 24.0943 4.81789 24.3345 5.08495C24.5894 5.3684 24.6683 5.7063 24.6683 5.89962H25.6683C25.6683 5.49295 25.5192 4.90685 25.0781 4.4163C24.6222 3.90936 23.8974 3.55162 22.8403 3.55162V4.55162ZM24.6683 5.89962C24.6683 6.63914 24.2595 7.27089 23.4917 7.94681C22.7088 8.63587 21.6884 9.26095 20.57 10.0585C18.3866 11.6155 16.0523 13.6959 16.0523 17.5156H17.0523C17.0523 14.2074 19.0259 12.3878 21.1506 10.8727C22.1861 10.1343 23.3197 9.43038 24.1524 8.69744C25 7.95135 25.6683 7.06811 25.6683 5.89962H24.6683Z"
        fill="currentColor"
      />
    ),
  },
  num_3: {
    viewBox: '0 0 30 19',
    path: (
      <path
        d="M0.558516 9.45162C0.558516 11.8326 1.02292 14.0296 2.13798 15.6456C3.27227 17.2895 5.04494 18.2796 7.51452 18.2796V17.2796C5.35209 17.2796 3.89676 16.4338 2.96106 15.0777C2.00611 13.6937 1.55852 11.7266 1.55852 9.45162H0.558516ZM7.51452 18.2796C9.9728 18.2796 11.7448 17.289 12.8817 15.6461C13.9997 14.0305 14.4705 11.8338 14.4705 9.45162H13.4705C13.4705 11.7255 13.0174 13.6927 12.0594 15.0771C11.1202 16.4343 9.66423 17.2796 7.51452 17.2796V18.2796ZM14.4705 9.45162C14.4705 7.0695 13.9997 4.87828 12.8811 3.26833C11.7437 1.63122 9.97152 0.647624 7.51452 0.647624V1.64762C9.66551 1.64762 11.1213 2.48803 12.0599 3.83891C13.0173 5.21697 13.4705 7.17775 13.4705 9.45162H14.4705ZM7.51452 0.647624C5.04623 0.647624 3.2734 1.6307 2.13851 3.26889C1.0229 4.87924 0.558516 7.07065 0.558516 9.45162H1.55852C1.55852 7.1766 2.00613 5.21601 2.96052 3.83836C3.89563 2.48855 5.3508 1.64762 7.51452 1.64762V0.647624ZM4.94252 9.45162C4.94252 7.94095 5.09454 6.68578 5.50338 5.82267C5.70335 5.40051 5.9565 5.09023 6.26819 4.88331C6.57774 4.6778 6.97893 4.55162 7.51452 4.55162V3.55162C6.8141 3.55162 6.21329 3.71944 5.71509 4.05019C5.21903 4.37952 4.85868 4.84774 4.59965 5.39458C4.09049 6.46947 3.94252 7.9143 3.94252 9.45162H4.94252ZM7.51452 4.55162C8.0501 4.55162 8.45129 4.6778 8.76085 4.88331C9.07253 5.09023 9.32568 5.40051 9.52565 5.82267C9.93449 6.68578 10.0865 7.94095 10.0865 9.45162H11.0865C11.0865 7.9143 10.9385 6.46947 10.4294 5.39458C10.1704 4.84774 9.81 4.37952 9.31394 4.05019C8.81574 3.71944 8.21493 3.55162 7.51452 3.55162V4.55162ZM10.0865 9.45162C10.0865 10.9746 9.93443 12.2359 9.52539 13.1021C9.32534 13.5258 9.07214 13.8366 8.76058 14.0437C8.45116 14.2494 8.0501 14.3756 7.51452 14.3756V15.3756C8.21493 15.3756 8.81587 15.2078 9.31421 14.8765C9.81039 14.5466 10.1707 14.0775 10.4296 13.5291C10.9386 12.4513 11.0865 11.0006 11.0865 9.45162H10.0865ZM7.51452 14.3756C6.97893 14.3756 6.57787 14.2494 6.26846 14.0437C5.95689 13.8366 5.7037 13.5258 5.50364 13.1021C5.0946 12.2359 4.94252 10.9746 4.94252 9.45162H3.94252C3.94252 11.0006 4.09043 12.4513 4.59939 13.5291C4.85834 14.0775 5.21864 14.5466 5.71483 14.8765C6.21316 15.2078 6.8141 15.3756 7.51452 15.3756V14.3756ZM16.5523 12.7876V12.2876H16.0448L16.0523 12.795L16.5523 12.7876ZM19.9363 12.7876L20.4351 12.7538L20.4035 12.2876H19.9363V12.7876ZM21.4723 10.7236H20.9723V11.2236H21.4723V10.7236ZM21.4723 8.05962V7.55962H20.9723V8.05962H21.4723ZM20.2483 5.97162V6.47162H20.7483V5.97162H20.2483ZM17.0563 5.97162H16.5563V6.47162H17.0563V5.97162ZM25.8163 9.09163L25.6392 8.62404L24.4231 9.08467L25.6345 9.55741L25.8163 9.09163ZM16.5523 13.2876H19.9363V12.2876H16.5523V13.2876ZM19.4374 12.8214C19.4934 13.6469 19.8167 14.329 20.4158 14.7937C21.0012 15.2477 21.7899 15.4476 22.6963 15.4476V14.4476C21.9227 14.4476 21.3793 14.2755 21.0287 14.0035C20.6918 13.7422 20.4752 13.3444 20.4351 12.7538L19.4374 12.8214ZM22.6963 15.4476C24.5814 15.4476 25.9563 14.326 25.9563 12.7876H24.9563C24.9563 13.6012 24.2191 14.4476 22.6963 14.4476V15.4476ZM25.9563 12.7876C25.9563 12.0257 25.6027 11.3542 24.898 10.8956C24.2178 10.4529 23.238 10.2236 21.9763 10.2236V11.2236C23.1385 11.2236 23.8988 11.4384 24.3525 11.7337C24.7818 12.0131 24.9563 12.3735 24.9563 12.7876H25.9563ZM21.9763 10.2236H21.4723V11.2236H21.9763V10.2236ZM21.9723 10.7236V8.05962H20.9723V10.7236H21.9723ZM21.4723 8.55962H21.9763V7.55962H21.4723V8.55962ZM21.9763 8.55962C23.0802 8.55962 23.9849 8.33253 24.6286 7.88522C25.2911 7.42481 25.6443 6.75094 25.6443 5.97162H24.6443C24.6443 6.41631 24.4574 6.78644 24.0579 7.06403C23.6396 7.35472 22.9603 7.55962 21.9763 7.55962V8.55962ZM25.6443 5.97162C25.6443 4.40541 24.2408 3.43162 22.6963 3.43162V4.43162C23.8878 4.43162 24.6443 5.13784 24.6443 5.97162H25.6443ZM22.6963 3.43162C21.1312 3.43162 19.7483 4.54254 19.7483 5.97162H20.7483C20.7483 5.24071 21.5253 4.43162 22.6963 4.43162V3.43162ZM20.2483 5.47162H17.0563V6.47162H20.2483V5.47162ZM17.5563 5.97162C17.5563 4.62003 18.1023 3.54943 18.9981 2.80776C19.9028 2.05881 21.193 1.62362 22.6963 1.62362V0.623625C21.0075 0.623625 19.4778 1.11244 18.3604 2.03749C17.2343 2.96982 16.5563 4.32321 16.5563 5.97162H17.5563ZM22.6963 1.62362C24.2123 1.62362 25.5106 2.05934 26.4194 2.79603C27.3196 3.52581 27.8603 4.56664 27.8603 5.85162H28.8603C28.8603 4.25661 28.1769 2.93344 27.0491 2.01922C25.9299 1.11191 24.3962 0.623625 22.6963 0.623625V1.62362ZM27.8603 5.85162C27.8603 6.52128 27.657 7.06905 27.2939 7.51665C26.9256 7.97075 26.3721 8.34641 25.6392 8.62404L25.9934 9.5592C26.8444 9.23684 27.5629 8.7725 28.0706 8.1466C28.5835 7.5142 28.8603 6.74197 28.8603 5.85162H27.8603ZM25.6345 9.55741C27.4575 10.2688 28.3643 11.5038 28.3643 13.0276H29.3643C29.3643 10.9995 28.111 9.45041 25.998 8.62584L25.6345 9.55741ZM28.3643 13.0276C28.3643 14.2415 27.8531 15.2863 26.9087 16.0385C25.9559 16.7975 24.5327 17.2796 22.6963 17.2796V18.2796C24.6998 18.2796 26.3606 17.7537 27.5318 16.8207C28.7114 15.881 29.3643 14.5497 29.3643 13.0276H28.3643ZM22.6963 17.2796C20.8568 17.2796 19.4583 16.8565 18.5237 16.1083C17.6044 15.3723 17.0743 14.2745 17.0522 12.7802L16.0523 12.795C16.0782 14.5408 16.7121 15.939 17.8988 16.889C19.0702 17.8268 20.7198 18.2796 22.6963 18.2796V17.2796Z"
        fill="currentColor"
      />
    ),
  },
  arrow_up_thin: {
    viewBox: '0 0 12 16',
    path: (
      <path
        d="M5.86558 15.1312C5.78799 15.1312 5.73626 15.0795 5.73626 15.0019L5.73626 1.48372C5.7104 1.49666 5.68453 1.50959 5.6716 1.53545L0.731563 6.47549C0.679835 6.52722 0.602243 6.52722 0.550515 6.47549C0.498787 6.42376 0.498787 6.34617 0.550515 6.29444L5.49055 1.3544C5.58108 1.25095 5.72333 1.19922 5.86558 1.19922C6.00783 1.19922 6.15009 1.25095 6.24061 1.3544L11.1677 6.28151C11.2194 6.33324 11.2194 6.41083 11.1677 6.46256C11.116 6.51428 11.0384 6.51428 10.9867 6.46256L6.05956 1.53545C6.0337 1.50959 6.02076 1.49666 5.9949 1.48372L5.9949 15.0019C5.9949 15.0795 5.94317 15.1312 5.86558 15.1312Z"
        fill="#F34181"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ),
  },
  arrow_down_thin: {
    viewBox: '0 0 12 16',
    path: (
      <path
        d="M5.85219 1.20078C5.92979 1.20078 5.98151 1.25251 5.98151 1.3301L5.98151 14.8483C6.00738 14.8354 6.03324 14.8224 6.04617 14.7966L10.9862 9.85654C11.0379 9.80482 11.1155 9.80482 11.1673 9.85654C11.219 9.90827 11.219 9.98586 11.1673 10.0376L6.22722 14.9776C6.1367 15.0811 5.99445 15.1328 5.85219 15.1328C5.70994 15.1328 5.56769 15.0811 5.47716 14.9776L0.550061 10.0505C0.498332 9.9988 0.498332 9.9212 0.550061 9.86947C0.601789 9.81775 0.679381 9.81775 0.731109 9.86947L5.65821 14.7966C5.68408 14.8224 5.69701 14.8354 5.72287 14.8483L5.72287 1.3301C5.72287 1.25251 5.7746 1.20078 5.85219 1.20078Z"
        fill="#F34181"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ),
  },
  moon: {
    viewBox: '0 0 17 17',
    path: (
      <path
        d="M9.58993 0.0806936H9.57765H9.55157C9.41734 0.0638186 9.28234 0.0500118 9.14581 0.0392732C8.91569 0.0131937 8.69632 0.000153924 8.48845 0.000153924C7.33264 -0.00682731 6.18772 0.223738 5.1247 0.677548C4.06169 1.13136 3.10325 1.79874 2.30883 2.63829C1.51441 3.47784 0.900956 4.47166 0.506515 5.5581C0.112075 6.64455 -0.0549393 7.80045 0.0158318 8.95411C0.0866028 10.1078 0.39365 11.2346 0.917928 12.2647C1.44221 13.2948 2.17253 14.2062 3.06361 14.9423C3.95469 15.6785 4.98752 16.2237 6.09804 16.5442C7.20855 16.8646 8.37307 16.9535 9.51936 16.8053C9.6045 16.7946 9.68888 16.78 9.77325 16.767C10.0463 16.7245 10.3145 16.6698 10.5779 16.6028C10.6469 16.5852 10.7159 16.5691 10.7842 16.5491C11.4471 16.3616 12.0842 16.0929 12.6811 15.7491C12.7317 15.7207 12.7801 15.6885 12.8299 15.6586C13.0778 15.5094 13.3177 15.3473 13.5486 15.1731C13.6016 15.1332 13.656 15.0964 13.7082 15.0542C13.9775 14.8426 14.2336 14.6149 14.4752 14.3723C14.4844 14.3638 14.4913 14.3546 14.4998 14.3454C14.7255 14.1135 14.9378 13.869 15.1357 13.6129C15.1878 13.5454 15.2377 13.4779 15.2891 13.4089C15.4622 13.1736 15.6227 12.9293 15.77 12.6771C15.7899 12.6433 15.8153 12.6134 15.8344 12.5789C15.839 12.5712 15.8406 12.5628 15.8444 12.5551C16.5194 11.3543 16.8895 10.0061 16.9221 8.62896C16.9547 7.25178 16.6489 5.88763 16.0315 4.65617C15.414 3.42472 14.5039 2.36358 13.3808 1.56585C12.2577 0.768112 10.956 0.25815 9.58993 0.0806936ZM1.58505 8.43764C1.58505 8.20139 1.59732 7.96821 1.62034 7.7381C1.62877 7.66139 1.64488 7.58469 1.65562 7.50798C1.67556 7.35458 1.69397 7.2073 1.72389 7.06003C1.74306 6.96722 1.77068 6.87747 1.79292 6.7862C1.82514 6.6581 1.85275 6.52924 1.89187 6.40267C1.92102 6.30756 1.9586 6.21628 1.99235 6.12347C2.03454 6.00611 2.06906 5.88722 2.12045 5.77293C2.16033 5.67858 2.20789 5.58884 2.25161 5.49603C2.30301 5.38864 2.35056 5.27895 2.40502 5.17463C2.45488 5.08182 2.51164 4.99438 2.5661 4.90387C2.62056 4.81336 2.68193 4.70444 2.74559 4.60856C2.80925 4.51268 2.86985 4.43827 2.93275 4.35313C2.99565 4.26799 3.06545 4.16827 3.13755 4.08006C3.20965 3.99185 3.27792 3.92052 3.34925 3.84151C3.42059 3.76251 3.49729 3.67123 3.57937 3.59069C3.66144 3.51015 3.73278 3.44495 3.80948 3.37285C3.88618 3.30075 3.97286 3.21944 4.05954 3.14273C4.14621 3.06603 4.22829 3.01157 4.31343 2.94637C4.39857 2.88117 4.49062 2.8083 4.58343 2.74464C4.67624 2.68097 4.76368 2.62958 4.85419 2.57359C4.94471 2.51759 5.04596 2.45163 5.1449 2.3964C5.24385 2.34117 5.33436 2.29975 5.42948 2.25296C5.52459 2.20617 5.63505 2.14865 5.7409 2.09955C5.84675 2.05046 5.93803 2.02285 6.03774 1.98373C6.13746 1.94461 6.25558 1.89936 6.36757 1.8633C6.46806 1.83032 6.57161 1.80424 6.67439 1.77663C6.78945 1.74518 6.9045 1.71296 7.02109 1.68688C7.12465 1.66464 7.2305 1.6493 7.33558 1.63089C7.45601 1.61095 7.57567 1.58947 7.69839 1.57566C7.80425 1.56339 7.9124 1.55802 8.01902 1.55112C8.1103 1.54498 8.20234 1.53961 8.29516 1.53731C7.86677 2.63463 7.67332 3.8096 7.72729 4.98634C7.78127 6.16307 8.08147 7.3154 8.6085 8.3689C9.13554 9.4224 9.87769 10.3536 10.787 11.1024C11.6964 11.8513 12.7527 12.401 13.8877 12.7162L13.8693 12.7408C13.5551 13.1333 13.1991 13.4906 12.8077 13.8062L12.7471 13.8507C12.5737 13.9872 12.3942 14.1161 12.2101 14.2342C12.1695 14.2603 12.1273 14.2848 12.0859 14.3109C11.9164 14.4145 11.743 14.5119 11.5651 14.6008C11.5152 14.6262 11.4653 14.6499 11.4117 14.6729C11.2368 14.7558 11.0588 14.8264 10.8747 14.8969C10.8195 14.9176 10.765 14.9383 10.7098 14.9575C10.5296 15.0196 10.3455 15.0718 10.1598 15.1186C10.1008 15.1339 10.0425 15.1508 9.98342 15.1646C9.79473 15.2068 9.5999 15.2375 9.40967 15.2643C9.35138 15.272 9.29461 15.2843 9.23632 15.2904C8.27265 15.3983 7.29705 15.3015 6.37341 15.0062C5.44977 14.7109 4.59892 14.2238 3.87659 13.5769C3.15426 12.9299 2.57673 12.1377 2.18183 11.2521C1.78693 10.3664 1.58356 9.40734 1.58505 8.43764ZM14.7399 11.3478C13.7206 11.1398 12.762 10.7025 11.9367 10.0691C11.1115 9.43565 10.4413 8.62267 9.97687 7.69178C9.51245 6.76088 9.26603 5.73648 9.25626 4.69621C9.2465 3.65594 9.47366 2.6271 9.92052 1.68765C10.9374 1.90071 11.8929 2.34118 12.7154 2.97605C13.5378 3.61092 14.2059 4.42371 14.6696 5.3535C15.1332 6.2833 15.3804 7.30598 15.3925 8.3449C15.4047 9.38381 15.1816 10.412 14.7399 11.3524V11.3478Z"
        fill="currentColor"
      />
    ),
  },
  keeper: {
    viewBox: '0 0 165 165',
    path: (
      <g>
        <circle cx="82.7254" cy="82.1766" r="25.5145" stroke="#CFC3CF" />
        <circle cx="82.7256" cy="82.1768" r="81.6768" stroke="#CFC3CF" />
        <mask id="path-3-inside-1" fill="white">
          <path d="M29.3424 82.1766C29.3424 89.187 30.7232 96.1287 33.406 102.605C36.0888 109.082 40.0209 114.967 44.978 119.924C49.9351 124.881 55.82 128.813 62.2968 131.496C68.7735 134.179 75.7153 135.56 82.7257 135.56C89.736 135.56 96.6778 134.179 103.155 131.496C109.631 128.813 115.516 124.881 120.473 119.924C125.43 114.967 129.363 109.082 132.045 102.605C134.728 96.1287 136.109 89.187 136.109 82.1766L107.976 82.1766C107.976 85.4925 107.323 88.776 106.054 91.8396C104.785 94.9031 102.925 97.6867 100.581 100.031C98.2358 102.376 95.4522 104.236 92.3887 105.505C89.3251 106.774 86.0416 107.427 82.7257 107.427C79.4097 107.427 76.1262 106.774 73.0627 105.505C69.9991 104.236 67.2155 102.376 64.8708 100.031C62.526 97.6867 60.6661 94.9031 59.3971 91.8396C58.1282 88.776 57.475 85.4925 57.475 82.1766L29.3424 82.1766Z" />
        </mask>
        <path
          d="M29.3424 82.1766C29.3424 89.187 30.7232 96.1287 33.406 102.605C36.0888 109.082 40.0209 114.967 44.978 119.924C49.9351 124.881 55.82 128.813 62.2968 131.496C68.7735 134.179 75.7153 135.56 82.7257 135.56C89.736 135.56 96.6778 134.179 103.155 131.496C109.631 128.813 115.516 124.881 120.473 119.924C125.43 114.967 129.363 109.082 132.045 102.605C134.728 96.1287 136.109 89.187 136.109 82.1766L107.976 82.1766C107.976 85.4925 107.323 88.776 106.054 91.8396C104.785 94.9031 102.925 97.6867 100.581 100.031C98.2358 102.376 95.4522 104.236 92.3887 105.505C89.3251 106.774 86.0416 107.427 82.7257 107.427C79.4097 107.427 76.1262 106.774 73.0627 105.505C69.9991 104.236 67.2155 102.376 64.8708 100.031C62.526 97.6867 60.6661 94.9031 59.3971 91.8396C58.1282 88.776 57.475 85.4925 57.475 82.1766L29.3424 82.1766Z"
          stroke="#CFC3CF"
          strokeWidth="2"
          mask="url(#path-3-inside-1)"
        />
      </g>
    ),
  },
  wireframeGlobe: {
    viewBox: '0 0 165 165',

    path: (
      <g>
        <circle cx="82.4644" cy="82.7481" r="81.752" stroke="currentColor" />
        <path
          d="M164.216 82.7484C164.216 86.793 162.023 90.7066 157.922 94.3262C153.822 97.9452 147.86 101.227 140.451 103.993C125.635 109.525 105.134 112.956 82.4644 112.956C59.795 112.956 39.294 109.525 24.4783 103.993C17.0687 101.227 11.1071 97.9452 7.00705 94.3262C2.90625 90.7066 0.712402 86.793 0.712402 82.7484C0.712402 78.7038 2.90625 74.7902 7.00705 71.1706C11.1071 67.5516 17.0687 64.2697 24.4783 61.5034C39.294 55.9723 59.795 52.541 82.4644 52.541C105.134 52.541 125.635 55.9723 140.451 61.5034C147.86 64.2697 153.822 67.5516 157.922 71.1706C162.023 74.7902 164.216 78.7038 164.216 82.7484Z"
          stroke="currentColor"
        />
        <path
          d="M82.465 164.5C78.4204 164.5 74.5067 162.306 70.8871 158.205C67.2682 154.105 63.9863 148.144 61.22 140.734C55.6888 125.919 52.2576 105.418 52.2576 82.7481C52.2576 60.0787 55.6888 39.5776 61.22 24.762C63.9863 17.3523 67.2682 11.3908 70.8871 7.29074C74.5067 3.18994 78.4204 0.996092 82.465 0.996092C86.5095 0.996093 90.4232 3.18994 94.0428 7.29074C97.6618 11.3908 100.944 17.3523 103.71 24.762C109.241 39.5776 112.672 60.0787 112.672 82.7481C112.672 105.418 109.241 125.919 103.71 140.734C100.944 148.144 97.6618 154.105 94.0428 158.205C90.4232 162.306 86.5095 164.5 82.465 164.5Z"
          stroke="currentColor"
        />
      </g>
    ),
  },
  codeCanvas: {
    viewBox: '0 0 255 256',
    path: (
      <g>
        <rect
          x="0.919922"
          y="1.14648"
          width="253.441"
          height="253.441"
          fill="none"
          stroke="currentColor"
        />
        <line x1="0.419922" y1="28.2744" x2="254.861" y2="28.2744" stroke="currentColor" />
        <circle cx="16.0038" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
        <circle cx="35.3685" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
        <circle cx="53.64" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
      </g>
    ),
  },
  shape_1: {
    viewBox: '0 0 100 80',
    path: (
      <g>
        <mask id="path-2-inside-1" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3142 18.4609V79.9994H77.8521C77.8521 79.9993 77.8521 79.9992 77.8521 79.999C77.8521 46.0126 50.3006 18.4611 16.3142 18.4609Z"
          />
        </mask>
        <path
          d="M16.3142 18.4609H15.3142V17.4609L16.3142 17.4609L16.3142 18.4609ZM16.3142 79.9994V80.9994H15.3142V79.9994H16.3142ZM77.8521 79.9994H78.8521V80.9994H77.8521V79.9994ZM17.3142 18.4609V79.9994H15.3142V18.4609H17.3142ZM16.3142 78.9994H77.8521V80.9994H16.3142V78.9994ZM76.8521 79.9994C76.8521 79.9993 76.8521 79.9993 76.8521 79.9992C76.8521 79.9992 76.8521 79.9991 76.8521 79.999H78.8521C78.8521 79.9991 78.8521 79.9992 78.8521 79.9992C78.8521 79.9993 78.8521 79.9993 78.8521 79.9994H76.8521ZM76.8521 79.999C76.8521 46.5649 49.7483 19.4611 16.3142 19.4609L16.3142 17.4609C50.8529 17.4611 78.8521 45.4603 78.8521 79.999H76.8521Z"
          fill="currentColor"
          mask="url(#path-2-inside-1)"
        />
        <circle
          cx="77.082"
          cy="22.3076"
          r="21.8076"
          stroke="currentColor"
          fill="currentColor"
          fillOpacity="0"
        />
      </g>
    ),
  },
  security: {
    viewBox: '0 0 268 263',
    path: (
      <g>
        <mask id="path-1-inside-1" fill="currentColor">
          <path d="M134.012 0.754419C107.547 0.754418 81.6757 8.438 59.6706 22.8335C37.6654 37.229 20.5145 57.6899 10.3867 81.6288C0.258826 105.568 -2.39108 131.909 2.77204 157.323C7.93518 182.736 20.6795 206.08 39.3933 224.402C58.1071 242.724 81.95 255.201 107.907 260.256C133.864 265.311 160.769 262.717 185.219 252.801C209.67 242.885 230.569 226.093 245.272 204.549C259.975 183.005 267.823 157.675 267.823 131.764L134.012 131.764L134.012 0.754419Z" />
        </mask>
        <path
          d="M134.012 0.754419C107.547 0.754418 81.6757 8.438 59.6706 22.8335C37.6654 37.229 20.5145 57.6899 10.3867 81.6288C0.258826 105.568 -2.39108 131.909 2.77204 157.323C7.93518 182.736 20.6795 206.08 39.3933 224.402C58.1071 242.724 81.95 255.201 107.907 260.256C133.864 265.311 160.769 262.717 185.219 252.801C209.67 242.885 230.569 226.093 245.272 204.549C259.975 183.005 267.823 157.675 267.823 131.764L134.012 131.764L134.012 0.754419Z"
          stroke="currentColor"
          strokeWidth="2"
          mask="url(#path-1-inside-1)"
          fillOpacity="0"
        />
        <path
          d="M134.512 66.6809C134.512 102.339 164.04 131.264 200.487 131.264C236.934 131.264 266.462 102.339 266.462 66.6809C266.462 31.0225 236.934 2.09766 200.487 2.09766C164.04 2.09766 134.512 31.0225 134.512 66.6809Z"
          stroke="currentColor"
          fillOpacity="0"
        />
        <path
          d="M202.718 39.6152C227.969 39.6152 255.325 54.0505 265.846 61.2681C260.426 72.0945 240.212 93.7473 202.718 93.7473C165.224 93.7473 142.46 72.0945 135.764 61.2681C147.561 54.0505 177.467 39.6152 202.718 39.6152Z"
          stroke="currentColor"
          fillOpacity="0"
        />
        <path
          d="M174.568 66.6813C174.568 81.3434 186.711 93.2473 201.713 93.2473C216.715 93.2473 228.858 81.3434 228.858 66.6813C228.858 52.0192 216.715 40.1152 201.713 40.1152C186.711 40.1152 174.568 52.0192 174.568 66.6813Z"
          stroke="currentColor"
          fillOpacity="0"
        />
      </g>
    ),
  },
};

const theme = {
  ...makerTheme,
  useColorSchemeMediaQuery: true,

  icons,

  colors: {
    ...makerTheme.colors,

    modes: {
      dark: {
        background: '#3E113F',
        surface: '#340F35',
        // surface: '#ffffff08',
        text: '#EAEBF0',
        textMuted: '#907B90',
        // text: '#fffff0',
        onBackground: '#EAEBF0',
        primary: '#F34181',
        primaryEmphasis: '#F34181F2',
        primaryMuted: '#F34181E6',
        primaryAlt: '#F34181D9',

        // primary: '#F012BE',
        muted: '#694769',
        // muted: '#ffffff08',
        mutedAlt: '#694769',
        onBackgroundAlt: '#EAEBF0',
        // onBackgroundAlt: '#e1dfec',
        onBackgroundMuted: '#CFC3CF',
        onSurface: '#ABA8bc',
      },
    },
  },

  fonts: {
    body: 'Inconsolata, sans-serif',
    heading:
      "'FT Base',-apple-system,system-ui,BlinkMacSystemFont,'SF Pro Text','Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    monospace: 'monospace',
  },

  text: {
    ...makerTheme.text,
    megaHeading: {
      variant: 'text.heading',
      fontSize: [8, 10],
    },
    largeText: {
      fontSize: 4,
      color: 'text',
    },
    caps: {
      ...makerTheme.text.caps,
      fontFamily: 'FT Base',
      fontWeight: 'body',
    },
  },

  links: {
    ...makerTheme.links,
    nav: {
      ...makerTheme.links.nav,
      fontFamily: 'heading',
    },
    sidebar: {
      variant: 'links.nav',
      fontSize: 1, // DELETE if not needed
    },
    infobar: {
      variant: 'links.nav',
      color: 'onBackgroundMuted',
      fontSize: 1,
      '&:hover': {
        color: 'text',
      },
      // '&:active': {
      //   color: 'text',
      // },
      '&:focus': {
        color: 'text',
      },
    },
  },
  cards: {
    primary: {
      ...makerTheme.cards.primary,
      border: '',
    },
  },
  buttons: {
    ...makerTheme.buttons,
    contrastButtonSmall: {
      variant: 'buttons.small',
      bg: 'onBackgroundAlt',
      color: 'background',
      '&:hover': {
        bg: 'primary',
        color: 'onPrimary',
      },
      '&:active': {
        bg: 'primary',
        color: 'onPrimary',
      },
    },
  },
  forms: {
    ...makerTheme.forms,
    contrastTextarea: {
      color: 'background',
      bg: 'onBackgroundAlt',
    },
    select: {
      color: 'primary',
      fontWeight: 'bold',
      border: 'none',
      borderColor: (theme) => `transparent transparent ${theme.colors.text} transparent`,
      '&:focus': {
        color: 'primary',
        borderColor: 'transparent',
        outline: 'none',
      },
    },
  },
  images: {
    ...makerTheme.images,
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 99999,
    },
  },
  styles: {
    ...makerTheme.styles,
    fakeLi: {
      listStyle: 'none',
    },

    h1: {
      ...makerTheme.styles.h1,
      mt: 4,
    },

    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:hover': {
        color: 'primaryEmphasis',
      },
    },
    ul: {
      pl: 4,
    },
    pre: {
      bg: 'background',
    },
    code: {
      ...makerTheme.styles.code,
      p: 0,
      m: 0,
    },
    // applies to single-backticks
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: 3,
      bg: 'primaryMuted',
      color: 'primaryAlt',
      px: 1,
    },
  },
};

export default theme;
