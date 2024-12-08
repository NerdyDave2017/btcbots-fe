import { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<any>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 12L3.99998 11.9998"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Checkmark = (props: SVGProps<any>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.93555 15.3828C5.93555 15.3828 7.43555 15.3828 9.43555 18.8828C9.43555 18.8828 14.9944 9.71615 19.9355 7.88281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const HowBar = (props: SVGProps<any>) => {
  return (
    <svg
      width="58"
      height="5"
      viewBox="0 0 58 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.382812" width="23.9941" height="4" rx="2" fill="#006FE3" />
      <rect
        x="27.9941"
        y="0.382812"
        width="12.9941"
        height="4"
        rx="2"
        fill="#8FB8E3"
      />
      <rect
        x="44.9883"
        y="0.382812"
        width="12.9941"
        height="4"
        rx="2"
        fill="#8FB8E3"
      />
    </svg>
  );
};
export const HeroCurrencies = (props: SVGProps<any>) => {
  return (
    <svg
      width="141"
      height="50"
      viewBox="0 0 141 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        x="1.17188"
        y="11.2031"
        width="34"
        height="34"
        rx="17"
        fill="url(#pattern0_0_1)"
        stroke="#EBEEF1"
        stroke-width="2"
      />
      <rect
        x="27.1719"
        y="11.2031"
        width="34"
        height="34"
        rx="17"
        fill="url(#pattern1_0_1)"
        stroke="#EBEEF1"
        stroke-width="2"
      />
      <rect
        x="53.1719"
        y="11.2031"
        width="34"
        height="34"
        rx="17"
        fill="url(#pattern2_0_1)"
        stroke="#EBEEF1"
        stroke-width="2"
      />
      <g filter="url(#filter0_dd_0_1)">
        <rect
          x="78.1719"
          y="10.2031"
          width="36"
          height="36"
          rx="18"
          fill="url(#pattern3_0_1)"
        />
        <rect
          x="79.1719"
          y="11.2031"
          width="34"
          height="34"
          rx="17"
          stroke="#EBEEF1"
          stroke-width="2"
        />
      </g>
      <rect
        x="105.172"
        y="11.2031"
        width="34"
        height="34"
        rx="17"
        fill="url(#pattern4_0_1)"
        stroke="#EBEEF1"
        stroke-width="2"
      />
      <defs>
        <pattern
          id="pattern0_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_1" transform="scale(0.015625)" />
        </pattern>
        <pattern
          id="pattern1_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image1_0_1" transform="scale(0.015625)" />
        </pattern>
        <pattern
          id="pattern2_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image2_0_1" transform="scale(0.0078125)" />
        </pattern>
        <filter
          id="filter0_dd_0_1"
          x="60.1719"
          y="0.203125"
          width="72"
          height="72"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="6"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_0_1"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern3_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image3_0_1" transform="scale(0.0078125)" />
        </pattern>
        <pattern
          id="pattern4_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image4_0_1" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_0_1"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
        <image
          id="image1_0_1"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEVHcEwA/wAmoXsAAAAAf38loHoAolUA//8moXomoHoAqqpVqqoloXomoXo/v38loXsAf38moHoloHomoHsloXsmoXomoXkloHolonslonkmoHsmo3wmn3kkoXs/f38mpH0mo3wloXsloXsloHkmonslonsmo30npX0mn3omo30lnXknp38moXwloHompH0non0moXsmoXkloXsmoXolonsloXsAAEcno34mpX0mpX4loHoloXwmo30mm3kAAP8ln3ompX4moHoknXkloXsknXcinHkloXsnpH0monsmoXsno30onnomoXsmo30moHomonomoXszmWYmoHoAmWYmoHompX4mpH4mpH0non0ko3YkmnYmoHomoXv///8pon39/v4oonwYm3P8/v0noXx3xKz+//4joHkin3nu+PUprYQloHrZ7uja7+k3qIUmonwoqIAbnHQop4Ano30VmnEoqYEprIMnoXsZm3MkoHononwcnXUXm3IproUprIQloXoanHT8/f0gn3gmo3wUmXAfnncennYproQoqoHY7ugdnXYhn3ggnnf5/PyJzLcXmnIro34pq4MnpH1Zt5r+/v4np38npX4npn8loXsin3jt+PT7/fz2+/o+rIrf8eszp4SU0b4spH9BrYwoq4IorIO239JauJu139Inp4BbuJt1xKwenXbK6N8loHvh8u1NspNxwahzw6o5qYfq9vM4qYZJsJCGy7WDyrQ2qIV7xq+74dZMsZKMzbkoon3S6+TU7OXb7+lPs5WOzronqIBnvaJvwaji8u4upYBUtpjd8Os2qIQpo307qoiu3M5nvaP1+/kqo32Nzbry+feV0b+/49gpon5kvKFRtJWPz7tqv6WT0L5ovqREro1twKd5xa4vpYBywqkypoJHsJCAyLKT0L0pq4LZ7+ic1MP9/v3a7+jX7uf5/ft4xK2Qz7t+x7Aponyz3tHk8+9gup6Z08HO6eHH593v+PYmoXzs9/Sr2sy44NSi18YAjmDx+fbD5dqn2coAkGT9IPnsAAAAXHRSTlMAAf4BAvsDAf3+AwP79wT6BP2Q/F26YvztFv6OKCkE9Ybqjvut+vz9a/4X/nfY00HVP9H4qagCbef0h4+nLgGOv/sVxGAsx+vv/OoZeHjq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"
        />
        <image
          id="image2_0_1"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
        <image
          id="image3_0_1"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC91BMVEUAAAD4lBr3lBv3kxr/qiv/v0D3lBv4kxr4kxv/mxv3lBv/lSv4lhz4kxr4lBv3lxv3lRv4kxv4lBr6lhv4lRz3lBv3lyD5lBv4kxv6kx34kxr4lBr3kxv6lBz/nSf4lBr//4D3kxr4lhv4lBr7lB34lBr7lh33lBr4kxr3kxv/nyD4kxv/lyP/lRr3lBv4lBv6lRv3lBv4lBv4lBv4kxr/lCH4lBr4lBr3lBv6lBv/niT3kxr////+/v3+/fz5uWr3lBz3kxv4p0X++vX837z71KT97975sVr3lB3+/v74qUj3mCX83bj4pUD+8+f5sVv3myz7zJP5s175tGD++/b7zZX6wn/97dn97936xIP4ojr3mCT3mSf3liL++vb4pD/5rlX82a/6wn797tv6xof84sH4qUn827L5r1b4pkT7z5r+8uT83LX969b958z++/f+9+/6wn36xIL+9u34ojv6wHr97Nj3njL6xob5s1/3lR73lR/+/fv++fL6x4n83bf95cn4p0b6vHL4pkP7zpf4pkL3min6yIv+/Pn5uWz6w4D95sr6v3n97Nf5tWL4qkz848T84sL+9uz4qkv3nC36xYX95836vnX848P6vXP++fT83rn96dL81qn4oDb96M/7zpj+9ev70qH7z5v3lSD+8+b5uGn6wXv97tz71KX96tL3lyL827P96M771ab5tmX84L/4qUr70qD3njH7z5n4q074q03++PH+8eP6xYT84L798N/++PD6u3D71af96tP70Z784cH5slz969T5t2b706P6w4H3mCb96dH5r1f5rlP5tGH4rFD84L34qEf4oTn6x4r++fP3mir3myv5sl33nS/5um73mSj70Jz3nC77y5L4pUH84cD5sFf7yo7+9Oj3nTD5um3816r95Mf7zJT95Mb+9+783rr82Kz969X4rE/98eH4oDf6x4j4rVH82K398eL7zZb5sVn+9On3liH3njP3lyP82K76vXT837v5uWv+/Pr4qEaA3nGYAAAAO3RSTlMA/uzCBgTGudocqQxJ+9JChPnMOItDIHy7NK/f7TcNiALES/M+1D3piagQlRYdhtlexayrdB91uIVfFSGgzMAAAAaaSURBVHhexdtldxvJEgbgEhriGLKG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"
        />
        <image
          id="image4_0_1"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADQ0lEQVR4XtXZMW4UQRCFYY7AEZyZC3ABTsAFOAEJiSVHhKQEJISkXAGRI5AQQrLkAAmRmBCcEBAZjYVX8rdV3bUzs7PjX/qTfa97unqN2LXv3VuI45OPP45PPl0VvXT9nSMYapLuv1o8+Nz6vFWw44/3XK7jn0lwsEX1PIvhQQ6t59srPnwtes7Z8YFr1XPPgg9Zu55/Em6+q6dvv2+91vPxy7Orh88/b72+i84xCjetKuY9xbyq8+yEm1XMsNczw15F5yrjRi3fn/32rLew37PF+c8/W/2WzlXCTVr2sF+1h/2WztfExS1b2B1rC7stnTPFhZkZ9uYyw16mc4a4KDPDXqaYZ2bYy3TeW1S/1WXYaynmLTPsZTr3BouRGfZ6innPDHuRzr3BYmSEnYpiXjHCTuTRsy/3nX3R4aO9zKtG2Il0/lEXYN6ziut6innk5OEH7GSOwT1aRtiJnHQB5i3H4j4txTyyfAERdjIj7GTdJ6/PtzqZEXZ09AWYtxRzFfOWYq7/h+9/+BHzzOEdFDsq5i3FPLL77j998819tzqZr95duHSrM6cyfEW3o90LEPOeYj63Yq6LX8AN9uZSzPVgFxDh2jGKue79AqI9KrhHVTHXRS4g26uH6yuKuS56ATcOv/Ov4tqeYq4HuYDIi19/fdQ19nqKua7mAm6MsNNSzHV1FxD9fcFOSzHX4QIufVHFPFPMM8U8U8wj9/plSMwjI+xkirnu/dtghB0V85ZirqMvYMBOZoSdMV2NsKPlCxgU88xd/s8X92op5pGbC6hcQoSdlrvi+pYRdvTW8JULGBTznhVcU1HMI53/GksaYaeqmFeNsKMPTj8cOfs1FiMj7FQU84oRdiKde8Nx4UPRYISdnmLeM8JOpnPfwnJkhr2WYt4yw16k84a4KDLD3txm2IsM/yga4cLMFnan2sJupnM2cXFmD/u72sN+pvOVcJOWPez37PHoxdetNZnOVcaNeraw27OF3Z7OtRNuVjHCTs8IOxWdZxRuWnXK4aesvdE5JuHma9fzz4IPWauee3Z84Fr0nHvFhx9az7cYHmRpyx9v94mHWkrPcXCGd8NDzm36y4y14cGn6v53Dgfq6fp98Q/twpmau6HU4QAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};
export const SleepDollar = (props: SVGProps<any>) => {
  return (
    <svg
      width="59"
      height="62"
      viewBox="0 0 59 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.6836 20.5363C23.0258 20.4709 22.3586 20.4375 21.6836 20.4375C10.6379 20.4375 1.68359 29.3918 1.68359 40.4375C1.68359 51.4832 10.6379 60.4375 21.6836 60.4375C32.7293 60.4375 41.6836 51.4832 41.6836 40.4375C41.6836 39.0676 41.5459 37.7299 41.2835 36.4375"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.6836 38.4375H15.0978C14.1923 38.4375 13.3239 38.0778 12.6836 37.4375M25.6836 38.4375H28.2694C29.1749 38.4375 30.0433 38.0778 30.6836 37.4375"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="21.6836"
        cy="48.4375"
        r="4"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip0_4320_6258)">
        <path
          d="M52.1352 10.6714C52.5187 8.80117 50.4844 6.80413 47.5914 6.21089C44.6984 5.61764 42.0423 6.65282 41.6587 8.52304C41.2752 10.3933 42.4921 11.7186 46.3017 12.4998C50.1114 13.281 51.8178 14.6391 51.3218 17.0579C50.8257 19.4767 48.0689 19.9196 44.9129 19.2724C41.7569 18.6252 39.5094 16.5845 39.8929 14.7143"
          stroke="#141B34"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M47.9258 4.57812L44.5777 20.905"
          stroke="#141B34"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g clip-path="url(#clip1_4320_6258)">
        <path
          d="M36.0589 22.9401C35.8461 21.8146 34.2622 21.169 32.5211 21.4982C30.78 21.8274 29.5411 23.0067 29.754 24.1322C29.9668 25.2578 30.944 25.7165 33.2367 25.283C35.5294 24.8495 36.7859 25.215 37.0611 26.6707C37.3364 28.1264 35.9067 28.9998 34.0074 29.3589C32.108 29.718 30.3958 29.0967 30.183 27.9712"
          stroke="#141B34"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M32.3359 20.5156L34.1938 30.3415"
          stroke="#141B34"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4320_6258">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(38.4648 0.9375) rotate(11.5887)"
          />
        </clipPath>
        <clipPath id="clip1_4320_6258">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(26.2539 20.6445) rotate(-10.7069)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Discount = (props: SVGProps<any>) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.2885 5.9375C12.9745 6.059 9.87058 6.56662 7.74985 8.68735C5.62912 10.8081 5.1215 13.912 5 19.226M29.7115 5.9375C35.0255 6.059 38.1294 6.56662 40.2501 8.68735C42.3709 10.8081 42.8785 13.912 43 19.226M29.7115 43.9375C35.0255 43.816 38.1294 43.3084 40.2501 41.1876C42.3709 39.0669 42.8785 35.963 43 30.6489M18.2885 43.9375C12.9745 43.816 9.87058 43.3084 7.74985 41.1876C5.62912 39.0669 5.1215 35.963 5 30.649"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.9996 16.9375H16.0176"
        stroke="#090909"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.9996 32.9375H32.0176"
        stroke="#090909"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 32.9375L32 16.9375"
        stroke="#090909"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const MoneyNotFound = (props: SVGProps<any>) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 26.9375L11 26.9555"
        stroke="#090909"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37 22.9219L37 22.9398"
        stroke="#090909"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36 38.0335C36 38.0335 34.1476 38.0335 33.0909 38.0335C29.373 38.0335 25.9783 38.7707 23.3939 39.9855C20.8096 41.2004 17.4149 41.9375 13.697 41.9375C11.6297 41.9375 9.66242 41.7096 7.87879 41.2984C6.73221 41.0341 6.15892 40.9019 5.47197 40.3549C5.08017 40.0428 4.59118 39.4252 4.37647 38.9712C4 38.175 4 37.4031 4 35.8591V14.8322C4 12.9099 6.01703 11.5895 7.87879 12.0187C8.75067 12.2197 9.83801 12.5494 10.7879 12.6576"
        stroke="#090909"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.9997 35.9375V14.1654C43.9997 11.1782 43.1632 9.31686 39.9997 8.59229C38.1603 8.171 36.1316 7.9375 33.9997 7.9375C30.1656 7.9375 26.6648 8.69277 23.9997 9.9375C22.5608 10.6095 20.8471 11.5926 19 11.9375"
        stroke="#090909"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.5355 28.4734C26.6307 29.3782 25.3807 29.9379 24 29.9379C21.2386 29.9379 19 27.6993 19 24.9379C19 23.5572 19.5596 22.3072 20.4645 21.4023"
        stroke="#006FE3"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4 4.9375L44 44.9375"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const Facebook = (props: SVGProps<any>) => {
  return (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.22479 9.71615C1.24703 9.71615 1.04297 9.908 1.04297 10.8273V12.4939C1.04297 13.4132 1.24703 13.605 2.22479 13.605H4.58842V20.2717C4.58842 21.191 4.79248 21.3828 5.77024 21.3828H8.13388C9.11164 21.3828 9.3157 21.191 9.3157 20.2717V13.605H11.9697C12.7113 13.605 12.9023 13.4695 13.106 12.7992L13.6125 11.1325C13.9615 9.98417 13.7465 9.71615 12.4762 9.71615H9.3157V6.93837C9.3157 6.32472 9.84481 5.82726 10.4975 5.82726H13.8611C14.8389 5.82726 15.043 5.63541 15.043 4.71615V2.49392C15.043 1.57466 14.8389 1.38281 13.8611 1.38281H10.4975C7.23401 1.38281 4.58842 3.87012 4.58842 6.93837V9.71615H2.22479Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Instagram = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.54297 10.3828C1.54297 5.90447 1.54297 3.6653 2.93421 2.27406C4.32545 0.882812 6.56463 0.882812 11.043 0.882812C15.5213 0.882812 17.7605 0.882812 19.1517 2.27406C20.543 3.6653 20.543 5.90447 20.543 10.3828C20.543 14.8612 20.543 17.1003 19.1517 18.4916C17.7605 19.8828 15.5213 19.8828 11.043 19.8828C6.56463 19.8828 4.32545 19.8828 2.93421 18.4916C1.54297 17.1003 1.54297 14.8612 1.54297 10.3828Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M15.543 10.3828C15.543 12.8681 13.5283 14.8828 11.043 14.8828C8.55769 14.8828 6.54297 12.8681 6.54297 10.3828C6.54297 7.89753 8.55769 5.88281 11.043 5.88281C13.5283 5.88281 15.543 7.89753 15.543 10.3828Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
      />
      <path
        d="M16.5508 4.88281L16.5418 4.88281"
        stroke="#EBEEF1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TikTok = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.54297 10.3828C1.54297 5.90447 1.54297 3.6653 2.93421 2.27406C4.32545 0.882812 6.56463 0.882812 11.043 0.882812C15.5213 0.882812 17.7605 0.882812 19.1517 2.27406C20.543 3.6653 20.543 5.90447 20.543 10.3828C20.543 14.8612 20.543 17.1003 19.1517 18.4916C17.7605 19.8828 15.5213 19.8828 11.043 19.8828C6.56463 19.8828 4.32545 19.8828 2.93421 18.4916C1.54297 17.1003 1.54297 14.8612 1.54297 10.3828Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M9.43677 10.1607C9.84681 10.2194 10.2268 9.93449 10.2854 9.52446C10.3441 9.11441 10.0592 8.73447 9.64917 8.67581L9.43677 10.1607ZM16.543 8.63281C16.9572 8.63281 17.293 8.29703 17.293 7.88281C17.293 7.4686 16.9572 7.13281 16.543 7.13281V8.63281ZM13.293 4.38281C13.293 3.9686 12.9572 3.63281 12.543 3.63281C12.1288 3.63281 11.793 3.9686 11.793 4.38281H13.293ZM11.793 12.8828C11.793 14.4016 10.5618 15.6328 9.04297 15.6328V17.1328C11.3902 17.1328 13.293 15.23 13.293 12.8828H11.793ZM9.04297 15.6328C7.52419 15.6328 6.29297 14.4016 6.29297 12.8828H4.79297C4.79297 15.23 6.69576 17.1328 9.04297 17.1328V15.6328ZM6.29297 12.8828C6.29297 11.364 7.52419 10.1328 9.04297 10.1328V8.63281C6.69576 8.63281 4.79297 10.5356 4.79297 12.8828H6.29297ZM9.04297 10.1328C9.17709 10.1328 9.30854 10.1424 9.43677 10.1607L9.64917 8.67581C9.4508 8.64744 9.24837 8.63281 9.04297 8.63281V10.1328ZM16.543 7.13281C15.7684 7.13281 14.9353 6.81361 14.2989 6.28204C13.663 5.751 13.293 5.07116 13.293 4.38281H11.793C11.793 5.62746 12.4564 6.69762 13.3373 7.43333C14.2176 8.16851 15.3845 8.63281 16.543 8.63281V7.13281ZM11.793 4.38281V12.8828H13.293V4.38281H11.793Z"
        fill="#EBEEF1"
      />
    </svg>
  );
};

export const YouTube = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.043 17.8828C12.8527 17.8828 14.5881 17.704 16.1964 17.3762C18.2053 16.9667 19.2098 16.7619 20.1264 15.5834C21.043 14.4049 21.043 13.0521 21.043 10.3464V8.41926C21.043 5.71354 21.043 4.36068 20.1264 3.18219C19.2098 2.00369 18.2053 1.79894 16.1964 1.38944C14.5881 1.06159 12.8527 0.882812 11.043 0.882812C9.23328 0.882812 7.49786 1.06159 5.88953 1.38944C3.88063 1.79894 2.87618 2.00369 1.95957 3.18219C1.04297 4.36068 1.04297 5.71354 1.04297 8.41927V10.3464C1.04297 13.0521 1.04297 14.4049 1.95957 15.5834C2.87618 16.7619 3.88063 16.9667 5.88953 17.3762C7.49786 17.704 9.23328 17.8828 11.043 17.8828Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
      />
      <path
        d="M15.0051 9.69569C14.8567 10.3015 14.0671 10.7366 12.4878 11.6069C10.7702 12.5534 9.91141 13.0266 9.21577 12.8443C8.98017 12.7825 8.76317 12.6739 8.58096 12.5266C8.04297 12.0917 8.04297 11.1887 8.04297 9.38281C8.04297 7.57689 8.04297 6.67393 8.58096 6.23899C8.76317 6.09168 8.98017 5.9831 9.21577 5.92135C9.91141 5.73903 10.7702 6.21226 12.4878 7.15874C14.0671 8.02898 14.8567 8.46409 15.0051 9.06994C15.0556 9.27607 15.0556 9.48955 15.0051 9.69569Z"
        stroke="#EBEEF1"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const X = (props: SVGProps<any>) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.04297 19.3828L8.59136 11.8344M19.043 1.38281L11.4946 8.9312M11.4946 8.9312L6.04297 1.38281H1.04297L8.59136 11.8344M11.4946 8.9312L19.043 19.3828H14.043L8.59136 11.8344"
        stroke="#EBEEF1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const SideBarCard = (props: SVGProps<any>) => {
  return (
    <svg
      width="328"
      height="505"
      viewBox="0 0 328 505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.742188"
        y="0.402344"
        width="326.516"
        height="504.427"
        rx="18.6581"
        fill="url(#paint0_linear_4320_6995)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4320_6995"
          x1="164"
          y1="-204.115"
          x2="164"
          y2="411.724"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006FE3" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Mail = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3.5L7.91302 7.42462C10.4387 8.85846 11.5613 8.85846 14.087 7.42462L21 3.5"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 18C9.0337 17.9939 8.56682 17.985 8.09883 17.9732C4.95033 17.8941 3.37608 17.8545 2.24496 16.7184C1.11383 15.5823 1.08114 14.0487 1.01577 10.9814C0.994745 9.99512 0.994745 9.01468 1.01576 8.02843C1.08114 4.96113 1.11382 3.42748 2.24495 2.29139C3.37608 1.1553 4.95033 1.11573 8.09882 1.03658C10.0393 0.987803 11.9607 0.987806 13.9012 1.03659C17.0497 1.11574 18.6239 1.15532 19.755 2.29141C20.8862 3.42749 20.9189 4.96114 20.9842 8.02844C20.9939 8.48251 20.9991 8.69649 20.9999 9"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 15.5C18 16.3284 17.3284 17 16.5 17C15.6716 17 15 16.3284 15 15.5C15 14.6716 15.6716 14 16.5 14C17.3284 14 18 14.6716 18 15.5ZM18 15.5V16C18 16.8284 18.6716 17.5 19.5 17.5C20.3284 17.5 21 16.8284 21 16V15.5C21 13.0147 18.9853 11 16.5 11C14.0147 11 12 13.0147 12 15.5C12 17.9853 14.0147 20 16.5 20"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const EyeOpen = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.63624 18.5766C2.63624 18.5766 5.22797 15.8206 11.1405 9.78988C15.8652 4.97064 20.0234 1 20.0234 1"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20.544 9.04498C20.848 9.4713 21 9.68447 21 10C21 10.3155 20.848 10.5287 20.544 10.955C19.1779 12.8706 15.6892 17 11 17C6.31078 17 2.8221 12.8706 1.45604 10.955C1.15201 10.5287 1 10.3155 1 10C1 9.68447 1.15201 9.47131 1.45604 9.04499C2.8221 7.12944 6.31078 3 11 3C15.6892 3 19.1779 7.12944 20.544 9.04498Z"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
      />
      <path
        d="M14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13C12.6569 13 14 11.6569 14 10Z"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
      />
    </svg>
  );
};
export const EyeClosed = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.63624 18.5766C2.63624 18.5766 5.22797 15.8206 11.1405 9.78988C15.8652 4.97064 20.0234 1 20.0234 1"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20.544 9.04498C20.848 9.4713 21 9.68447 21 10C21 10.3155 20.848 10.5287 20.544 10.955C19.1779 12.8706 15.6892 17 11 17C6.31078 17 2.8221 12.8706 1.45604 10.955C1.15201 10.5287 1 10.3155 1 10C1 9.68447 1.15201 9.47131 1.45604 9.04499C2.8221 7.12944 6.31078 3 11 3C15.6892 3 19.1779 7.12944 20.544 9.04498Z"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
      />
      <path
        d="M14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13C12.6569 13 14 11.6569 14 10Z"
        stroke="#3C3C43"
        stroke-opacity="0.6"
        stroke-width="1.5"
      />
    </svg>
  );
};
export const GoogleIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C16.827 16.8285 14.6115 18.5 12 18.5C8.6865 18.5 6 15.8135 6 12.5C6 9.1865 8.6865 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C6.4775 2.5 2 6.9775 2 12.5C2 18.0225 6.4775 22.5 12 22.5C17.5225 22.5 22 18.0225 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
        fill="#FFC107"
      />
      <path
        d="M3.15234 7.8455L6.43784 10.255C7.32684 8.054 9.47984 6.5 11.9993 6.5C13.5288 6.5 14.9203 7.077 15.9798 8.0195L18.8083 5.191C17.0223 3.5265 14.6333 2.5 11.9993 2.5C8.15834 2.5 4.82734 4.6685 3.15234 7.8455Z"
        fill="#FF3D00"
      />
      <path
        d="M12.0002 22.5003C14.5832 22.5003 16.9302 21.5118 18.7047 19.9043L15.6097 17.2853C14.5721 18.0749 13.3039 18.5017 12.0002 18.5003C9.39916 18.5003 7.19066 16.8418 6.35866 14.5273L3.09766 17.0398C4.75266 20.2783 8.11366 22.5003 12.0002 22.5003Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C17.2571 15.6082 16.5467 16.5766 15.608 17.2855L15.6095 17.2845L18.7045 19.9035C18.4855 20.1025 22 17.5 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
        fill="#1976D2"
      />
    </svg>
  );
};
export const UserIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.57796 15.982C5.16296 16.824 1.45296 18.544 3.71296 20.697C4.81596 21.748 6.04496 22.5 7.58996 22.5H16.408C17.954 22.5 19.183 21.748 20.286 20.697C22.546 18.544 18.836 16.824 17.421 15.982C15.7788 15.0119 13.9063 14.5001 11.999 14.5001C10.0916 14.5001 8.22017 15.0119 6.57796 15.982ZM16.5 7C16.5 8.19347 16.0259 9.33807 15.1819 10.182C14.338 11.0259 13.1934 11.5 12 11.5C10.8065 11.5 9.66189 11.0259 8.81798 10.182C7.97407 9.33807 7.49996 8.19347 7.49996 7C7.49996 5.80653 7.97407 4.66193 8.81798 3.81802C9.66189 2.97411 10.8065 2.5 12 2.5C13.1934 2.5 14.338 2.97411 15.1819 3.81802C16.0259 4.66193 16.5 5.80653 16.5 7Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const HomeIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 15.8828H11.009"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 7.38281V12.3828C19 16.154 19 18.0397 17.8284 19.2112C16.6569 20.3828 14.7712 20.3828 11 20.3828C7.22876 20.3828 5.34315 20.3828 4.17157 19.2112C3 18.0397 3 16.154 3 12.3828V7.38281"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M21 9.38281L16.6569 5.2183C13.9902 2.66131 12.6569 1.38281 11 1.38281C9.34315 1.38281 8.00981 2.66131 5.34315 5.21829L1 9.38281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const ExploreIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.50304 2.88281C5.48421 2.51132 5.55185 2.22438 5.73579 1.98281C6.19267 1.38281 7.12335 1.38281 8.98471 1.38281H11.0153C12.8766 1.38281 13.8073 1.38281 14.2642 1.98281C14.4481 2.22438 14.5158 2.51132 14.497 2.88281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6.88281C3.03784 6.62319 3.12478 6.39874 3.26968 6.19712C3.85493 5.38281 5.0681 5.38281 7.49444 5.38281H12.5056C14.9319 5.38281 16.1451 5.38281 16.7303 6.19712C16.8752 6.39874 16.9622 6.62319 17 6.88281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.81753 14.5956L2.53641 16.8988C3.43193 19.768 4.19729 20.3828 7.21027 20.3828H12.7897C15.8027 20.3828 16.5681 19.768 17.4636 16.8988L18.1825 14.5956C18.9261 12.2131 19.2979 11.0218 18.7101 10.2023C18.1223 9.38281 16.896 9.38281 14.4434 9.38281H5.55662C3.104 9.38281 1.8777 9.38281 1.28988 10.2023C0.702069 11.0218 1.07389 12.2131 1.81753 14.5956Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MyBotsIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 14.8828V12.8828C18 10.0544 18 8.64017 17.1213 7.76149C16.2426 6.88281 14.8284 6.88281 12 6.88281H10C7.17157 6.88281 5.75736 6.88281 4.87868 7.76149C4 8.64017 4 10.0544 4 12.8828V14.8828C4 17.7112 4 19.1255 4.87868 20.0041C5.75736 20.8828 7.17157 20.8828 10 20.8828H12C14.8284 20.8828 16.2426 20.8828 17.1213 20.0041C18 19.1255 18 17.7112 18 14.8828Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M18 16.8828C19.4142 16.8828 20.1213 16.8828 20.5607 16.4435C21 16.0041 21 15.297 21 13.8828C21 12.4686 21 11.7615 20.5607 11.3222C20.1213 10.8828 19.4142 10.8828 18 10.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M4 16.8828C2.58579 16.8828 1.87868 16.8828 1.43934 16.4435C1 16.0041 1 15.297 1 13.8828C1 12.4686 1 11.7615 1.43934 11.3222C1.87868 10.8828 2.58579 10.8828 4 10.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 2.38281C12.5 3.21124 11.8284 3.88281 11 3.88281C10.1716 3.88281 9.5 3.21124 9.5 2.38281C9.5 1.55439 10.1716 0.882812 11 0.882812C11.8284 0.882812 12.5 1.55439 12.5 2.38281Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M11 3.88281V6.88281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 11.8828V12.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 11.8828V12.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 16.3828C9 16.3828 9.66667 16.8828 11 16.8828C12.3333 16.8828 13 16.3828 13 16.3828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const ProfitIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 14.7106C16.9985 20.6388 8.86407 22.3663 4.20143 17.747C-0.370516 13.2175 1.04493 5.01165 7.05653 2.38281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M16.6831 11.3828C18.5708 11.3828 19.5146 11.3828 20.1241 10.5378C20.1469 10.5062 20.1848 10.4496 20.2052 10.4164C20.7527 9.52991 20.4705 8.84881 19.9063 7.4866C19.3946 6.25134 18.6447 5.12897 17.6993 4.18355C16.7538 3.23812 15.6315 2.48817 14.3962 1.97652C13.034 1.41227 12.3529 1.13015 11.4664 1.67758C11.4333 1.69804 11.3766 1.7359 11.345 1.75868C10.5 2.36821 10.5 3.31203 10.5 5.19967V7.31029C10.5 9.2301 10.5 10.19 11.0964 10.7864C11.6928 11.3828 12.6527 11.3828 14.5725 11.3828H16.6831Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
};
export const AffiliateIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 9.88281C3.3317 7.44064 6.64323 7.32565 9 9.88281M7.49509 3.38281C7.49509 4.76352 6.37421 5.88281 4.99153 5.88281C3.60885 5.88281 2.48797 4.76352 2.48797 3.38281C2.48797 2.0021 3.60885 0.882812 4.99153 0.882812C6.37421 0.882812 7.49509 2.0021 7.49509 3.38281Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13 20.8828C15.3317 18.4406 18.6432 18.3256 21 20.8828M19.4951 14.3828C19.4951 15.7635 18.3742 16.8828 16.9915 16.8828C15.6089 16.8828 14.488 15.7635 14.488 14.3828C14.488 13.0021 15.6089 11.8828 16.9915 11.8828C18.3742 11.8828 19.4951 13.0021 19.4951 14.3828Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2 12.8828C2 16.7528 5.13 19.8828 9 19.8828L8 17.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 1.88281H20M14 4.88281H20M14 7.88281H17.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const NotificationIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.15837 10.3738C3.08489 11.7698 3.16936 13.2558 1.92213 14.1912C1.34164 14.6266 1 15.3099 1 16.0355C1 17.0336 1.7818 17.8828 2.8 17.8828H17.2C18.2182 17.8828 19 17.0336 19 16.0355C19 15.3099 18.6584 14.6266 18.0779 14.1912C16.8306 13.2558 16.9151 11.7698 16.8416 10.3738C16.6501 6.73504 13.6438 3.88281 10 3.88281C6.35617 3.88281 3.34988 6.73504 3.15837 10.3738Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 2.00781C8.5 2.83624 9.17157 3.88281 10 3.88281C10.8284 3.88281 11.5 2.83624 11.5 2.00781C11.5 1.17939 10.8284 0.882812 10 0.882812C9.17157 0.882812 8.5 1.17939 8.5 2.00781Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M13 17.8828C13 19.5397 11.6569 20.8828 10 20.8828C8.34315 20.8828 7 19.5397 7 17.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const DataIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="9"
        cy="3.88281"
        rx="8"
        ry="3"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M17 10.8828C17 12.5397 13.4183 13.8828 9 13.8828C4.58172 13.8828 1 12.5397 1 10.8828"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M17 3.88281V17.8828C17 19.5397 13.4183 20.8828 9 20.8828C4.58172 20.8828 1 19.5397 1 17.8828V3.88281"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M5 6.88281V8.88281"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5 13.8828V15.8828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const HelpIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="11"
        cy="10.8828"
        r="10"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M9 7.88281C9 6.77824 9.89543 5.88281 11 5.88281C12.1046 5.88281 13 6.77824 13 7.88281C13 8.28096 12.8837 8.65194 12.6831 8.9636C12.0854 9.89249 11 10.7782 11 11.8828V12.3828"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M10.992 15.8828H11.001"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const LogoutIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 5.38281C2.15875 7.03077 1 9.21726 1 11.8828C1 16.8533 5.02944 20.8828 10 20.8828C14.9706 20.8828 19 16.8533 19 11.8828C19 9.21726 17.8412 7.03077 16 5.38281"
        stroke="#FF0000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 0.882813V9.88281M10 0.882813C9.29977 0.882813 7.99153 2.87711 7.5 3.38281M10 0.882813C10.7002 0.882812 12.0085 2.87711 12.5 3.38281"
        stroke="#FF0000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MultipleUsersIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.96699 24.6159C3.96699 24.6159 3.17366 23.9879 2.46032 23.1092C0.99899 21.3092 3.39766 19.8692 4.31232 19.1666C5.24166 18.4506 6.28032 18.0439 7.33232 17.9492M8.66566 15.2826C7.7816 15.2826 6.93375 14.9314 6.30863 14.3062C5.68351 13.6811 5.33232 12.8333 5.33232 11.9492C5.33232 11.0652 5.68351 10.2173 6.30863 9.5922C6.93375 8.96707 7.7816 8.61589 8.66566 8.61589M28.3643 24.6159C29.3643 24.6159 30.1577 23.9879 30.871 23.1092C32.3323 21.3092 29.9337 19.8692 29.019 19.1666C28.0897 18.4506 27.0523 18.0426 25.999 17.9492M25.3323 15.2826C26.2164 15.2826 27.0642 14.9314 27.6893 14.3062C28.3145 13.6811 28.6657 12.8333 28.6657 11.9492C28.6657 11.0652 28.3145 10.2173 27.6893 9.5922C27.0642 8.96707 26.2164 8.61589 25.3323 8.61589M21.887 20.7639C23.2497 21.6066 26.8217 23.3266 24.647 25.4786C23.5817 26.5305 22.399 27.2826 20.9097 27.2826H12.419C10.9297 27.2826 9.74699 26.5305 8.68432 25.4786C6.50832 23.3266 10.0803 21.6066 11.443 20.7639C13.0125 19.7959 14.8203 19.2833 16.6643 19.2833C18.5084 19.2833 20.3161 19.7959 21.8857 20.7639M11.999 10.6159C11.999 11.2287 12.1197 11.8356 12.3542 12.4017C12.5887 12.9679 12.9325 13.4824 13.3658 13.9157C13.7992 14.3491 14.3136 14.6928 14.8798 14.9273C15.446 15.1618 16.0528 15.2826 16.6657 15.2826C17.2785 15.2826 17.8853 15.1618 18.4515 14.9273C19.0177 14.6928 19.5321 14.3491 19.9655 13.9157C20.3988 13.4824 20.7426 12.9679 20.9771 12.4017C21.2116 11.8356 21.3323 11.2287 21.3323 10.6159C21.3323 9.37821 20.8407 8.19122 19.9655 7.31605C19.0903 6.44088 17.9033 5.94922 16.6657 5.94922C15.428 5.94922 14.241 6.44088 13.3658 7.31605C12.4907 8.19122 11.999 9.37821 11.999 10.6159Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MultiDataIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="19.6667"
        cy="13.5495"
        rx="8.66667"
        ry="2.66667"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M28.3333 19.5508C28.3333 21.0235 24.4531 22.2174 19.6667 22.2174C14.8802 22.2174 11 21.0235 11 19.5508"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M28.3333 13.5508V25.2841C28.3333 26.9042 24.4531 28.2174 19.6667 28.2174C14.8802 28.2174 11 26.9042 11 25.2841V13.5508"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <ellipse
        cx="10.3346"
        cy="4.21745"
        rx="8.66667"
        ry="2.66667"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M7.0013 13.5495C4.47888 13.2425 2.16119 12.4489 1.66797 10.8828M7.0013 20.2161C4.47888 19.9092 2.16119 19.1155 1.66797 17.5495"
        stroke="#006FE3"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.0013 26.8854C4.47888 26.5784 2.16119 25.7848 1.66797 24.2187L1.66797 4.21875"
        stroke="#006FE3"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M19 6.88542V4.21875"
        stroke="#006FE3"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const HouseIcon = (props: SVGProps<any>) => {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.66797 9.80954C1.66797 8.21464 2.31114 7.23721 3.64214 6.49649L9.12113 3.44737C11.9921 1.84964 13.4276 1.05078 15.0013 1.05078C16.575 1.05078 18.0105 1.84964 20.8815 3.44737L26.3605 6.49649C27.6915 7.23721 28.3346 8.21464 28.3346 9.80954C28.3346 10.242 28.3346 10.4583 28.2874 10.636C28.0393 11.57 27.1929 11.7174 26.3756 11.7174H3.62701C2.80966 11.7174 1.96333 11.57 1.7152 10.636C1.66797 10.4583 1.66797 10.242 1.66797 9.80954Z"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M14.9958 7.71875H15.0078"
        stroke="#006FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.33594 11.7188V23.0521M9.66927 11.7188V23.0521"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M20.3359 11.7188V23.0521M25.6693 11.7188V23.0521"
        stroke="#006FE3"
        stroke-width="1.5"
      />
      <path
        d="M24.3346 23.0508H5.66797C3.45883 23.0508 1.66797 24.8416 1.66797 27.0508C1.66797 27.419 1.96644 27.7174 2.33463 27.7174H27.668C28.0362 27.7174 28.3346 27.419 28.3346 27.0508C28.3346 24.8416 26.5438 23.0508 24.3346 23.0508Z"
        stroke="#006FE3"
        stroke-width="1.5"
      />
    </svg>
  );
};
