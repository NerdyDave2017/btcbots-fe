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
export const HeroCurrencies = (props: SVGProps<any>) => {
  return (
    <svg
      width="141"
      height="50"
      viewBox="0 0 141 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
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
