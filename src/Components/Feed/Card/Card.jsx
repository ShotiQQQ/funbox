import React, {useState} from 'react';
import s from './card.module.scss';
import cn from 'classnames';

const Card = ({ category, portions, present, satisfied, weight, disabled, descr }) => {
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    if (disabled) {
      return
    } else {
      setSelected(!selected);
    }
  }

  return (
    <li className={cn(s.card)}>
      <div className={cn(s.main, {[s.disabled]: disabled}, {[s.selectedCard]:selected})} onClick={handleSelect}>
        <span className={s.pretitle}>Сказочное заморское яство</span>
        <h2 className={s.title}>Нямушка</h2>
        <span className={s.category}>с {category}</span>
        <span className={s.portions}><span className={s.bold}>{portions}</span> порций</span>
        <span className={s.present}><span className={s.bold}>{present}</span>
          {+present < 5 ? <span> мыши </span> : <span> мышей </span>}
          в подарок</span>
        {satisfied && <span className={s.satisfied}>заказчик доволен</span>}

        <div className={cn(s.weight, {[s.selectedWeight]:selected})}>
          <span className={s.count}>{weight}</span>
          <span>кг</span>
        </div>
      </div>
      <div className={s.bottom}>
        {!disabled && !selected &&
          (
          <div>
            <span className={s.text}>Чего сидишь? Порадуй котэ,</span>
            <button className={s.buy} onClick={handleSelect}>&nbsp;купи.</button>
          </div>
          )
        }
        {disabled &&
          (<div>
            <span className={s.stayOut}>Печалька, c {category} закончился.</span>
          </div>)
        }
        {selected &&
          (<div>
            <span className={s.text}>{descr}</span>
          </div>)
        }
      </div>
    </li>
  );
};

export default Card;