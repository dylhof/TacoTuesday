import React from 'react';
import { shallow } from 'enzyme';
import { RecipeCard } from './RecipeCard';

describe('RecipeCard', () => {
  let wrapper;
  let mockRecipe = {
    slug: 'Yum_Taco', 
    name: 'yummyTacos',
    recipe: 'lots of steps \n another step'}
  let mockClasses = {card: {}, list: {}}

  it('should match the snapshot', () => {
    //setup
    wrapper = shallow(
      <RecipeCard 
        tacoRecipe={mockRecipe}
        classes={mockClasses}/>)
    //expectation
    expect(wrapper).toMatchSnapshot()
  });
});