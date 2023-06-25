import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data/products.json";
import { shuffle } from "lodash";
import { productSlice } from "../ProductSlice";
const initialState = {
  itemList: [],
  cardItems: [],
  error: null,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,

  reducers: {
    addItemList: (state, action) => {
      state.itemList = action.payload;
      state.error = null;
    },

    addCardItem: (state, action) => {
      state.cardItems.push(action.payload);
    },
  },
});

export const fetchAllItemList = () => {
  return (dispatch) => {
    console.log("AllList: ");
    const itemList = [];
    for (const product of data.products) {
      product.models.forEach((model) => {
        model.serries.forEach((serry) => {
          itemList.push(serry);
        });
      });
    }

    // Ngẫu nhiên các phần tử trong mảng itemList
    const shuffledItemList = shuffle(itemList);

    dispatch(addItemList(shuffledItemList));
  };
};

export const fetchItemList = (type) => {
  return (dispatch) => {
    console.log("Slice: ", type);
    const itemList = [];
    for (const product of data.products) {
      if (product.type === type) {
        product.models.forEach((model) => {
          if (model.serries) {
            itemList.push(
              ...model.serries.map((item, index) => ({
                ...item,
                key: `${item.id}-${index}`,
              }))
            );
          }
        });
      }
    }
    console.log(itemList);
    dispatch(addItemList(itemList));
  };
};

export const fetchModelList = (id, type) => {
  return (dispatch) => {
    const itemList = [];
    console.log(id);

    for (const product of data.products) {
      if (product.type === type) {
        const models = product.models;
        for (const model of models) {
          if (model.id === id) {
            console.log(model.serries);
            itemList.push(
              ...model.serries.map((item, index) => ({
                ...item,
                key: `${item.id}-${index}`,
              }))
            );
          }
        }
      }
    }
    dispatch(addItemList(itemList));
  };
};

export const fetchItemWithID = (id) => {
  return (dispatch) => {
    for (const product of data.products) {
      const models = product.models;
      for (const model of models) {
        const serries = model.serries;
        for (const serry of serries) {
          if (serry.id == id) {
            const itemList = [];
            itemList.push(serry);
            dispatch(addItemList(itemList));
          }
        }
      }
    }
  };
};

export const { addItemList, addCardItem } = itemSlice.actions;
export default itemSlice.reducer;
