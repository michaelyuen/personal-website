import styled from "styled-components";

const AvatarContainer = styled.section`
  text-align: center;

  svg,
  img {
    border-radius: 50%;
    height: 8em;
    width: 8em;
  }
`;

export default function Avatar() {
  return (
    <AvatarContainer className="Avatar">
      <img src="/images/portrait.png" alt="Michael Yuen" />
      {/* <img src="/images/avatar.svg" alt="Michael Yuen" /> */}
      {/* <svg
        width="264px"
        height="280px"
        viewBox="0 0 264 280"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <circle id="path-1" cx="120" cy="120" r="120"></circle>
          <path
            d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
            id="path-3"
          ></path>
          <path
            d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
            id="path-5"
          ></path>
        </defs>
        <g
          id="Avataaar"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            transform="translate(-825.000000, -1100.000000)"
            id="Avataaar/Circle"
          >
            <g transform="translate(825.000000, 1100.000000)">
              <g id="Mask"></g>
              <g
                id="Avataaar"
                strokeWidth="1"
                fillRule="evenodd"
                mask="url(#mask-4)"
              >
                <g id="Body" transform="translate(32.000000, 36.000000)">
                  <mask id="mask-6" fill="white">
                    <path
                      d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
                      id="path-5"
                    ></path>
                  </mask>
                  <path
                    fill="#D0C6AC"
                    d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
                    id="path-5"
                  ></path>
                  <g id="Skin/👶🏽-03-Brown" mask="url(#mask-6)" fill="#FFDBB4">
                    <g transform="translate(0.000000, 0.000000)" id="Color">
                      <rect x="0" y="0" width="264" height="280"></rect>
                    </g>
                  </g>
                  <path
                    d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
                    id="Neck-Shadow"
                    fillOpacity="0.100000001"
                    fill="#000000"
                    mask="url(#mask-6)"
                  ></path>
                </g>
                <g
                  id="Clothing/Overall"
                  transform="translate(0.000000, 170.000000)"
                >
                  <defs>
                    <path
                      d="M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z"
                      id="react-path-4800"
                    ></path>
                  </defs>
                  <mask id="react-mask-4801" fill="white">
                    <path
                      d="M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z"
                      id="react-path-4800"
                    ></path>
                  </mask>
                  <path
                    id="Overall"
                    fill="#B7C1DB"
                    fillRule="evenodd"
                    d="M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z"
                  ></path>

                  <g
                    id="Color/Palette/Gray-01"
                    mask="url(#react-mask-4801)"
                    fillRule="evenodd"
                    fill="#3C4F5C"
                  >
                    <rect
                      id="🖍Color"
                      x="0"
                      y="0"
                      width="264"
                      height="110"
                    ></rect>
                  </g>
                  <circle
                    id="Button"
                    fill="#F4F4F4"
                    fillRule="evenodd"
                    cx="81"
                    cy="83"
                    r="5"
                  ></circle>
                  <circle
                    id="Button"
                    fill="#F4F4F4"
                    fillRule="evenodd"
                    cx="183"
                    cy="83"
                    r="5"
                  ></circle>
                </g>
                <g
                  id="Face"
                  transform="translate(76.000000, 82.000000)"
                  fill="#000000"
                >
                  <g
                    id="Mouth/Smile"
                    transform="translate(2.000000, 52.000000)"
                  >
                    <defs>
                      <path
                        d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
                        id="react-path-4802"
                      ></path>
                    </defs>
                    <path
                      d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
                      id="react-path-4802"
                    ></path>
                    <use
                      id="Mouth"
                      fillOpacity="0.699999988"
                      fill="#000000"
                      fillRule="evenodd"
                    ></use>
                    <rect
                      id="Teeth"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      mask="url(#react-mask-4803)"
                      x="39"
                      y="2"
                      width="31"
                      height="16"
                      rx="5"
                    ></rect>
                    <g
                      id="Tongue"
                      strokeWidth="1"
                      fillRule="evenodd"
                      mask="url(#react-mask-4803)"
                      fill="#FF4F6D"
                    >
                      <g transform="translate(38.000000, 24.000000)">
                        <circle cx="11" cy="11" r="11"></circle>
                        <circle cx="21" cy="11" r="11"></circle>
                      </g>
                    </g>
                  </g>
                  <g
                    id="Nose/Default"
                    transform="translate(28.000000, 40.000000)"
                    fillOpacity="0.16"
                  >
                    <path
                      d="M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8"
                      id="Nose"
                    ></path>
                  </g>
                  <g
                    id="Eyes/Happy-😁"
                    transform="translate(0.000000, 8.000000)"
                    fillOpacity="0.599999964"
                  >
                    <path
                      d="M16.1601674,22.4473116 C18.006676,18.648508 22.1644225,16 26.9975803,16 C31.8136766,16 35.9591217,18.629842 37.8153518,22.4071242 C38.3667605,23.5291977 37.5821037,24.4474817 36.790607,23.7670228 C34.3395063,21.6597833 30.8587163,20.3437884 26.9975803,20.3437884 C23.2572061,20.3437884 19.8737584,21.5787519 17.4375392,23.5716412 C16.5467928,24.3002944 15.6201012,23.5583844 16.1601674,22.4473116 Z"
                      id="Squint"
                    ></path>
                    <path
                      d="M74.1601674,22.4473116 C76.006676,18.648508 80.1644225,16 84.9975803,16 C89.8136766,16 93.9591217,18.629842 95.8153518,22.4071242 C96.3667605,23.5291977 95.5821037,24.4474817 94.790607,23.7670228 C92.3395063,21.6597833 88.8587163,20.3437884 84.9975803,20.3437884 C81.2572061,20.3437884 77.8737584,21.5787519 75.4375392,23.5716412 C74.5467928,24.3002944 73.6201012,23.5583844 74.1601674,22.4473116 Z"
                      id="Squint"
                    ></path>
                  </g>
                  <g id="Eyebrow/Outline/Default" fillOpacity="0.599999964">
                    <g id="I-Browse" transform="translate(12.000000, 6.000000)">
                      <path
                        d="M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z"
                        id="Eyebrow"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z"
                        id="Eyebrow"
                        fillRule="nonzero"
                        transform="translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) "
                      ></path>
                    </g>
                  </g>
                </g>
                <g id="Top" strokeWidth="1" fillRule="evenodd">
                  <defs>
                    <rect
                      id="react-path-4807"
                      x="0"
                      y="0"
                      width="264"
                      height="280"
                    ></rect>
                    <path
                      id="react-path-4806"
                      d="M124.9 47.9999C119.1 30.2999 106.5 14.6999 89.6 6.69989C71.8 -1.80011 47.2 -2.50011 32.3 11.9999C31.9 12.3999 28.6 17.0999 28.4 17.0999C17.9 16.8999 8.79995 26.1999 4.69995 35.1999C-0.100055 45.4999 0.49995 57.9999 1.39995 69.1999C1.49995 70.3999 3.99995 87.5999 4.49995 87.1999C6.29995 85.5999 9.19995 85.3999 9.19995 85.3999C10.5999 89.9999 12.4 92.9999 13.9 94.7999C14.6 95.6999 16.0999 95.1999 16.0999 93.9999C16.1999 59.3999 31.9 47.3999 31.9 47.3999C34.4999 47.8999 37.2 46.9999 38.9 44.9999C43.8 39.4999 53.5 33.3999 70.7999 36.1999C75.1999 36.8999 78.9999 38.1999 82.3999 39.8999C87.7999 43.3999 96.0999 51.4999 89.9999 65.8999C89.9999 65.8999 96.1999 63.9999 98.4999 56.0999C111.2 79.9999 104.3 116.2 104.3 116.2C114.6 107 120.2 84.8999 120.2 84.8999C123.6 85.9999 126.2 87.8999 126.2 87.8999C126 87.7999 128.1 81.9999 128.6 74.7999C128.9 65.5999 127.7 56.5999 124.9 47.9999Z"
                    ></path>
                  </defs>
                  <mask id="react-mask-4805" fill="white">
                    <rect
                      id="react-path-4807"
                      x="0"
                      y="0"
                      width="264"
                      height="280"
                    ></rect>
                  </mask>
                  <g id="Mask"></g>
                  <g id="Top/Short-Hair/Swoop-04" mask="url(#react-mask-4805)">
                    <g transform="translate(-1.000000, 0.000000)">
                      <g
                        id="Facial-Hair/Moustache-Fancy"
                        transform="translate(49.000000, 72.000000)"
                      >
                        <defs>
                          <path
                            d="M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z"
                            id="react-path-4809"
                          ></path>
                        </defs>
                        <mask id="react-mask-4808" fill="white">
                          <path
                            d="M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z"
                            id="react-path-4809"
                          ></path>
                        </mask>
                        <use
                          id="Moustache-U-a-Question"
                          fill="#28354B"
                          fillRule="evenodd"
                        ></use>
                        <g
                          id="Color/Hair/Brown"
                          mask="url(#react-mask-4808)"
                          fill="#2C1B18"
                        >
                          <g
                            transform="translate(-32.000000, 0.000000)"
                            id="Color"
                          >
                            <rect x="0" y="0" width="264" height="244"></rect>
                          </g>
                        </g>
                      </g>
                      <g transform="translate(70.000000, 17.000000)">
                        <mask id="react-mask-4804" fill="white">
                          <path
                            id="react-path-4806"
                            d="M124.9 47.9999C119.1 30.2999 106.5 14.6999 89.6 6.69989C71.8 -1.80011 47.2 -2.50011 32.3 11.9999C31.9 12.3999 28.6 17.0999 28.4 17.0999C17.9 16.8999 8.79995 26.1999 4.69995 35.1999C-0.100055 45.4999 0.49995 57.9999 1.39995 69.1999C1.49995 70.3999 3.99995 87.5999 4.49995 87.1999C6.29995 85.5999 9.19995 85.3999 9.19995 85.3999C10.5999 89.9999 12.4 92.9999 13.9 94.7999C14.6 95.6999 16.0999 95.1999 16.0999 93.9999C16.1999 59.3999 31.9 47.3999 31.9 47.3999C34.4999 47.8999 37.2 46.9999 38.9 44.9999C43.8 39.4999 53.5 33.3999 70.7999 36.1999C75.1999 36.8999 78.9999 38.1999 82.3999 39.8999C87.7999 43.3999 96.0999 51.4999 89.9999 65.8999C89.9999 65.8999 96.1999 63.9999 98.4999 56.0999C111.2 79.9999 104.3 116.2 104.3 116.2C114.6 107 120.2 84.8999 120.2 84.8999C123.6 85.9999 126.2 87.8999 126.2 87.8999C126 87.7999 128.1 81.9999 128.6 74.7999C128.9 65.5999 127.7 56.5999 124.9 47.9999Z"
                          ></path>
                        </mask>
                        <path
                          id="Short-Hair"
                          stroke="none"
                          fill="#28354B"
                          fillRule="evenodd"
                          d="M124.9 47.9999C119.1 30.2999 106.5 14.6999 89.6 6.69989C71.8 -1.80011 47.2 -2.50011 32.3 11.9999C31.9 12.3999 28.6 17.0999 28.4 17.0999C17.9 16.8999 8.79995 26.1999 4.69995 35.1999C-0.100055 45.4999 0.49995 57.9999 1.39995 69.1999C1.49995 70.3999 3.99995 87.5999 4.49995 87.1999C6.29995 85.5999 9.19995 85.3999 9.19995 85.3999C10.5999 89.9999 12.4 92.9999 13.9 94.7999C14.6 95.6999 16.0999 95.1999 16.0999 93.9999C16.1999 59.3999 31.9 47.3999 31.9 47.3999C34.4999 47.8999 37.2 46.9999 38.9 44.9999C43.8 39.4999 53.5 33.3999 70.7999 36.1999C75.1999 36.8999 78.9999 38.1999 82.3999 39.8999C87.7999 43.3999 96.0999 51.4999 89.9999 65.8999C89.9999 65.8999 96.1999 63.9999 98.4999 56.0999C111.2 79.9999 104.3 116.2 104.3 116.2C114.6 107 120.2 84.8999 120.2 84.8999C123.6 85.9999 126.2 87.8999 126.2 87.8999C126 87.7999 128.1 81.9999 128.6 74.7999C128.9 65.5999 127.7 56.5999 124.9 47.9999Z"
                        ></path>
                        <g
                          id="Skin/👶🏽-03-Brown"
                          mask="url(#react-mask-4804)"
                          fill="#2C1B18"
                        >
                          <g
                            transform="translate(0.000000, 0.000000) "
                            id="Color"
                          >
                            <rect x="0" y="0" width="264" height="280"></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg> */}
    </AvatarContainer>
  );
}
