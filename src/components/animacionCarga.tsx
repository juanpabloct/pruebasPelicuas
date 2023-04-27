export const AnimacionCarga = () => {
  return (
    <ul className=" loading inline-flex m-0 p-0 list-none gap-[5px]">
      <li className="w-3 h-3 bg-slate-500 animate-loading "></li>
      <li className="w-3 h-3 bg-slate-500 animate-loading delay-1s"></li>
      <li className="w-3 h-3 bg-slate-500 animate-loading delay-300"></li>
      <li className="w-3 h-3 bg-slate-500 animate-loading delay-500"></li>
      <li className="w-3 h-3 bg-slate-500 animate-loading delay-700"></li>
    </ul>
  );
};
