interface ImageProps {
  title: string;
  poster_path: string;
}
export const Image = ({ title, poster_path }: ImageProps) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w780${poster_path}`}
      alt={title}
      className={`w-full object-cover  brightness-90 rounded-md`}
    />
  );
};
