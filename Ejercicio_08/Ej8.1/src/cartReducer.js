export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        return state.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    }

    case "INC":
      return state.map(i =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );

    case "DEC":
      return state.map(i =>
        i.id === action.payload && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      );

    case "REMOVE":
      return state.filter(i => i.id !== action.payload);

    default:
      return state;
  }
}
