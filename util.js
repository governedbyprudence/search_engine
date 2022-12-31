function delayer(callback,delay=500)//helps delay the recieve Function
{
    let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback.apply(null,args);
    }, delay);
  };
}

const clear=(event)=>//LOL
{
    if (!wrapper.contains(event.target))wrapper.innerHTML="";
}

