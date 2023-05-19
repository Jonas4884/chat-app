import React from 'react';
import { MDBSelect } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBSelect
      multiple
      data={[
        {
          text: 'One',
          icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp',
        },
        {
          text: 'Two',
          icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.webp',
        },
        {
          text: 'Three',
          icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.webp',
        },
        {
          text: 'Four',
          icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.webp',
        },
        {
          text: 'Five',
          icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp',
        },
      ]}
    />
  );
}