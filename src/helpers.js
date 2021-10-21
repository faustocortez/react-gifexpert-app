export const getRandomAnime = () => {
  const animes = [
    'Naruto',
    'Black Cover',
    'Hinuyasha',
    'Dragon Ball Z',
    'Ranma 1/2',
    'Akame Ga Kill',
    'Full Metal Alchemist: Brotherhood',
    'Boku No Hero'
  ];
  
  const randomIndex = Math.floor(Math.random() * 8);
  
  const anime = animes[randomIndex];

  return anime;
}