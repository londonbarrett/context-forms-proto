import React from 'react';
import AppHeader from './components/AppHeader';
import CommentForm from './components/CommentForm';

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
        age="66"
        accept
        rating={5}
        onSubmit={handleOnSubmit}
      />
    </section>
  </main>
);

export default App;
