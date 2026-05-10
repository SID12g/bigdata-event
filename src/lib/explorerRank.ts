export function getExplorerRank(score: number) {
  if (score >= 4) return "탐험 마스터";
  if (score >= 2) return "중급 탐험가";
  return "초보 탐험가";
}
