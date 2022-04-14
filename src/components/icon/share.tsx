import React from 'react';

interface ShareProps {
  color: string;
  width: string;
  height: string;
}

const Share: React.FC<ShareProps> = props => {
  const { color, width, height } = props

  return (
    <svg style={{ width, height }} fill={color} viewBox="0 0 1119 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7017" width="200" height="200"><path d="M845.549139 525.561219c-12.281859 0-23.54023-5.117441-32.751624-13.305347a46.952524 46.952524 0 0 1 0-66.526737l182.18091-183.204397-182.18091-182.18091c-18.422789-18.422789-18.422789-48.103948 0-66.526737s48.103948-18.422789 66.526737 0l214.932534 215.956022a46.952524 46.952524 0 0 1 0 66.526737L879.324252 512.255872a51.878061 51.878061 0 0 1-33.775113 13.305347zM47.2283 1024h-4.093953c-25.587206-2.046977-45.033483-25.587206-42.986507-51.174413 26.610695-284.529735 131.006497-496.391804 313.187406-627.398301 315.234383-227.214393 741.005497-132.029985 758.404798-127.936032 25.587206 5.117441 40.93953 30.704648 34.798601 56.291854-5.117441 24.563718-30.704648 40.93953-56.291854 34.798601-3.070465-1.023488-402.230885-89.043478-682.666667 113.607197-158.64068 114.630685-250.754623 302.952524-273.271364 558.824587C91.238295 1005.577211 70.76853 1024 47.2283 1024z" p-id="7018"></path></svg>
  )
}


export default Share