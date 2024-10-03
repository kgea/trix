const attributes = {
  default: {
    tagName: "p",
    parse: false,
    breakOnReturn: true,
  },
  quote: {
    tagName: "blockquote",
    nestable: true,
  },
  heading1: {
    tagName: "h1",
    terminal: false,
    breakOnReturn: true,
    exclusive: true,
    group: "heading",
  },
  heading2: {
    tagName: "h2",
    terminal: false,
    breakOnReturn: true,
    exclusive: true,
    group: "heading",
  },
  heading3: {
    tagName: "h3",
    terminal: false,
    breakOnReturn: true,
    exclusive: true,
    group: "heading",
  },
  code: {
    tagName: "pre",
    terminal: true,
    htmlAttributes: [ "language" ],
    text: {
      plaintext: true,
    },
  },
  bulletList: {
    tagName: "ul",
    parse: false,
  },
  bullet: {
    tagName: "li",
    listAttribute: "bulletList",
    group: false,
    nestable: true,
    test(element) {
      return tagName(element.parentNode) === attributes[this.listAttribute].tagName
    },
  },
  numberList: {
    tagName: "ol",
    parse: false,
  },
  number: {
    tagName: "li",
    listAttribute: "numberList",
    group: false,
    nestable: true,
    test(element) {
      return tagName(element.parentNode) === attributes[this.listAttribute].tagName
    },
  },
  attachmentGallery: {
    tagName: "div",
    exclusive: true,
    terminal: true,
    parse: false,
    group: false,
  },
}

const tagName = (element) => element?.tagName?.toLowerCase()

export default attributes
