export function getCurrentTime() {
  return new Date();
}

export function getGreetingBasedOnTime() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good morning!";
  } else if (currentHour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}