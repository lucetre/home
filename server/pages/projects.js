"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(810);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/projects/project-item.js


function ProjectItem({ data  }) {
    const imgSrc = data.cover?.file?.url || data.cover?.external?.url;
    const title = data.properties.Name?.title[0]?.plain_text;
    const description = data.properties.Description?.rich_text[0]?.plain_text;
    const startDate = data.properties.Date?.date?.start;
    const endDate = data.properties.Date?.date?.end;
    const github = data.properties.Github?.url;
    const youtube = data.properties.Youtube?.url;
    const page = data.properties.Page?.url;
    const presentation = data.properties.Presentation?.url;
    const colab = data.properties.Colab?.url;
    const tags = data.properties.Tags?.multi_select;
    const roles = data.properties.Roles?.multi_select;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "project-card max-w-sm",
        children: [
            imgSrc && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "rounded-t-xl",
                src: imgSrc,
                alt: "image",
                width: "100%",
                height: "50%",
                layout: "responsive",
                objectFit: "cover",
                quality: 100
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-4 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm",
                        children: [
                            startDate,
                            startDate && endDate ? " ~ " : "",
                            endDate
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-2 mb-1 text-justify text-sm",
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "table-cell text-center mb-2",
                        children: [
                            page && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "underline",
                                    href: page,
                                    children: "Page"
                                })
                            }),
                            github && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "underline",
                                    href: github,
                                    children: "GitHub"
                                })
                            }),
                            youtube && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "underline",
                                    href: youtube,
                                    children: "YouTube"
                                })
                            }),
                            presentation && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "underline",
                                    href: presentation,
                                    children: "Presentation"
                                })
                            }),
                            colab && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "underline",
                                    href: colab,
                                    children: "Colab"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "table-cell mb-2",
                        children: [
                            tags?.map((aTag)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "inline-block px-2 py-1 mr-2 mt-1 rounded-md bg-sky-200 dark:bg-sky-700 w-fit text-xs",
                                    children: aTag.name
                                }, aTag.id)
                            ),
                            roles?.map((aRole)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "inline-block px-2 py-1 mr-2 mt-1 rounded-md bg-emerald-200 dark:bg-emerald-700 w-fit text-xs",
                                    children: aRole.name
                                }, aRole.id)
                            )
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/projects.js




function Projects({ projects  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center justify-center min-h-screen mb-10 px-3",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                            children: [
                                "My Portfolio - ",
                                projects.results?.length,
                                " Projects"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "lucetre portfolio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "text-4xl font-bold sm:text-6xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "pl-4 text-blue-500",
                            children: [
                                projects.results?.length,
                                " "
                            ]
                        }),
                        "projects"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-12 m-4 gap-8",
                    children: projects.results?.map((aProject)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectItem, {
                            data: aProject
                        }, aProject.id)
                    )
                })
            ]
        })
    });
};
async function getStaticProps() {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Notion-Version": "2022-02-22",
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`
        },
        body: JSON.stringify({
            page_size: 100
        })
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_ID}/query`, options);
    const projects = await res.json();
    return {
        props: {
            projects
        }
    };
}


/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,810], () => (__webpack_exec__(433)));
module.exports = __webpack_exports__;

})();