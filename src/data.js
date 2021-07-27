export const idGenerator = () => {
  return `${Math.floor(Math.random() * 10000) + 1}`;
};

export const currentData = [
  {
    id: "964445",
    title: "hello",
    imgUrl:
      "https://image.shutterstock.com/image-photo/new-pair-yellow-sneakers-on-600w-1402034519.jpg",
    name: "utkarsh",
    category: "General",
    description: "hello how are you",
    dateTime: "1/12/20",
  },
  {
    id: "9633353",
    title: "hello2",
    imgUrl:
      "https://gratisography.com/wp-content/uploads/2021/04/gratisography-green-sneakers-03-free-stock-photo-1170x780.jpg",
    name: "utkarsh2",
    category: "General2",
    description: "hello how are you2",
    dateTime: "1/12/20",
  },
  {
    id: "9897886",
    title: "hello3",
    imgUrl:
      "https://image.shutterstock.com/image-photo/new-pair-yellow-sneakers-on-600w-1402034519.jpg",
    name: "utkars3h",
    category: "General3",
    description: "hello how are you3",
    dateTime: "1/12/20",
  },
];

export const gettingData = () => {
  return currentData;
};
