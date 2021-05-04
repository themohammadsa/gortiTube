export const DateToString = (date) => {
  let newDate = new Date(date);
  return newDate.toDateString().substring(4);
};

export const ViewsToString = (views) => {
  let newView = views / 1000;
  return Math.round(newView) + "K";
};

export const TitleShortner = (title) => {
  let newTitle = title;
  return newTitle.length < 58 ? newTitle : newTitle.substring(0, 55) + "...";
};

export const watchById = (id) => {
  return "https://www.youtube.com/embed/" + id
}