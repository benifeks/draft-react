import { displaySetters } from "../constants";

export function updateDisplayState({ playerScore, dealerScore, result }) {
  displaySetters.setPlayerScore?.(playerScore);
  displaySetters.setDealerScore?.(dealerScore);
  displaySetters.setGameResult?.(result);
}
