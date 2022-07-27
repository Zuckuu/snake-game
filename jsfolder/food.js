import { onSnake, expandSnake} from "./snake.js";
import { randomGridPosition } from "./grid.js";

//setting food in random locations
let food = getRandomFoodPosition();

//rate on expanding the snake
const EXPANSION_RATE = 1;

//updating the food
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

//drawing on the board
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

//getting a random position for food
//and checking so that it will never be on the snake
function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
