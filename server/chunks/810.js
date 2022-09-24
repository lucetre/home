"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(162);
;// CONCATENATED MODULE: ./components/dark-mode-toggle-button.js


function DarkModeToggleButton() {
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: "inline-flex items-center border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 focus:outline-none bg-gray-100 hover:bg-gray-50 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-300 ",
            type: "button",
            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "visible dark:invisible dark:h-0 dark:w-0 h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                        clipRule: "evenodd"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "visible dark:visible dark:h-5 dark:w-5 h-0 w-0",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "favicon.png",
                                    style: {
                                        width: 35,
                                        height: 35
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-3 text-xl",
                                    children: "My Portfolio"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "md:ml-auto flex flex-wrap items-center text-base justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://lucetre.github.io",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Blog"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DarkModeToggleButton, {})
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "body-font",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
                            children: "\xa9 2022 lucetre"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    href: "https://www.linkedin.com/in/lucetre/",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2",
                                                stroke: "none"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    href: "https://github.com/lucetre",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        x: "0px",
                                        y: "0px",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 172 172",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            transform: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                stroke: "none",
                                                strokeWidth: "1",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: "10",
                                                strokeDasharray: "",
                                                strokeDashoffset: "0",
                                                style: {
                                                    mixBlendMode: "normal"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M0,172v-172h172v172z",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M61.20104,161.11584c2.44584,-1.05264 4.15896,-3.48472 4.15896,-6.31584v-18.576c0,-0.67768 0.05504,-1.38288 0.14104,-2.0984c-0.04816,0.01376 -0.09288,0.02408 -0.14104,0.0344c0,0 -10.32,0 -12.384,0c-5.16,0 -9.632,-2.064 -11.696,-6.192c-2.408,-4.472 -3.44,-12.04 -9.632,-16.168c-1.032,-0.688 -0.344,-1.72 1.72,-1.72c2.064,0.344 6.536,3.096 9.288,6.88c3.096,3.784 6.192,6.88 11.696,6.88c8.55528,0 13.1408,-0.43 15.89968,-1.9092c3.21296,-4.77816 7.66088,-8.4108 12.30832,-8.4108v-0.086c-19.49792,-0.62608 -31.95416,-7.10704 -37.754,-17.114c-12.6076,0.14448 -23.58464,1.3932 -29.84888,2.43208c-0.19952,-1.12488 -0.37152,-2.25664 -0.51944,-3.39528c6.18168,-1.01824 16.65992,-2.22568 28.7068,-2.45616c-0.38528,-0.94944 -0.71896,-1.92296 -1.00104,-2.92056c-12.07784,-0.61232 -22.50104,-0.13416 -28.16328,0.33368c-0.0688,-1.14208 -0.16168,-2.28072 -0.17544,-3.43656c5.67256,-0.4644 15.81368,-0.9288 27.58192,-0.38184c-0.27176,-1.72 -0.4472,-3.47784 -0.4472,-5.30792c0,-5.848 2.064,-12.04 5.848,-17.2c-1.72,-5.848 -4.128,-18.232 0.688,-22.704c9.288,0 15.824,4.472 18.92,7.224c5.84456,-2.41144 12.38056,-3.78744 19.60456,-3.78744c7.224,0 13.76,1.376 19.264,3.784c3.096,-2.752 9.632,-7.224 18.92,-7.224c5.16,4.816 2.408,17.2 0.688,22.704c3.784,5.16 5.848,11.008 5.504,17.2c0,1.66496 -0.1548,3.27144 -0.3784,4.84696c12.03656,-0.59168 22.45288,-0.11696 28.22176,0.35088c-0.00688,1.15928 -0.11352,2.29104 -0.17544,3.43656c-5.74824,-0.47472 -16.426,-0.9632 -28.75496,-0.30616c-0.30616,1.15584 -0.67768,2.28072 -1.118,3.3712c12.19824,0.15824 22.9276,1.33816 29.40512,2.37016c-0.14792,1.14208 -0.31992,2.27384 -0.51944,3.39528c-6.57728,-1.05264 -17.78824,-2.28416 -30.54376,-2.34608c-5.7276,9.90032 -17.9568,16.3572 -37.07288,17.11056v0.10664c8.944,0 17.2,13.416 17.2,22.704v18.576c0,2.83112 1.71312,5.2632 4.15896,6.31584c31.51384,-10.43008 54.32104,-40.15168 54.32104,-75.11584c0,-43.62608 -35.49048,-79.12 -79.12,-79.12c-43.62952,0 -79.12,35.49392 -79.12,79.12c0,34.96416 22.8072,64.68576 54.32104,75.11584z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "",
                                                        fill: "none"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    href: "https://www.youtube.com/channel/UCKUdzN8hN6-IrJmkt8GMgMQ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        x: "0px",
                                        y: "0px",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 172 172",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            transform: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                fill: "none",
                                                fillRule: "nonzero",
                                                stroke: "none",
                                                strokeWidth: "1",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: "10",
                                                strokeDasharray: "",
                                                strokeDashoffset: "0",
                                                style: {
                                                    mixBlendMode: "normal"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M0,172v-172h172v172z",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M154.45063,49.88c-1.37063,-7.56531 -7.90125,-13.07469 -15.48,-14.79469c-11.34125,-2.40531 -32.33063,-4.12531 -55.04,-4.12531c-22.69594,0 -44.02125,1.72 -55.37594,4.12531c-7.56531,1.72 -14.10937,6.88 -15.48,14.79469c-1.38406,8.6 -2.75469,20.64 -2.75469,36.12c0,15.48 1.37063,27.52 3.09063,36.12c1.38406,7.56531 7.91469,13.07469 15.48,14.79469c12.04,2.40531 32.68,4.12531 55.38937,4.12531c22.70938,0 43.34938,-1.72 55.38938,-4.12531c7.56531,-1.72 14.09594,-6.88 15.48,-14.79469c1.37062,-8.6 3.09062,-20.98937 3.44,-36.12c-0.69875,-15.48 -2.41875,-27.52 -4.13875,-36.12zM65.36,110.08v-48.16l41.96531,24.08z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "",
                                                        fill: "none"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    href: "https://www.instagram.com/sangjun_son/",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                width: "20",
                                                height: "20",
                                                x: "2",
                                                y: "2",
                                                rx: "5",
                                                ry: "5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-primary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ })

};
;