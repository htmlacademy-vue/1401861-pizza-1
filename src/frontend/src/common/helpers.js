import { MODIFIER_IMAGE } from "@/common/constants";

export const getNameImage = (name) => {
  const nameImage = MODIFIER_IMAGE.filter((obj) => {
    return obj.name === name;
  });
  return nameImage[0].value;
};

export const addNewValue = (obj) => {
  return {
    ...obj,
    nameImage: getNameImage(obj.name),
  };
};
