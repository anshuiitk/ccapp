const cards = function(state = [], action) {
  console.log(action.type, action);

  switch (action.type) {
    case "CARDS-LOADED":
      return action.cards;

    default:
      return state;
  }
};

export default cards;
