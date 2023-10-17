const movies = [
  {
    id: '2',
    image: 'https://larepublica.cronosmedia.glr.pe/migration/images/TKMJW56NFFHWBKDZJ4YDHD2GCI.jpg',
    name: 'Jumanji',
    releaseYear: 2019,
  },
  {
    id: '3',
    image: 'https://miro.medium.com/v2/resize:fit:1024/0*ZL2drsK4NVwCjKEc',
    name: 'The Croods 2',
    releaseYear: 2020,
  },
  {
    id: '1',
    image: 'https://www.koimoi.com/wp-content/new-galleries/2021/10/red-notice-actors-dwayne-johnson-gal-gadot-ryan-reynolds-expected-salary-for-their-work-will-blow-your-mind-001.jpg',
    name: 'Red Notice',
    releaseYear: 2021,
  },
  {
    id: '5',
    image: 'https://areajugones.sport.es/wp-content/uploads/2022/07/minions-1080x609.jpeg',
    name: 'Minions',
    releaseYear: 2022,
  },
  {
    id: '4',
    image: 'https://somosnoticiascol.com/wp-content/uploads/2023/06/02elemental-1024x576.jpg',
    name: 'Elemental',
    releaseYear: 2023,
  },
  {
    id: '6',
    image: 'https://libero.cronosmedia.glr.pe/original/2023/03/31/642743b04b970659371d4b72.jpg',
    name: 'Misterio a la vista',
    releaseYear: 2023,
  },
];

const getMovies = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(movies);
  }, 300);
});

export default getMovies;
