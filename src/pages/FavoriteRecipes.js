import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" showIcon={ false } />
      <Footer />
    </div>
  );
}
