const currentCard = function(state = null, action) {
  console.log(action.type, action);

  switch (action.type) {
    case "CARD-LOADED":
      return action.card;

    case "CARD-PROP-CHANGED":
      return {
        ...state,
        [action.prop]: action.value
      };

    default:
      return state;
  }
};

export default currentCard;
