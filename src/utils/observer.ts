const callback = () => console.log("Hello World")
const config = {
  threshold: 1.0
}

export const observer = new IntersectionObserver(callback, config)