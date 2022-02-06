// Group Add To card product
const groupProducts = function (card, addTocardItems) {
   const present = card.find((el) => el._id === addTocardItems._id);

   if (present) {
      return card.map((el) =>
         el._id === addTocardItems._id
            ? { ...el, quntity: el.quntity + addTocardItems.quntity, totalPrice: el.totalPrice + addTocardItems.price * addTocardItems.quntity }
            : el
      );
   }

   return [
      ...card,
      {
         ...addTocardItems,
         quntity: addTocardItems.quntity ? addTocardItems.quntity : 1,
         totalPrice: addTocardItems.price * addTocardItems.quntity,
      },
   ];
};

export default groupProducts;
