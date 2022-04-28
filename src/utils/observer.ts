const callback: IntersectionObserverCallback = (entries) => {
  const el = entries[0]
  if(el.intersectionRatio >= 1){
    console.log("Trigger something here")
  }
}
const config = {
  threshold: 1.0,
  rootMargin: "0px",
}

export const observer = new IntersectionObserver(callback, config)