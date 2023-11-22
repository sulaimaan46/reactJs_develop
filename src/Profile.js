import RegisterForm from './RegisterForm.js';
import getImageUrl from './getImageUrl.js';
import {data} from './data.js';

export default function Profile() {
    return (
      <Avatar url ={true}/>
    );
  }

function Avatar({url}) {
    const listItems = data.map(person =>
        <section>
        <img
            src={url && getImageUrl(person.imageId)}
            alt={person.name}
        />
        <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
        </p>
        </section>
     );

    return (
        <div>{listItems}</div>
    );
  }

  export function Heading1() {
    return (
      <section>
        <h1> {$headingName.heading} </h1>
        <Profile />
        <RegisterForm />
      </section>
    );
  }

  export function Heading2() {
    return (
      <section>
        <h1> {$headingName.heading} </h1>
        <RegisterForm />
      </section>
    );
  }

  const $headingName = {
    heading1 : 'Register Form',
    heading2 : 'Login Form',
}