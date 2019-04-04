export const cardsLoaded = cards => {
  return {
    type: "CARDS-LOADED",
    cards
  };
};

export const cardLoaded = card => {
  return {
    type: "CARD-LOADED",
    card
  };
};

export const currentCardPropChanged = (prop, value) => {
  return {
    type: "CARD-PROP-CHANGED",
    prop,
    value
  };
};
