import React from 'react';
import AppHeader from './components/AppHeader';
import CommentForm from './components/CommentForm';
// import UserForm from './components/UserForm';

const handleOnSubmit = (values) => {
  console.log(values);
};

const App = () => (
  <main>
    <AppHeader />
    <section>
      <CommentForm
        firstName="Joe"
        lastName="Strummer"
        age="666"
        accept
        rating={4}
        region="2"
        onSubmit={handleOnSubmit}
      />
      {/* <UserForm /> */}
    </section>
  </main>
);

export default App;
