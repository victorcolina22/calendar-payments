export function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0 0 48 48'
      {...props}
    >
      <circle cx='24' cy='24' r='20' fill='#f44336'></circle>
      <polygon fill='#fff' points='21,29 29,24 21,19'></polygon>
      <path
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        d='M24,14c5.5,0,10,4.476,10,10s-4.476,10-10,10	s-10-4.476-10-10S18.5,14,24,14'
      ></path>
    </svg>
  );
}
