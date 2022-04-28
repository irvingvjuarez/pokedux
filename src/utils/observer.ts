const config = {
  threshold: 0.1,
  // rootMargin: "200px",
}

// const isFullyVisible = (entry: IntersectionObserverEntry) => entry.intersectionRatio >= 1
const listening = (el: IntersectionObserverEntry) => {
  if(el.intersectionRatio >= 0.75){
    console.log("Hi")
  }
}

export const observer = new IntersectionObserver((entries) => {
  entries
    .forEach(listening)
}, config)