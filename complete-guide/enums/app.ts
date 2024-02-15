/* 
enums exist to restrict user to some choices
 */

const enum SeatChoice {
  AISLE = 100,
  MIDDLE,
  WINDOW = "window shopper",
}

const seat = SeatChoice.WINDOW;
console.log(typeof seat);
