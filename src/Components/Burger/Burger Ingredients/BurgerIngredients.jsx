import React, { Component } from 'react';

import PropTypes from 'prop-types';
import style from './BurgerIngredients.module.css';

class BurgerIngredients extends Component {
  render() {
    this.ingredients = null;

    switch (this.props.type) {
      case 'bread-bottom':
        this.ingredients = <div className={style.BreadBottom} />;
        break;

      case 'bread-top':
        this.ingredients = (
          <div className={style.BreadTop}>
            <div className={style.Seeds1} />
            <div className={style.Seeds2} />
          </div>
        );
        break;

      case 'meat':
        this.ingredients = <div className={style.Meat} />;
        break;

      case 'salad':
        this.ingredients = <div className={style.Salad} />;
        break;

      case 'cheese':
        this.ingredients = <div className={style.Cheese} />;
        break;

      case 'bacon':
        this.ingredients = <div className={style.Bacon} />;
        break;

      default:
        this.ingredients = null;
        break;
    }
    return this.ingredients;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
